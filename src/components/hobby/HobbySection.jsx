import React from 'react';
import { CalendarCheck, Keyboard, Activity, HeartHandshake, Smile } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function HobbySection() {
  const { hobbies } = portfolioData;

  const getHobbyIcon = (iconName) => {
    switch (iconName) {
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-brand-600" />;
      case 'Keyboard':
        return <Keyboard className="w-6 h-6 text-purple-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-600" />;
      default:
        return <Smile className="w-6 h-6 text-slate-600" />;
    }
  };

  return (
    <section id="hobby" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-600 text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-brand-50 rounded-full border border-brand-200/60">
            Work-Life & Personality
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            취미 & 일상의 습관
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            성실한 일상 루틴과 건강한 스트레스 해소법이 곧 안정적인 업무 수행의 원동력입니다.
          </p>
        </div>

        {/* 3 Hobby Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {getHobbyIcon(hobby.icon)}
                </div>

                <span className="inline-block text-[11px] font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100 mb-2">
                  {hobby.tag}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {hobby.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <HeartHandshake className="w-3.5 h-3.5 text-brand-500" />
                <span>업무 태도와 긍정적 시너지</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
