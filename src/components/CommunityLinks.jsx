import GlassIcons from './GlassIcons';
import {
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaDiscord,
  FaTelegram,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaNewspaper
} from 'react-icons/fa';

export default function CommunityLinks() {

  const items = [
    {
      icon: <FaLinkedin />,
      color: 'blue',
      label: 'LinkedIn Group',
      url: 'https://www.linkedin.com/school/iit-jodhpur'
    },
    {
      icon: <FaWhatsapp />,
      color: 'green',
      label: 'WhatsApp Community',
      url: '#'
    },
    {
      icon: <FaFacebook />,
      color: 'blue',
      label: 'Facebook Alumni Group',
      url: 'https://www.facebook.com/iitjodhpur'
    },
    {
      icon: <FaDiscord />,
      color: 'indigo',
      label: 'Discord Server',
      url: '#'
    },
    {
      icon: <FaTelegram />,
      color: 'blue',
      label: 'Telegram Channel',
      url: '#'
    },
    {
      icon: <FaYoutube />,
      color: 'red',
      label: 'YouTube Channel',
      url: 'https://www.youtube.com/@IITJodhpur'
    },
    {
      icon: <FaTwitter />,
      color: 'blue',
      label: 'Twitter/X Community',
      url: 'https://twitter.com/iitjodhpur'
    },
    {
      icon: <FaInstagram />,
      color: 'gray',
      label: 'Instagram',
      url: 'https://www.instagram.com/iitjodhpur'
    },
    {
      icon: <FaNewspaper />,
      color: 'gray',
      label: 'Alumni Newsletter',
      url: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent mt-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-gray-100 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent px-2">
            Community Links
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay connected with the IIT Jodhpur alumni community across multiple platforms. 
            Join discussions, share opportunities, and build lasting connections.
          </p>
        </div>

        {/* Links Grid */}
        <div style={{ height: '600px', position: 'relative' }}>
          <GlassIcons items={items} className="custom-class"/>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r  rounded-3xl p-8 shadow-2xl animate-fade-in">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Reach out to us and we'll help you connect with the right community.
          </p>
          <a
            href="mailto:saa@iitj.ac.in"
            className="inline-block bg-white text-red-600 dark:text-[#60a5fa] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover-underline-animation"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}