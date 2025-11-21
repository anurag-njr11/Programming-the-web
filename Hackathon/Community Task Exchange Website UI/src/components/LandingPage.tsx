import { Search, Wrench, Users, Shield, Clock, MapPin, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LandingPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 px-4 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-gray-900 text-sm md:text-base">Community Task Exchange</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Browse Tasks</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Become a Helper</a>
            <Button size="sm" variant="outline">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-4 md:px-12 py-8 md:py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full text-xs md:text-sm text-teal-600 mb-4 md:mb-6 shadow-sm">
                🌟 Building stronger communities together
              </div>
              <h1 className="text-gray-900 mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">Get Help · Give Help · Build Community</h1>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-xl">
                Connect with neighbors for everyday tasks or find verified skilled professionals—all in one trusted platform.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4 md:mb-6">
                <Search className="w-5 h-5 text-gray-400 ml-3 hidden sm:block" />
                <input 
                  type="text" 
                  placeholder="What help do you need?" 
                  className="flex-1 px-3 py-2 md:py-3 outline-none text-sm md:text-base"
                />
                <Button className="w-full sm:w-auto">Search</Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                <span className="hidden sm:inline">Popular:</span>
                <span className="px-2 md:px-3 py-1 bg-white rounded-full hover:bg-gray-50 cursor-pointer">Moving Help</span>
                <span className="px-2 md:px-3 py-1 bg-white rounded-full hover:bg-gray-50 cursor-pointer">Plumbing</span>
                <span className="px-2 md:px-3 py-1 bg-white rounded-full hover:bg-gray-50 cursor-pointer">Pet Sitting</span>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1763355873417-1e0926397851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWxwaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYzNzQzMDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community"
                className="rounded-2xl shadow-xl w-full h-[250px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Two Service Cards */}
      <div className="px-4 md:px-12 py-8 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 md:p-8 text-white cursor-pointer hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <Users className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-white mb-2 md:mb-3 text-xl md:text-2xl">Common Skill Tasks</h2>
            <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base">
              Quick help from neighbors for everyday needs—moving, shopping, pet care, and more.
            </p>
            <div className="flex items-center gap-2 text-white text-sm md:text-base">
              <span>Browse Tasks</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white cursor-pointer hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <Wrench className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-white mb-2 md:mb-3 text-xl md:text-2xl">Skilled Professional Services</h2>
            <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base">
              Find verified experts for plumbing, electrical, carpentry, and specialized work.
            </p>
            <div className="flex items-center gap-2 text-white text-sm md:text-base">
              <span>Find Experts</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="px-4 md:px-12 py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-900 mb-6 md:mb-8 text-center text-xl md:text-2xl">Popular Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { icon: '🏠', label: 'Home Help' },
              { icon: '🐕', label: 'Pet Care' },
              { icon: '🚚', label: 'Moving' },
              { icon: '🔧', label: 'Repairs' },
              { icon: '🌱', label: 'Gardening' },
              { icon: '💻', label: 'Tech Support' },
              { icon: '🎨', label: 'Creative' },
              { icon: '📚', label: 'Tutoring' }
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">{cat.icon}</div>
                <div className="text-gray-700 text-sm md:text-base">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-4 md:px-12 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-900 mb-8 md:mb-12 text-center text-xl md:text-2xl">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Search className="w-8 h-8 md:w-10 md:h-10 text-teal-600" />
              </div>
              <h3 className="text-gray-900 mb-2 md:mb-3 text-lg md:text-xl">1. Post or Find a Task</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Describe what you need or browse available tasks in your area.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2 md:mb-3 text-lg md:text-xl">2. Connect with Helpers</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Review profiles, chat directly, and choose the right person for the job.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-teal-600" />
              </div>
              <h3 className="text-gray-900 mb-2 md:mb-3 text-lg md:text-xl">3. Get It Done Safely</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Complete the task with verified users and leave positive feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-4 md:px-12 py-8 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-900 mb-8 md:mb-12 text-center text-xl md:text-2xl">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: 'Sarah M.', role: 'Task Poster', text: 'Found someone to help with my move in minutes. Amazing community!' },
              { name: 'David L.', role: 'Skilled Professional', text: 'As a plumber, this platform has helped me connect with clients who really need my expertise.' },
              { name: 'Emily R.', role: 'Helper', text: 'I love helping neighbors with small tasks. Great way to meet people and earn extra income.' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-4 md:p-6">
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full"></div>
                  <div>
                    <div className="text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 md:px-12 py-8 md:py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-gray-900 text-sm md:text-base">CTE</span>
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Building stronger communities through mutual support.</p>
          </div>
          <div>
            <h4 className="text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Platform</h4>
            <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
              <div>How It Works</div>
              <div>Safety & Trust</div>
              <div>Pricing</div>
              <div>Community Guidelines</div>
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Support</h4>
            <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
              <div>Help Center</div>
              <div>Contact Us</div>
              <div>Safety Tips</div>
              <div>Report Issue</div>
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
              <div>About Us</div>
              <div>Careers</div>
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 text-center text-xs md:text-sm text-gray-500">
          © 2025 Community Task Exchange. All rights reserved.
        </div>
      </footer>
    </div>
  );
}