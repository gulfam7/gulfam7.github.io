import React, { useState, useEffect } from 'react';
// Import Lucide Icons for the modern look
import { 
  Github, Linkedin, Mail, MapPin, GraduationCap, 
  User, Globe, ChevronRight 
} from 'lucide-react';

// --- IMAGE HANDLING ---
// ERROR FIX: I have commented out your local import so this preview works.
// When you copy this to your computer, UNCOMMENT the line below and DELETE the placeholder line.
// import profilePic from './IMG_7270.jpg'; 
const profilePic = "https://placehold.co/400"; // Placeholder for preview

// Exports for Layout.jsx compatibility
export const drawerWidth = 260;
export const collapsedWidth = 84;

// User Data Configuration
const user = {
  name: 'Gulfam Ahmed Saju',
  title: 'PhD Candidate · GRA',
  org: 'UMass Dartmouth',
  email: 'gsaju@umassd.edu',
  loc: 'Dartmouth, MA',
  img: profilePic,
  links: [
    { text: 'LinkedIn', url: 'https://www.linkedin.com/in/gulfam-ahmed-saju-5a953665/', icon: <Linkedin size={18} /> },
    { text: 'Scholar',  url: 'https://scholar.google.com/citations?user=qewXRr4AAAAJ', icon: <GraduationCap size={18} /> },
    { text: 'ResearchGate', url: 'https://www.researchgate.net/profile/Gulfam-Saju', icon: <Globe size={18} /> },
    { text: 'GitHub',   url: 'https://github.com/gulfam7',      icon: <Github size={18} /> },
    { text: 'ORCID',    url: 'https://orcid.org/0009-0007-7391-0485',       icon: <User size={18} /> },
  ],
};

export default function Sidebar() {
  // Simple responsive check without needing MUI
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsCollapsed(window.innerWidth < 900);
    // Set initial state
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside
      className="h-screen fixed left-0 top-0 z-40 bg-slate-900 border-r border-white/5 flex flex-col transition-all duration-300 ease-in-out"
      style={{ width: isCollapsed ? collapsedWidth : drawerWidth }}
    >
      {/* 1. Profile Header */}
      <div className={`p-6 flex flex-col items-center ${isCollapsed ? 'justify-center px-2' : ''}`}>
        <div className="relative mb-4 group">
          <div className={`rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 ${isCollapsed ? 'w-12 h-12' : 'w-24 h-24'}`}>
            <img 
              src={user.img} 
              alt={user.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {!isCollapsed && (
          <div className="text-center animate-fade-in">
            <h2 className="text-white font-display font-bold text-lg tracking-tight">{user.name}</h2>
            <p className="text-cyan-400 text-xs font-medium mt-1">{user.title}</p>
            <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">{user.org}</p>
          </div>
        )}
      </div>

      {/* 2. Account Section */}
      <div className="flex-1 overflow-y-auto scrollbar-hide py-2">
        {!isCollapsed && (
          <div className="px-6 mb-2">
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Account</div>
          </div>
        )}
        
        <div className="px-3 space-y-1">
          {/* Email Item */}
          <a 
            href={`mailto:${user.email}`}
            className="flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-cyan-400 transition-all group"
            title={user.email}
          >
            <div className="text-slate-500 group-hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </div>
            {!isCollapsed && <span className="text-sm font-medium truncate">{user.email}</span>}
          </a>

          {/* Location Item */}
          <div 
            className="flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-cyan-400 transition-all group cursor-default"
            title={user.loc}
          >
            <div className="text-slate-500 group-hover:text-cyan-400 transition-colors">
              <MapPin size={20} />
            </div>
            {!isCollapsed && <span className="text-sm font-medium truncate">{user.loc}</span>}
          </div>
        </div>

        {/* 3. Profiles Section */}
        {!isCollapsed && (
          <div className="px-6 mt-6 mb-2">
             <div className="h-px w-full bg-white/5 mb-4"></div>
             <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Profiles</div>
          </div>
        )}
        
        <div className="px-3 space-y-1 mt-2">
          {user.links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-cyan-400 transition-all group"
              title={link.text}
            >
              <div className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                {link.icon}
              </div>
              {!isCollapsed && (
                <>
                  <span className="text-sm font-medium">{link.text}</span>
                  <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" />
                </>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* 4. Footer */}
      {!isCollapsed && (
        <div className="p-6 border-t border-white/5">
          <p className="text-[10px] text-slate-600 text-center">
            © {new Date().getFullYear()} G. A. Saju
          </p>
        </div>
      )}
    </aside>
  );
}
