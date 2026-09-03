'use client';

import { useState } from 'react';
import { ChevronDown, Users, BookOpen, Award, Calendar } from 'lucide-react';
import Image from 'next/image';

function LotusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8c0 0-8 12-8 24s8 16 8 16 8-4 8-16-8-24-8-24z" opacity="0.9"/>
      <path d="M32 48s-16-8-20-20c0 0 4 20 20 28 16-8 20-28 20-28-4 12-20 20-20 20z" opacity="0.7"/>
      <path d="M12 28c0 0 8 4 20 4s20-4 20-4c0 8-8 16-20 20-12-4-20-12-20-20z" opacity="0.5"/>
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 4C16 4 8 20 8 36c0 12 8 20 8 20s4-16 16-24c12 8 16 24 16 24s8-8 8-20c0-16-8-32-24-32z"/>
      <path d="M32 20v36" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
    </svg>
  );
}

export default function Home() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-[#FDF8F3]/95 backdrop-blur-sm border-b border-[#F3E7E4]">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif italic text-[#2A2B2A]">Estudio Zen</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[#2A2B2A] hover:text-[#2C7A76] transition-colors">About</a>
            <a href="#classes" className="text-[#2A2B2A] hover:text-[#2C7A76] transition-colors">Classes</a>
            <a href="#teacher-training" className="text-[#2A2B2A] hover:text-[#2C7A76] transition-colors">Teacher Training</a>
            <a href="#workshops" className="text-[#2A2B2A] hover:text-[#2C7A76] transition-colors">Workshops</a>
            <a href="#schedule" className="text-[#2A2B2A] hover:text-[#2C7A76] transition-colors">Schedule</a>
            <a href="#contact" className="text-[#2A2B2A] hover:text-[#2C7A76] transition-colors">Contact</a>
          </div>
          <a href="#booking" className="bg-[#2C7A76] text-white px-6 py-2 rounded-full hover:bg-[#245f5c] transition-colors">
            Book a Class
          </a>
        </nav>
      </header>

      {/* Hero Section - Split Layout with Photography */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2A2B2A] leading-tight mb-6">
            A space to come home to you
          </h1>
          <p className="text-lg text-[#666] mb-8 max-w-lg">
            Discover inner peace and physical wellness at our boutique yoga and meditation studio.
            Join our community and transform your practice.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#booking" className="bg-[#2C7A76] text-white px-8 py-4 rounded-full font-medium hover:bg-[#245f5c] transition-colors">
              Book Your Free Trial
            </a>
            <a href="#classes" className="border-2 border-[#2C7A76] text-[#2C7A76] px-8 py-4 rounded-full font-medium hover:bg-[#2C7A76] hover:text-white transition-colors">
              View Classes
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
            alt="Yoga studio with natural light and practitioners in peaceful meditation"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FDF8F3]/20" />
        </div>
      </section>

      {/* Stats Banner - Beige with Icons */}
      <section className="bg-[#F3E7E4] py-12 border-y border-[#E8D9D6]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#2C7A76]/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-[#2C7A76]" />
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-[#2A2B2A]">4,200+</p>
              <p className="text-[#666] text-sm">Students</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#2C7A76]/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-[#2C7A76]" />
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-[#2A2B2A]">150+</p>
              <p className="text-[#666] text-sm">Classes</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#2C7A76]/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-[#2C7A76]" />
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-[#2A2B2A]">25+</p>
              <p className="text-[#666] text-sm">Teachers</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#2C7A76]/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-[#2C7A76]" />
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-[#2A2B2A]">8</p>
              <p className="text-[#666] text-sm">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards with Lotus/Leaf Icons */}
      <section id="classes" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2A2B2A] mb-4">Our Offerings</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Explore our range of classes and programs designed to nurture your body, mind, and spirit.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Yoga Classes Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F3E7E4] group">
              <div className="w-16 h-16 bg-[#F3E7E4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2C7A76]/10 transition-colors">
                <LotusIcon className="w-8 h-8 text-[#2C7A76]" />
              </div>
              <h3 className="text-xl font-serif text-[#2A2B2A] mb-3">Yoga Classes</h3>
              <p className="text-[#666] mb-6 leading-relaxed">
                From gentle flow to power yoga, find the perfect class for your practice level.
              </p>
              <a href="#booking" className="inline-flex items-center text-[#2C7A76] font-medium hover:gap-2 transition-all">
                Explore Classes <span className="ml-1">&rarr;</span>
              </a>
            </div>

            {/* Meditation Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F3E7E4] group">
              <div className="w-16 h-16 bg-[#F3E7E4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2C7A76]/10 transition-colors">
                <LeafIcon className="w-8 h-8 text-[#2C7A76]" />
              </div>
              <h3 className="text-xl font-serif text-[#2A2B2A] mb-3">Meditation</h3>
              <p className="text-[#666] mb-6 leading-relaxed">
                Guided meditation sessions to calm your mind and enhance mental clarity.
              </p>
              <a href="#booking" className="inline-flex items-center text-[#2C7A76] font-medium hover:gap-2 transition-all">
                Learn More <span className="ml-1">&rarr;</span>
              </a>
            </div>

            {/* Teacher Training Card */}
            <div id="teacher-training" className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F3E7E4] group">
              <div className="w-16 h-16 bg-[#F3E7E4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2C7A76]/10 transition-colors">
                <LotusIcon className="w-8 h-8 text-[#2C7A76]" />
              </div>
              <h3 className="text-xl font-serif text-[#2A2B2A] mb-3">Teacher Training</h3>
              <p className="text-[#666] mb-6 leading-relaxed">
                200-hour and 500-hour certified yoga teacher training programs.
              </p>
              <a href="#booking" className="inline-flex items-center text-[#2C7A76] font-medium hover:gap-2 transition-all">
                Start Your Journey <span className="ml-1">&rarr;</span>
              </a>
            </div>

            {/* Workshops Card */}
            <div id="workshops" className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F3E7E4] group">
              <div className="w-16 h-16 bg-[#F3E7E4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2C7A76]/10 transition-colors">
                <LeafIcon className="w-8 h-8 text-[#2C7A76]" />
              </div>
              <h3 className="text-xl font-serif text-[#2A2B2A] mb-3">Workshops</h3>
              <p className="text-[#666] mb-6 leading-relaxed">
                Special weekend workshops on inversions, breathwork, and more.
              </p>
              <a href="#booking" className="inline-flex items-center text-[#2C7A76] font-medium hover:gap-2 transition-all">
                View Schedule <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 px-6 bg-[#F3E7E4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2A2B2A] mb-4">Book Your Class</h2>
            <p className="text-[#666]">
              Reserve your spot in one of our classes. First class is free for new students!
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <form className="grid md:grid-cols-3 gap-6">
              {/* Class Selector */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#2A2B2A] mb-2">Select Class</label>
                <div className="relative">
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full appearance-none bg-[#FDF8F3] border border-[#F3E7E4] rounded-xl px-4 py-3 text-[#2A2B2A] focus:outline-none focus:ring-2 focus:ring-[#2C7A76]"
                  >
                    <option value="">Choose a class</option>
                    <option value="vinyasa">Vinyasa Flow</option>
                    <option value="hatha">Hatha Yoga</option>
                    <option value="yin">Yin Yoga</option>
                    <option value="power">Power Yoga</option>
                    <option value="meditation">Guided Meditation</option>
                    <option value="prenatal">Prenatal Yoga</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666] pointer-events-none" />
                </div>
              </div>

              {/* Date Selector */}
              <div>
                <label className="block text-sm font-medium text-[#2A2B2A] mb-2">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#FDF8F3] border border-[#F3E7E4] rounded-xl px-4 py-3 text-[#2A2B2A] focus:outline-none focus:ring-2 focus:ring-[#2C7A76]"
                />
              </div>

              {/* Time Selector */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#2A2B2A] mb-2">Select Time</label>
                <div className="relative">
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full appearance-none bg-[#FDF8F3] border border-[#F3E7E4] rounded-xl px-4 py-3 text-[#2A2B2A] focus:outline-none focus:ring-2 focus:ring-[#2C7A76]"
                  >
                    <option value="">Choose a time</option>
                    <option value="6:00">6:00 AM</option>
                    <option value="7:30">7:30 AM</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666] pointer-events-none" />
                </div>
              </div>

              {/* Submit Button - Full Width */}
              <div className="md:col-span-3 mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#2C7A76] text-white py-4 rounded-full font-medium text-lg hover:bg-[#245f5c] transition-colors"
                >
                  Reserve Your Spot
                </button>
                <p className="text-center text-sm text-[#666] mt-4">
                  First class is complimentary for new students
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About Section with Photography */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2A2B2A] mb-6">
              Welcome to Estudio Zen
            </h2>
            <p className="text-[#666] mb-4 leading-relaxed">
              For over 8 years, we&apos;ve been creating a sanctuary where students of all levels
              can explore the transformative power of yoga and meditation.
            </p>
            <p className="text-[#666] mb-6 leading-relaxed">
              Our experienced teachers guide you through practices that honor traditional
              wisdom while embracing modern wellness principles. Whether you&apos;re taking
              your first class or deepening an established practice, you&apos;ll find
              a welcoming community here.
            </p>
            <a href="#contact" className="inline-flex items-center text-[#2C7A76] font-medium hover:gap-2 transition-all">
              Meet Our Teachers <span className="ml-1">&rarr;</span>
            </a>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop"
              alt="Peaceful yoga studio interior with warm natural lighting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#2A2B2A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-[#FDF8F3]/80 mb-8 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out to learn more
            about our classes, memberships, or teacher training programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@estudiozenyoga.com" className="bg-[#2C7A76] text-white px-8 py-4 rounded-full font-medium hover:bg-[#245f5c] transition-colors">
              Contact Us
            </a>
            <a href="#schedule" className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#2A2B2A] transition-colors">
              View Full Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A2B2A] border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif italic text-white mb-4">Estudio Zen</h3>
              <p className="text-[#FDF8F3]/60 text-sm">
                A space to come home to you.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Classes</h4>
              <ul className="space-y-2 text-sm text-[#FDF8F3]/60">
                <li><a href="#" className="hover:text-white transition-colors">Yoga Classes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Meditation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-[#FDF8F3]/60">
                <li><a href="#" className="hover:text-white transition-colors">Teacher Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Memberships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Private Sessions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-[#FDF8F3]/60">
                <li>hello@estudiozenyoga.com</li>
                <li>123 Serenity Lane</li>
                <li>Mon-Sun: 6am - 9pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-[#FDF8F3]/40">
            <p>Copyright 2026 Estudio Zen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
