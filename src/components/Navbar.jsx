import React, { useState } from 'react';
import { FileDown, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <a href="#intro" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-brand-500 text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform">
              SN
            </span>
            <span className="font-semibold text-slate-800 tracking-tight text-base sm:text-lg">
              송새나 <span className="text-brand-600 font-medium text-sm">Portfolio</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            <a href="#intro" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Intro</a>
            <a href="#profile" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Profile</a>
            <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Project</a>
            <a href="#hobby" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Hobby</a>
            <a href="#sitemap" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Sitemap</a>
            
            <a
              href={portfolioData.personalInfo.resumePdfPath}
              download="송새나_이력서.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-brand-600 transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>이력서 다운로드</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#intro"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
          >
            Intro
          </a>
          <a
            href="#profile"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
          >
            Profile
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
          >
            Project
          </a>
          <a
            href="#hobby"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
          >
            Hobby
          </a>
          <a
            href="#sitemap"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
          >
            Sitemap
          </a>
          <a
            href={portfolioData.personalInfo.resumePdfPath}
            download="송새나_이력서.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700"
          >
            <FileDown className="w-4 h-4" />
            이력서 PDF 다운로드
          </a>
        </div>
      )}
    </nav>
  );
}
