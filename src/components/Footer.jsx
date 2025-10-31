import { Link } from "react-router-dom";
import logo from "../assets/saa_logo_no_background.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white/80 dark:bg-black/10 backdrop-blur-md border-t border-gray-200/50 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* Header Section - Logo and Name Centered */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img
              src={logo}
              alt="SAA logo"
              className="dark:invert w-20 h-20 sm:w-28 sm:h-28"
            />
            <span className="ml-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Society of Alumni Affairs
            </span>
          </div>

        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 relative">
              <span className="text-red-500 dark:text-red-400 bg-clip-text">
                RESOURCES
              </span>
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-red-300 to-red-900"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm hover:underline underline-offset-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/faculty-advisor"
                  className="text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm hover:underline underline-offset-2"
                >
                  Faculty Advisor
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className="text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm hover:underline underline-offset-2"
                >
                  Student Team
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm hover:underline underline-offset-2"
                >
                  Initiatives
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 relative">
              <span className="text-red-500 dark:text-red-400 bg-clip-text">
                QUICK ACCESS
              </span>
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-red-300 to-red-900"></div>
            </h3>
            <ul className="space-y-3">
              
              <li>
                <Link
                  to="/visitIITJ"
                  className="text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm hover:underline underline-offset-2"
                >
                  Visit IITJ
                </Link>
              </li>
              <li>
                <a
                  href="https://www.iitj.ac.in/main/en/iitj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm hover:underline underline-offset-2"
                >
                  IIT Jodhpur
                </a>
              </li>
              <li>
                <Link
                  to="https://alumni.iitj.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm hover:underline underline-offset-2"
                >
                  Alumni Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 relative">
              <span className="text-red-500 dark:text-red-400 bg-clip-text ">
                CONNECT WITH US
              </span>
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-red-300 to-red-900"></div>
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600 dark:text-white/80">
                <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +91 74990 27852
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-white/80">
                <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                saa@iitj.ac.in
              </div>
              <div className="text-sm text-gray-600 dark:text-white/80">
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <div>Office of Alumni Relations</div>
                    <div>Indian Institute of Technology Jodhpur</div>
                    <div>NH 62 Nagaur Road</div>
                    <div>Karwar - 342030</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/saa.iitj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-white/80 hover:text-red-500 dark:hover:text-red-400 bg-gray-100/50 dark:bg-white/10 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.347-1.388s-1.388-2.051-1.388-3.348c0-1.297.49-2.449 1.388-3.347s2.05-1.388 3.347-1.388c1.297 0 2.449.49 3.348 1.388s1.388 2.05 1.388 3.347c0 1.297-.49 2.449-1.388 3.348s-2.051 1.388-3.348 1.388zm7.718 0c-1.297 0-2.449-.49-3.348-1.388s-1.388-2.051-1.388-3.348c0-1.297.49-2.449 1.388-3.347s2.051-1.388 3.348-1.388c1.297 0 2.448.49 3.347 1.388s1.388 2.05 1.388 3.347c0 1.297-.49 2.449-1.388 3.348s-2.05 1.388-3.347 1.388z"/>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-white/80 hover:text-red-500 dark:hover:text-red-400 bg-gray-100/50 dark:bg-white/10 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-white/80 hover:text-red-500 dark:hover:text-red-400 bg-gray-100/50 dark:bg-white/10 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/society-of-alumni-affairs-iit-jodhpur/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-white/80 hover:text-red-500 dark:hover:text-red-400 bg-gray-100/50 dark:bg-white/10 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 relative">
              <span className="text-red-500 dark:text-red-400 bg-clip-text">
                CONTACT US
              </span>
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-red-300 to-red-900"></div>
            </h3>
            
            <div className="space-y-4">
              <div className="group">
                <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">Our Location</h4>
                <div className="text-sm text-gray-600 dark:text-white/80 leading-relaxed">
                  <div>Office of Alumni Relations</div>
                  <div>Indian Institute of Technology Jodhpur</div>
                  <div>NH 62 Nagaur Road</div>
                  <div>Karwar - 342030</div>
                  

                </div>
                <a
                  href="https://www.google.com/maps/place/Indian+Institute+of+Technology+(IIT),+Jodhpur/@26.4710115,73.1086586,17z/data=!4m10!1m2!2m1!1sIIT+JODHPUT!3m6!1s0x39418c5ea672337b:0xb6c9a5a9b08db22e!8m2!3d26.4710115!4d73.1134222!15sCgtJSVQgSk9ESFBVUpIBFHRlY2huaWNhbF91bml2ZXJzaXR5qgEzEAEyHhABIhq-jvzLu99otABrlFoPzb9UTf6DPfaHULyJezIPEAIiC2lpdCBqb2RocHVy4AEA!16s%2Fm%2F04ydk20?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-xs text-red-500 hover:text-red-800 dark:hover:text-red-400 transition-colors duration-200 group-hover:underline underline-offset-2"
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600 dark:text-white/80 text-center sm:text-left">
              © 2025 Society of Alumni Affairs, IIT Jodhpur. All rights reserved.
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-white/80">
              <span>Made with</span>
              <svg className="w-4 h-4 mx-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span>by SAA Tech Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;