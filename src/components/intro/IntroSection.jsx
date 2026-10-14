import React, { useState } from 'react';
import { Sparkles, ArrowDown, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function IntroSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { personalInfo } = portfolioData;

  return (
    <section id="intro" className="relative min-h-[92vh] pt-20 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-slate-50">
      {/* Subtle decorative background blur shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-sky-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center my-auto py-8">
        {/* Recruiter-friendly Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200/80 shadow-sm text-brand-700 text-xs sm:text-sm font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-pulse" />
          <span>신입 사무행정 · 경영지원 포트폴리오</span>
        </div>

        {/* Center Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
          <span className="bg-gradient-to-r from-slate-900 via-brand-700 to-brand-600 bg-clip-text text-transparent">
            {personalInfo.headline}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal mb-8">
          {personalInfo.subHeadline}
        </p>

        {/* 3D Spline Interactive Canvas Container */}
        <div className="relative w-full max-w-3xl h-[380px] sm:h-[460px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-white/80 bg-slate-900/5 backdrop-blur-sm group">
          {/* Skeleton loader while iframe loads */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 animate-shimmer z-10 text-slate-400">
              <div className="w-12 h-12 rounded-full border-4 border-brand-300 border-t-brand-600 animate-spin mb-3"></div>
              <p className="text-sm font-medium text-slate-500">3D 인터랙티브 로봇을 불러오는 중입니다...</p>
            </div>
          )}

          {/* Spline iframe */}
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-O6HYTNc45XsxAe6oNwD2GBwO/"
            frameBorder="0"
            width="100%"
            height="100%"
            title="3D Greeting Robot"
            onLoad={() => setIframeLoaded(true)}
            className="w-full h-full relative z-0 transition-opacity duration-700"
            style={{ opacity: iframeLoaded ? 1 : 0 }}
          />

          {/* Interaction guide badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs pointer-events-none shadow-md flex items-center gap-1.5 opacity-90 transition-opacity group-hover:opacity-100">
            <span>🖱️ 마우스나 손가락으로 로봇을 드래그해보세요</span>
          </div>
        </div>

        {/* Quick Spec Highlights Bar */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm text-xs sm:text-sm text-slate-700 font-medium">
            <Award className="w-4 h-4 text-brand-600" />
            <span>컴활2급 · Excel 365</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm text-xs sm:text-sm text-slate-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>FAT 2급 회계정보처리</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm text-xs sm:text-sm text-slate-700 font-medium">
            <Briefcase className="w-4 h-4 text-purple-600" />
            <span>사무직 실무 준비 완료</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10">
          <a
            href="#profile"
            className="inline-flex flex-col items-center gap-1 text-xs text-slate-400 hover:text-brand-600 transition-colors"
          >
            <span>프로필 보러가기</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
