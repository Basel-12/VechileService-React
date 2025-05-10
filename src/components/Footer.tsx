import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">FixIt</h3>
            <p className="text-sm">
              Your trusted partner for all vehicle service needs. Quality
              service, guaranteed satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="hover:text-white transition-colors"
                >
                  Book Service
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/repair"
                  className="hover:text-white transition-colors"
                >
                  Vehicle Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services/maintenance"
                  className="hover:text-white transition-colors"
                >
                  Regular Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/diagnostics"
                  className="hover:text-white transition-colors"
                >
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  to="/services/emergency"
                  className="hover:text-white transition-colors"
                >
                  Emergency Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Service Street, Auto City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <span>contact@fixit.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-clock"></i>
                <span>Mon-Sat: 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} FixIt. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/faq"
                className="text-sm hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
