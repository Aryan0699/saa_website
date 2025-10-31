import { useState } from 'react';
import { teamDataByYear } from '../utils/TeamData';

// ========================
// Social Media Icons - UPDATED FOR RESPONSIVENESS
// ========================

const InstagramIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Placeholder Email Icon – Replace with your final SVG later
const EmailIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

// ========================
// Team Member Card - UPDATED ICON CONTAINER SIZING
// ========================

const TeamMemberCard = ({ member }) => (
  <div className="group relative bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-full max-w-xs mx-auto">
    {/* Decorative background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative z-10 flex flex-col items-center text-center h-full">
      {/* Profile Image */}
      <div className="relative mb-4 sm:mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 animate-pulse"></div>
        
        <img
          className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full object-cover ring-4 ring-red-200 dark:ring-red-800 shadow-xl group-hover:ring-red-400 dark:group-hover:ring-red-600 transition-all duration-300"
          src={member.img}
          alt={member.name}
        />
      </div>

      {/* Name and Role */}
      <div className="mb-4 sm:mb-6 flex-grow flex flex-col justify-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-red-600 dark:group-hover:text-[#60a5fa] transition-colors duration-300 hover-underline-animation">
          {member.name}
        </h3>
        {member.verticle && (
          <p className="text-xs sm:text-sm text-red-600 dark:text-red-400 font-medium mt-1">
            {member.verticle}
          </p>
        )}
      </div>

      {/* Social Media Icons - UPDATED FOR BETTER RESPONSIVENESS */}
      <div className="flex items-center justify-center space-x-3 sm:space-x-4 mt-auto">
        {/* Instagram */}
        {member.instagram && member.instagram !== '#' && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group/icon relative p-2 sm:p-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
            aria-label={`Follow ${member.name} on Instagram`}
          >
            <InstagramIcon />
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
          </a>
        )}

        {/* LinkedIn */}
        {member.linkedin && member.linkedin !== '#' && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group/icon relative p-2 sm:p-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
            aria-label={`Connect with ${member.name} on LinkedIn`}
          >
            <LinkedInIcon />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
          </a>
        )}

        {/* Email - Only for 2024 & 2025 */}
        {member.mailto && (
          <a
            href={member.mailto}
            className="group/icon relative p-2 sm:p-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
            aria-label={`Email ${member.name}`}
          >
            <EmailIcon />
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
          </a>
        )}
      </div>
    </div>

    {/* Hover effect border */}
    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300"></div>
  </div>
);

// ========================
// Role Section
// ========================

const RoleSection = ({ title, members, isCenter = false }) => {
  if (members.length === 0) return null;

  // Determine if we should center this section (few members or explicitly requested)
  const shouldCenter = isCenter || members.length <= 2;

  return (
    <div className="mb-12 sm:mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8 sm:mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-32 sm:max-w-48"></div>
        <h3 className="px-4 sm:px-6 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 whitespace-nowrap">
          {title}
        </h3>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-32 sm:max-w-48"></div>
      </div>

      {/* Members Grid - Responsive (uses flex to center few items) */}
      {shouldCenter ? (
        <div className="flex justify-center flex-wrap gap-6 sm:gap-8 w-full max-w-7xl mx-auto px-2">
          {members.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl mx-auto px-2 overflow-x-hidden justify-items-center">
          {members.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

// ========================
// Main SAATeam Component
// ========================

const SAATeam = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  
  const years = Object.keys(teamDataByYear).sort((a, b) => b - a);
  const currentTeamData = teamDataByYear[selectedYear] || [];

  // Group team members by position
  const groupedMembers = currentTeamData.reduce((acc, member) => {
    const position = member.position.toLowerCase();
    
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
      if (!acc.others) acc.others = [];
      acc.others.push(member);
    }
    
    return acc;
  }, {});

  return (
    <section className="mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 lg:mt-12 lg:mb-12 rounded-2xl sm:rounded-3xl dark:ring-white/10 overflow-x-hidden">
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-2 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-screen-xl text-center relative">
        
        {/* Header Section */}
        <div className="relative z-10 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="mt-16 md:mt-12 lg:mt-10 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-red-600 dark:text-white/80 bg-white dark:bg-white/10 rounded-full border border-red-200 dark:border-white/10">
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
              {/* Left Navigation */}
              {years.length > 4 && (
                <button
                  onClick={() => {
                    const container = document.getElementById('year-carousel');
                    container.scrollBy({ left: -120, behavior: 'smooth' });
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {/* Scrollable Years */}
              <div 
                id="year-carousel"
                className="flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 bg-gray-100/80 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg overflow-x-auto scrollbar-hide"
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
                        ? 'bg-white dark:bg-black text-red-600 dark:text-red-400 shadow-md border border-red-200 dark:border-red-800'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-black/50'
                    }`}
                  >
                    Team '{year.slice(-2)}
                  </button>
                ))}
              </div>
              
              {/* Right Navigation */}
              {years.length > 4 && (
                <button
                  onClick={() => {
                    const container = document.getElementById('year-carousel');
                    container.scrollBy({ left: 120, behavior: 'smooth' });
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Team Sections */}
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
          
          {groupedMembers.others && groupedMembers.others.length > 0 && (
            <RoleSection 
              title="TEAM MEMBERS" 
              members={groupedMembers.others}
            />
          )}
        </div>

        {/* No data fallback */}
        {currentTeamData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No team data available for {selectedYear}
            </p>
          </div>
        )}

        {/* Custom CSS */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          #year-carousel {
            scroll-behavior: smooth;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-5px) scale(1.02); }
          }
          .group:hover {
            animation: float 2s ease-in-out infinite;
          }
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