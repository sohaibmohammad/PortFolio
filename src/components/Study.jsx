import React from 'react';

export default function Study() {
  return (
    <section className="py-12 w-full flex justify-center" id="education">
      <div className="max-w-4xl w-full px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
            <svg 
              className="w-6 h-6 text-blue-600 dark:text-blue-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Degree & University Info */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Bachelor of Software Engineering
              </h3>
              <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-medium">Al-Balqa Applied University (BAU) - As-Salt</span>
              </div>
            </div>

            {/* GPA Badge */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 px-5 py-2.5 rounded-full border border-blue-100 dark:border-blue-800/50">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="font-bold text-blue-700 dark:text-blue-300">
                GPA: 3.5 / 4.0
              </span>
            </div>

          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            Graduated with an excellent academic record, building a solid foundation in software development, algorithms, system design, and modern programming technologies.
          </p>
        </div>
      </div>
    </section>
  );
}