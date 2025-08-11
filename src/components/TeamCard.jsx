// Sample team data - replace with actual team member information
import yuvraj from '../assets/yuvraj_team.jpg'
const teamData = [
  {
    name: 'John Doe',
    role: 'President',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    instagram: 'https://instagram.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
  {
    name: 'Yuvraj Saran',
    role: 'Vice President',
    img: yuvraj,
    instagram: 'https://instagram.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
    github: 'https://github.com/janesmith'
  },
  {
    name: 'Mike Johnson',
    role: 'Technical Lead',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    instagram: 'https://instagram.com/mikejohnson',
    linkedin: 'https://linkedin.com/in/mikejohnson',
    github: 'https://github.com/mikejohnson'
  },
  {
    name: 'Sarah Wilson',
    role: 'Events Coordinator',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    instagram: 'https://instagram.com/sarahwilson',
    linkedin: 'https://linkedin.com/in/sarahwilson',
    github: 'https://github.com/sarahwilson'
  },
  {
    name: 'David Brown',
    role: 'Marketing Head',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    instagram: 'https://instagram.com/davidbrown',
    linkedin: 'https://linkedin.com/in/davidbrown',
    github: 'https://github.com/davidbrown'
  },
  {
    name: 'Emily Davis',
    role: 'Finance Manager',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    instagram: 'https://instagram.com/emilydavis',
    linkedin: 'https://linkedin.com/in/emilydavis',
    github: 'https://github.com/emilydavis'
  },
  {
    name: 'Alex Chen',
    role: 'Content Creator',
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
    instagram: 'https://instagram.com/alexchen',
    linkedin: 'https://linkedin.com/in/alexchen',
    github: 'https://github.com/alexchen'
  },
  {
    name: 'Lisa Garcia',
    role: 'Community Manager',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    instagram: 'https://instagram.com/lisagarcia',
    linkedin: 'https://linkedin.com/in/lisagarcia',
    github: 'https://github.com/lisagarcia'
  }
];

// Social Media Icons Components
const InstagramIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const SAATeam = () => {
  return (
    <section className="mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 lg:mt-12 lg:mb-12   rounded-2xl sm:rounded-3xl      dark:ring-white/10">
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-screen-xl text-center relative overflow-hidden">
        {/* Decorative background elements */}

       
        
        {/* Header Section */}
        <div className="relative z-10 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className=" mt-3 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-blue-600 dark:text-[#A7ADBE] bg-blue-50 dark:bg-white/10 rounded-full border border-blue-200 dark:border-white/10">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
            Meet the Team
          </div>
          
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-gray-100 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent px-2">
            SAA Team
          </h1>
   
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-600 dark:text-[#A7ADBE] sm:px-8 md:px-16 lg:px-32 xl:px-48 leading-relaxed max-w-6xl mx-auto">
            Meet the dedicated individuals who make our Student Alumni Association thrive.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 animate-pulse"></div>
                  
                  <img
                    className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 shadow-xl group-hover:ring-blue-200 dark:group-hover:ring-blue-600 transition-all duration-300"
                    src={member.img}
                    alt={member.name}
                  />
                  
                  {/* Online indicator */}

                </div>

                {/* Name and Role */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center space-x-4 sm:space-x-6">
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
                    <GitHubIcon />
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-full blur opacity-0 group-hover/icon:opacity-30 transition-opacity duration-200"></div>
                  </a>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Custom CSS */}
        <style jsx>{`
          /* Card hover animation */
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-5px) scale(1.02); }
          }
          
          .group:hover {
            animation: float 2s ease-in-out infinite;
          }
          
          /* Responsive grid adjustments */
          @media (max-width: 639px) {
            .grid {
              gap: 1.5rem;
            }
          }
          
          @media (min-width: 640px) and (max-width: 1023px) {
            .grid {
              gap: 2rem;
            }
          }
          
          @media (min-width: 1024px) {
            .grid {
              gap: 2.5rem;
            }
          }
          
          
          
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
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