import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo2.png" alt="Global Education Institute" className="h-16 mb-4" />
            <p className="text-gray-400 leading-relaxed">
              Empowering minds and shaping futures through quality education and innovative learning experiences since 1995.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-blue-400 transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-blue-400 transition-colors">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-blue-400 transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-blue-400 mt-1" />
                <span className="text-gray-400">Dedwa, Sanchore, Rajasthan, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-blue-400" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919983885151" className="text-gray-400 hover:text-blue-400 transition-colors">
                    +91 9983885151
                  </a>
                  <a href="tel:+919950885151" className="text-gray-400 hover:text-blue-400 transition-colors">
                    +91 9950885151
                  </a>
                  <a href="tel:+919460885151" className="text-gray-400 hover:text-blue-400 transition-colors">
                    +91 9460885151
                  </a>
                  <a href="tel:+9102979296551" className="text-gray-400 hover:text-blue-400 transition-colors">
                    +91 02979296551
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-blue-400" />
                <a href="mailto:globalsanchore@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  globalsanchore@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0 text-blue-400 mt-1" />
                <span className="text-gray-400">Monday to Saturday, 10AM to 6PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-400 mb-4">Connect with us on social media</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Global Education Institute. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
