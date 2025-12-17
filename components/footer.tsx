import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img
              src="/images/logos_kyle_and_kylie_word.png"
              alt="Kyle & Kylie"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Premium services for pianos, holidays, and entertainment. Your trusted partner for exceptional experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <div className="space-y-3">
              <a href="/pianoforte" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-rose-500 mr-3 transform group-hover:scale-125 transition-transform"></span>
                Pianoforte
              </a>
              <a href="/holidays" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 transform group-hover:scale-125 transition-transform"></span>
                Holidays
              </a>
              <a href="/entertainment" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 transform group-hover:scale-125 transition-transform"></span>
                Entertainment
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a href="tel:+94718661068" className="group flex items-start space-x-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Phone</div>
                  <div className="font-medium">+94 71 866 1068</div>
                </div>
              </a>

              <a href="mailto:forestersolomusician@gmail.com" className="group flex items-start space-x-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <div className="font-medium text-sm">forestersolomusician@gmail.com</div>
                </div>
              </a>

              <a href="https://maps.google.com?q=23+Arthur+V.+Dias+Mawatha+Panadura+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="group flex items-start space-x-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Location</div>
                  <div className="font-medium">23 Arthur V. Dias Mawatha<br />Panadura, Sri Lanka</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-12 text-center">
          <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a
              href="https://www.tiktok.com/@kyle.andkylie"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@Kyle.andkylie"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-xl bg-white/5 hover:bg-red-600 flex items-center justify-center transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=61581657190279"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-xl bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/kyle.andkylie/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Kyle & Kylie. All rights reserved.
            </p>
            <a 
              href="https://www.koncepthive.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              <span className="text-gray-500 text-sm">Website by</span>
              <img
                src="/images/Koncepthive.png"
                alt="KonceptHive"
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
