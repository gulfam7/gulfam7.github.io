// src/lib/mri.js
//
// Minimal MRI maths for the research visualisations. The point of doing this
// properly rather than faking a blur is that the artifacts on screen are the
// real thing: undersample k-space and you get true wrap-around aliasing;
// perturb blade phase and you get true ghosting.
//
// Everything runs on N=64 grids, so an iterative radix-2 FFT costs well under
// a millisecond per frame.

/** In-place iterative radix-2 FFT. `re`/`im` must have power-of-two length. */
export function fft1d(re, im, inverse) {
  const n = re.length;

  // bit-reversal permutation
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      let t = re[i]; re[i] = re[j]; re[j] = t;
      t = im[i]; im[i] = im[j]; im[j] = t;
    }
  }

  for (let len = 2; len <= n; len <<= 1) {
    const ang = ((inverse ? 2 : -2) * Math.PI) / len;
    const wr = Math.cos(ang);
    const wi = Math.sin(ang);
    const half = len >> 1;
    for (let i = 0; i < n; i += len) {
      let cr = 1;
      let ci = 0;
      for (let k = 0; k < half; k++) {
        const a = i + k;
        const b = a + half;
        const vr = re[b] * cr - im[b] * ci;
        const vi = re[b] * ci + im[b] * cr;
        re[b] = re[a] - vr;
        im[b] = im[a] - vi;
        re[a] += vr;
        im[a] += vi;
        const ncr = cr * wr - ci * wi;
        ci = cr * wi + ci * wr;
        cr = ncr;
      }
    }
  }

  if (inverse) {
    for (let i = 0; i < n; i++) {
      re[i] /= n;
      im[i] /= n;
    }
  }
}

/** In-place 2D FFT over an N x N grid stored row-major in Float64Arrays. */
export function fft2d(re, im, n, inverse) {
  const rowRe = new Float64Array(n);
  const rowIm = new Float64Array(n);

  for (let y = 0; y < n; y++) {
    const o = y * n;
    for (let x = 0; x < n; x++) { rowRe[x] = re[o + x]; rowIm[x] = im[o + x]; }
    fft1d(rowRe, rowIm, inverse);
    for (let x = 0; x < n; x++) { re[o + x] = rowRe[x]; im[o + x] = rowIm[x]; }
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) { rowRe[y] = re[y * n + x]; rowIm[y] = im[y * n + x]; }
    fft1d(rowRe, rowIm, inverse);
    for (let y = 0; y < n; y++) { re[y * n + x] = rowRe[y]; im[y * n + x] = rowIm[y]; }
  }
}

/**
 * A Shepp-Logan-flavoured brain phantom: skull ring, two ventricles and a few
 * lesions. Deliberately structured so aliasing is legible when it appears.
 */
export function brainPhantom(n = 64) {
  const img = new Float64Array(n * n);
  const ellipses = [
    // cx,   cy,    rx,    ry,   angle, intensity
    [0.0,  0.0,   0.70,  0.86,  0.0,  0.42], // skull / outer
    [0.0,  0.0,   0.64,  0.80,  0.0,  0.62], // brain tissue
    [0.0,  0.14,  0.34,  0.44,  0.0,  0.50], // inner white matter
    [-0.20, 0.02, 0.11,  0.24,  0.22, 0.14], // left ventricle
    [0.20,  0.02, 0.11,  0.24, -0.22, 0.14], // right ventricle
    [0.0,  -0.42, 0.13,  0.12,  0.0,  0.80], // bright structure
    [-0.32,-0.30, 0.06,  0.06,  0.0,  0.86], // lesion
    [0.30, -0.14, 0.05,  0.05,  0.0,  0.24], // dark lesion
  ];

  for (let y = 0; y < n; y++) {
    const py = (2 * (y + 0.5)) / n - 1;
    for (let x = 0; x < n; x++) {
      const px = (2 * (x + 0.5)) / n - 1;
      let v = 0;
      for (let e = 0; e < ellipses.length; e++) {
        const [cx, cy, rx, ry, ang, val] = ellipses[e];
        const dx = px - cx;
        const dy = py - cy;
        const ca = Math.cos(ang);
        const sa = Math.sin(ang);
        const u = (dx * ca + dy * sa) / rx;
        const w = (-dx * sa + dy * ca) / ry;
        if (u * u + w * w <= 1) v += val;
      }
      img[y * n + x] = v;
    }
  }
  return img;
}

/** Swap quadrants so DC sits at the centre (display convention). */
export function fftshift(src, n) {
  const out = new Float64Array(n * n);
  const h = n >> 1;
  for (let y = 0; y < n; y++) {
    const sy = (y + h) % n;
    for (let x = 0; x < n; x++) {
      out[y * n + x] = src[sy * n + ((x + h) % n)];
    }
  }
  return out;
}

/** Forward transform of a real image into centred k-space. */
export function toKSpace(img, n) {
  const re = Float64Array.from(img);
  const im = new Float64Array(n * n);
  fft2d(re, im, n, false);
  return { re: fftshift(re, n), im: fftshift(im, n) };
}

/**
 * Inverse transform of centred k-space back to image magnitude.
 * `mask[row]` (0..1) scales an entire phase-encode line, which is exactly how
 * Cartesian undersampling works — you skip whole lines, not single points.
 */
export function reconstruct(kRe, kIm, n, mask) {
  const re = new Float64Array(n * n);
  const im = new Float64Array(n * n);
  const h = n >> 1;

  // undo the display shift while applying the sampling mask
  for (let y = 0; y < n; y++) {
    const m = mask ? mask[y] : 1;
    const sy = (y + h) % n;
    for (let x = 0; x < n; x++) {
      const sx = (x + h) % n;
      re[sy * n + sx] = kRe[y * n + x] * m;
      im[sy * n + sx] = kIm[y * n + x] * m;
    }
  }

  fft2d(re, im, n, true);

  const mag = new Float64Array(n * n);
  for (let i = 0; i < mag.length; i++) {
    mag[i] = Math.hypot(re[i], im[i]);
  }
  return mag;
}
