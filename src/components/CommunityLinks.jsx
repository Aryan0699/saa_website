import { useState } from 'react';

export default function CommunityLinks() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const communityLinks = [
    {
      id: 1,
      title: "LinkedIn Group",
      description: "Connect with IIT Jodhpur alumni on LinkedIn. Share opportunities, insights, and network with fellow graduates.",
      url: "https://www.linkedin.com/school/iit-jodhpur",
      icon: "💼",
      category: "Professional",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "WhatsApp Community",
      description: "Join our active WhatsApp community for real-time discussions, event updates, and alumni meetups.",
      url: "#",
      icon: "💬",
      category: "Chat",
      color: "from-green-500 to-green-700"
    },
    {
      id: 3,
      title: "Facebook Alumni Group",
      description: "Stay connected with your batchmates and seniors. Share memories, photos, and updates from your life.",
      url: "https://www.facebook.com/iitjodhpur",
      icon: "👥",
      category: "Social",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      id: 4,
      title: "Discord Server",
      description: "Join our Discord server for tech discussions, gaming sessions, and casual conversations with alumni.",
      url: "#",
      icon: "🎮",
      category: "Community",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 5,
      title: "Telegram Channel",
      description: "Get instant updates about alumni events, job opportunities, and important announcements.",
      url: "#",
      icon: "📢",
      category: "Updates",
      color: "from-cyan-500 to-cyan-700"
    },
    {
      id: 6,
      title: "YouTube Channel",
      description: "Watch alumni talks, campus tours, event highlights, and inspirational success stories.",
      url: "https://www.youtube.com/@IITJodhpur",
      icon: "🎥",
      category: "Media",
      color: "from-red-500 to-red-700"
    },
    {
      id: 7,
      title: "Twitter/X Community",
      description: "Follow us on X for quick updates, announcements, and engage in discussions with the alumni community.",
      url: "https://twitter.com/iitjodhpur",
      icon: "🐦",
      category: "Social",
      color: "from-sky-500 to-sky-700"
    },
    {
      id: 8,
      title: "Instagram",
      description: "Follow our Instagram for visual stories, event photos, campus life glimpses, and alumni achievements.",
      url: "https://www.instagram.com/iitjodhpur",
      icon: "📸",
      category: "Social",
      color: "from-pink-500 to-pink-700"
    },
    {
      id: 9,
      title: "Alumni Newsletter",
      description: "Subscribe to our monthly newsletter for curated content, alumni spotlights, and exclusive updates.",
      url: "#",
      icon: "📰",
      category: "Updates",
      color: "from-amber-500 to-amber-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Community Links
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay connected with the IIT Jodhpur alumni community across multiple platforms. 
            Join discussions, share opportunities, and build lasting connections.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard(link.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{link.icon}</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {link.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                  {link.description}
                </p>

                {/* Arrow Icon */}
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                  <span className="mr-2">Join Now</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredCard === link.id ? 'translate-x-2' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Reach out to us and we'll help you connect with the right community.
          </p>
          <a
            href="mailto:alumni@iitj.ac.in"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
