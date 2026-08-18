import React from 'react';

export default function Study() {
  return (
    <section className="py-16 w-full flex justify-center bg-primary text-white" id="education">
      <div className="max-w-4xl w-full px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-[#915eff]/20 border border-[#915eff]/30 rounded-2xl flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-[#915eff]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-wider text-[#915eff]">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="bg-tertiary border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-[#915eff]/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Degree & University Info */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Bachelor of Software Engineering
              </h3>
              <div className="flex items-center gap-2 mt-2 text-secondary">
                <svg className="w-5 h-5 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-medium text-sm md:text-base">Al-Balqa Applied University (BAU) - As-Salt</span>
              </div>
            </div>

            {/* GPA Badge */}
            <div className="flex items-center gap-2 bg-[#915eff]/10 px-5 py-2.5 rounded-full border border-[#915eff]/30">
              <svg className="w-5 h-5 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138" />
              </svg>
              <span className="font-bold text-[#915eff]">
                GPA: 3.5 / 4.0
              </span>
            </div>

          </div>

          <p className="mt-6 text-secondary leading-relaxed text-sm md:text-base">
            Graduated with an excellent academic record, building a solid foundation in software development, algorithms, system design, and modern programming technologies.
          </p>
        </div>

      </div>
    </section>
  );
}