import { teamDataByYear } from '../utils/TeamData';

// ========================
// Simple Team Member Card - Basic Circular Photos
// ========================

const TeamMemberCard = ({ member }) => (
  <div className="flex flex-col items-center text-center p-4">
    {/* Profile Image - Circular */}
    <div className="mb-4">
      <img
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
        src={member.img}
        alt={member.name}
      />
    </div>

    {/* Name and Position */}
    <div className="text-center">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
        {member.position}
      </p>
      {member.verticle && (
        <p className="text-xs text-red-600 dark:text-red-400">
          {member.verticle}
        </p>
      )}
    </div>
  </div>
);

// ========================
// Simple Role Section - Basic Grid Layout
// ========================

const RoleSection = ({ title, members }) => {
  if (members.length === 0) return null;

  return (
    <div className="mb-12">
      {/* Section Header */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
        {title}
      </h3>

      {/* Simple Grid Layout - Centered */}
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

// ========================
// Main SAATeam Component
// ========================

const SAATeam = () => {
  const years = Object.keys(teamDataByYear).sort((a, b) => b - a);

  // Function to group team members by position for a given year
  const groupMembersByPosition = (teamData) => {
    return teamData.reduce((acc, member) => {
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
  };

  return (
    <section className="mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 lg:mt-12 lg:mb-12 rounded-2xl sm:rounded-3xl dark:ring-white/10 overflow-hidden">
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-2 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-screen-xl text-center relative overflow-hidden">
        
        {/* Header Section */}
        <div className="relative z-10 mb-12 sm:mb-16 md:mb-20">
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-gray-100 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent px-2 hover-underline-animation">
            SAA Team
          </h1>
   
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl font-normal text-gray-600 dark:text-[#A7ADBE] sm:px-8 md:px-16 lg:px-32 xl:px-48 leading-relaxed max-w-6xl mx-auto">
            Fostering Connections and Facilitating Tech Receiving Alumni Cooperation through Collaboration and Active Engagement.
          </p>
        </div>

        {/* All Teams - Continuous Scrollable Layout */}
        <div className="relative z-10">
          {years.map((year, yearIndex) => {
            const teamData = teamDataByYear[year] || [];
            if (teamData.length === 0) return null;

            const groupedMembers = groupMembersByPosition(teamData);

            return (
              <div key={year} className={`mb-20 sm:mb-24 md:mb-32 ${yearIndex > 0 ? 'pt-12 sm:pt-16 md:pt-20 border-t-2 border-gray-200 dark:border-gray-800' : ''}`}>
                {/* Year Header */}
                <div className="mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 hover-underline-animation">
                    Team {year}
                  </h2>
                  <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                </div>

                {/* Team Sections for this year */}
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
            );
          })}
        </div>

        {/* Custom CSS */}
        <style jsx>{`
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