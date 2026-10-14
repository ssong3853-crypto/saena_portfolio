import React from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/intro/IntroSection';
import ProfileSection from './components/profile/ProfileSection';
import ProjectSection from './components/project/ProjectSection';
import HobbySection from './components/hobby/HobbySection';
import FooterSitemap from './components/sitemap/FooterSitemap';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col text-slate-800 font-sans selection:bg-brand-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Sections (Intro -> Profile -> Project -> Hobby) */}
      <main className="flex-1">
        {/* Intro: Spline 3D iframe + Center Title */}
        <IntroSection />

        {/* Profile: About Me, Certificates, Skills */}
        <ProfileSection />

        {/* Project: Horizontal Banners, Dynamic rendering, Modal Popup, Skeleton UI */}
        <ProjectSection />

        {/* Hobby: Work-life balance & Personality */}
        <HobbySection />
      </main>

      {/* 3. Sitemap & Resume Download Section (Bottom) */}
      <FooterSitemap />
    </div>
  );
}
