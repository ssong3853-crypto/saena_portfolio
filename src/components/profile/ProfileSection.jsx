import React from 'react';
import { User, Calendar, Award, FileSpreadsheet, Presentation, FileText, CheckCircle, ChevronRight, Briefcase } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function ProfileSection() {
  const { personalInfo, certificates, skills } = portfolioData;

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 'Presentation':
        return <Presentation className="w-5 h-5 text-amber-600" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-blue-600" />;
      default:
        return <FileText className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="profile" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-600 text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-brand-50 rounded-full border border-brand-200/60">
            About Candidate
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            프로필 & 직무 역량
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            정확한 데이터 처리와 깔끔한 문서화로 조직의 신뢰를 쌓아갈 인재입니다.
          </p>
        </div>

        {/* 1. 기본 인적사항 & 내 소개 (About Me Card) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 mb-10 transition-all hover:shadow-md">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Left: Basic Info Avatar & Meta */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center p-6 bg-slate-50/80 rounded-2xl border border-slate-100">
              <div className="relative mb-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-brand-600 to-sky-400 p-1 shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <User className="w-14 h-14 text-slate-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-1 bg-emerald-500 w-5 h-5 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                {personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/50 mb-4">
                {personalInfo.jobTitle}
              </p>

              <div className="w-full space-y-2 text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-4 text-left">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>생년월일: <strong className="text-slate-800">{personalInfo.birthDate}</strong> (만 18~19세)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  <span>희망 직무: <strong className="text-slate-800">사무직 (사무행정)</strong></span>
                </div>
              </div>
            </div>

            {/* Right: Detailed About Me Paragraphs */}
            <div className="w-full md:w-2/3 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-5 bg-brand-600 rounded-full inline-block"></span>
                  지원자 소개 (About Me)
                </h4>
                <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {personalInfo.aboutMe.map((paragraph, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <p>{paragraph}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Strengths Tags */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">#성실한 근태</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">#꼼꼼한 문서 정리</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">#회계기초 이해</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">#원활한 소통</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">#신속한 피드백 수용</span>
              </div>
            </div>

          </div>
        </div>

        {/* 2 & 3: Grid - 자격증 (Certificates) & 직무 스킬 (Skills) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 2. 자격증 (Certificates) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                보유 자격증 (3종)
              </h3>
              <span className="text-xs text-slate-500 font-medium">국가기술 · 국제공인 · 국가공인</span>
            </div>

            <div className="space-y-4 flex-1">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-brand-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-base font-bold text-slate-900">{cert.name}</span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${cert.badgeColor}`}>
                      {cert.category}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mb-2">
                    발행처: <span className="font-medium text-slate-700">{cert.issuer}</span> · 취득: {cert.date}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 직무 기술 (Skills: Excel, PPT, Word) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-brand-600" />
                실무 활용 스킬 (OA)
              </h3>
              <span className="text-xs text-slate-500 font-medium">실무 즉시 투입 가능</span>
            </div>

            <div className="space-y-5 flex-1">
              {skills.map((skill, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-white shadow-xs border border-slate-200/70">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <span className="font-bold text-slate-900 text-sm sm:text-base">{skill.name}</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                      {skill.levelLabel} ({skill.level}%)
                    </span>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2.5">
                    <div
                      className="bg-brand-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-2.5 leading-snug">
                    {skill.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {skill.highlights.map((item, hIdx) => (
                      <span key={hIdx} className="text-[11px] px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
