import React, { useState } from 'react';
import { Menu, X, Search, MessageCircle, GraduationCap, Building2, Phone, Mail, MapPin } from 'lucide-react';
import ChatBot from './components/ChatBot';
import Updates from './components/Updates';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showChatBot, setShowChatBot] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'placement', label: 'Placement Cell' },
    { id: 'result', label: 'Result' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-8">
            <div className="relative h-[60vh] bg-cover bg-center" 
                 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")' }}>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold mb-4">DAV College Amritsar</h1>
                  <p className="text-xl">Excellence in Education Since 1955</p>
                </div>
              </div>
            </div>
            <Updates />
          </div>
        );
      case 'about':
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">About DAV College</h2>
            <p className="text-lg mb-6">
              DAV College Amritsar is a premier educational institution committed to academic excellence
              and holistic development of students. Established in 1955, we have been at the forefront
              of quality education in Punjab.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p>Consistently achieving outstanding academic results</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Building2 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Infrastructure</h3>
                <p>State-of-the-art facilities for optimal learning</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                <p>Highly qualified and experienced teaching staff</p>
              </div>
            </div>
          </div>
        );
      case 'courses':
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Our Courses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Bachelor of Arts', duration: '3 Years' },
                { name: 'Bachelor of Science', duration: '3 Years' },
                { name: 'Bachelor of Commerce', duration: '3 Years' },
                { name: 'Bachelor of Computer Applications', duration: '3 Years' },
                { name: 'Master of Arts', duration: '2 Years' },
                { name: 'Master of Science', duration: '2 Years' },
              ].map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <p className="text-gray-600">Duration: {course.duration}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'placement':
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Placement Cell</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4">Our Recruiters</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, index) => (
                  <div key={index} className="p-4 border rounded-lg text-center">
                    {company}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Placement Statistics</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">90%</p>
                  <p>Placement Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">500+</p>
                  <p>Students Placed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">100+</p>
                  <p>Recruiting Partners</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'result':
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Results</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Roll Number</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your roll number"
                  />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Result
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 font-semibold text-xl">DAV College</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-10 border rounded-md"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {renderSection()}
      </main>

      {/* ChatBot Button */}
      <button
        onClick={() => setShowChatBot(!showChatBot)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* ChatBot Dialog */}
      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +91 123-456-7890</p>
                <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@davcollege.com</p>
                <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> Amritsar, Punjab</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Admissions</a></li>
                <li><a href="#" className="hover:text-blue-400">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-blue-400">Events</a></li>
                <li><a href="#" className="hover:text-blue-400">Student Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0444123543636!2d74.8659!3d31.6344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzA0LjQiTiA3NMKwNTEnNTcuMiJF!5e0!3m2!1sen!2sin!4v1625641824576!5m2!1sen!2sin"
                className="w-full h-48 rounded-md"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 DAV College Amritsar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;