import { useState } from 'react';
import { teamDataByYear } from '../utils/TeamData';

// Social Media Icons Components
const InstagramIcon = () => (
  <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 " fill="#25D366" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.470 3.516z"/>
  </svg>
);

// Team Member Card Component
const TeamMemberCard = ({ member }) => (
  <div className="group relative bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] min-w-[280px] max-w-[320px]">
    {/* Decorative background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative z-10 flex flex-col items-center text-center h-full">
      {/* Profile Image */}
      <div className="relative mb-4 sm:mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 animate-pulse"></div>
        
        <img
          className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 shadow-xl group-hover:ring-blue-200 dark:group-hover:ring-blue-600 transition-all duration-300"
          src={member.img}
          alt={member.name}
        />
      </div>

      {/* Name and Role */}
      <div className="mb-4 sm:mb-6 flex-grow flex flex-col justify-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {member.name}
        </h3>
        {/* <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
          {member.position}
        </p> */}
        {member.verticle && (
          <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
            {member.verticle}
          </p>
        )}
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center justify-center space-x-4 sm:space-x-6 mt-auto">
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group/icon relative p-2 sm:p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <InstagramIcon />
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
        </a>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group/icon relative p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <LinkedInIcon />
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
        </a>

        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/icon relative p-2 sm:p-3 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white rounded-full hover:from-gray-800 hover:to-black dark:hover:from-gray-700 dark:hover:to-gray-900 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <WhatsAppIcon />
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
        </a>
      </div>
    </div>

    {/* Hover effect border */}
    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300"></div>
  </div>
);

// Role Section Component
const RoleSection = ({ title, members, isCenter = false }) => {
  if (members.length === 0) return null;

  return (
    <div className="mb-16 sm:mb-20">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8 sm:mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-32 sm:max-w-48"></div>
        <h3 className="px-4 sm:px-6 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 whitespace-nowrap">
          {title}
        </h3>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-32 sm:max-w-48"></div>
      </div>

      {/* Members Grid */}
      <div className={`flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 lg:gap-8 ${isCenter && members.length === 1 ? 'justify-center' : ''}`}>
        {members.map((member, idx) => (
          <TeamMemberCard key={idx} member={member} />
        ))}
      </div>
    </div>
  );
};

const SAATeam = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  const years = Object.keys(teamDataByYear).sort((a, b) => b - a);
  const currentTeamData = teamDataByYear[selectedYear] || [];

  // Group team members by position
  const groupedMembers = currentTeamData.reduce((acc, member) => {
    const position = member.position.toLowerCase();
    
    // Define position categories
    if (position.includes('vice president') || position.includes('vp')) {
      if (!acc.vicePresident) acc.vicePresident = [];
      acc.vicePresident.push(member);
    } else if (position.includes('overall coordinator')) {
      if (!acc.overallCoordinators) acc.overallCoordinators = [];
      acc.overallCoordinators.push(member);
    } else if (position.includes('coordinator') && !position.includes('overall')) {
      if (!acc.coordinators) acc.coordinators = [];
      acc.coordinators.push(member);
    } else if (position.includes('core member')) {
      if (!acc.coreMembers) acc.coreMembers = [];
      acc.coreMembers.push(member);
    } else {
      // Default category for any other positions
      if (!acc.others) acc.others = [];
      acc.others.push(member);
    }
    
    return acc;
  }, {});

  return (
    <section className="mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 lg:mt-12 lg:mb-12 rounded-2xl sm:rounded-3xl dark:ring-white/10">
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-screen-xl text-center relative overflow-hidden">
        
        {/* Header Section */}
        <div className="relative z-10 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="mt-16 md:mt-12 lg:mt-10 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-blue-600 dark:text-[#A7ADBE] bg-blue-50 dark:bg-white/10 rounded-full border border-blue-200 dark:border-white/10">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
            Meet the Team
          </div>
          
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-gray-100 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent px-2">
            SAA Team
          </h1>
   
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl font-normal text-gray-600 dark:text-[#A7ADBE] sm:px-8 md:px-16 lg:px-32 xl:px-48 leading-relaxed max-w-6xl mx-auto">
            Fostering Connections and Facilitating Tech Receiving Alumni Cooperation through Collaboration and Active Engagement.
          </p>

          {/* Year Carousel */}
          <div className="flex justify-center mb-8">
            <div className="relative max-w-[300px] sm:max-w-[400px] md:max-w-lg">
              {/* Left Navigation Button */}
              {years.length > 4 && (
                <button
                  onClick={() => {
                    const container = document.getElementById('year-carousel');
                    container.scrollBy({ left: -120, behavior: 'smooth' });
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {/* Scrollable Container */}
              <div 
                id="year-carousel"
                className="flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg overflow-x-auto scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                      selectedYear === year
                        ? 'bg-white dark:bg-[#18181b] text-blue-600 dark:text-blue-400 shadow-md border border-blue-200 dark:border-blue-800'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    Team '{year.slice(-2)}
                  </button>
                ))}
              </div>
              
              {/* Right Navigation Button */}
              {years.length > 4 && (
                <button
                  onClick={() => {
                    const container = document.getElementById('year-carousel');
                    container.scrollBy({ left: 120, behavior: 'smooth' });
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Team Sections by Role */}
        <div className="relative z-10">
          <RoleSection 
            title="VICE PRESIDENT" 
            members={groupedMembers.vicePresident || []} 
            isCenter={true}
          />
          
          <RoleSection 
            title="OVERALL COORDINATORS" 
            members={groupedMembers.overallCoordinators || []}
          />
          
          <RoleSection 
            title="COORDINATORS" 
            members={groupedMembers.coordinators || []}
          />
          
          <RoleSection 
            title="CORE MEMBERS" 
            members={groupedMembers.coreMembers || []}
          />
          
          {/* Any other roles */}
          {groupedMembers.others && groupedMembers.others.length > 0 && (
            <RoleSection 
              title="TEAM MEMBERS" 
              members={groupedMembers.others}
            />
          )}
        </div>

        {/* No team data message */}
        {currentTeamData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No team data available for {selectedYear}
            </p>
          </div>
        )}

        {/* Enhanced Custom CSS */}
        <style jsx>{`
          /* Scrollbar hiding */
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          /* Smooth carousel scrolling */
          #year-carousel {
            scroll-behavior: smooth;
          }
          
          /* Navigation button animations */
          .absolute button {
            backdrop-filter: blur(10px);
          }
          
          .absolute button:hover {
            transform: translateY(-50%) scale(1.1);
          }
          
          /* Card hover animation */
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-5px) scale(1.02); }
          }
          
          .group:hover {
            animation: float 2s ease-in-out infinite;
          }
          
          /* Profile image enhancements */
          .group:hover img {
            transform: scale(1.05);
          }
          
          /* Social icon pulse effect */
          .group/icon:hover {
            animation: pulse 1s infinite;
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1.1); }
            50% { transform: scale(1.15); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SAATeam;