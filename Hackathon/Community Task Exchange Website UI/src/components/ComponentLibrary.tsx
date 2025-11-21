import { Search, MapPin, Clock, Users, Shield, Star, Check, Wrench } from 'lucide-react';
import { Button } from './ui/Button';
import { InputField } from './ui/InputField';
import { TaskCard } from './ui/TaskCard';
import { SkillBadge } from './ui/SkillBadge';

export function ComponentLibrary() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Buttons */}
      <div>
        <h3 className="text-gray-900 mb-4 md:mb-6">Buttons</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          <div className="space-y-3">
            <p className="text-xs md:text-sm text-gray-600 mb-2">Primary</p>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <div className="space-y-3">
            <p className="text-xs md:text-sm text-gray-600 mb-2">Orange</p>
            <Button size="sm" variant="orange">Small</Button>
            <Button size="md" variant="orange">Medium</Button>
            <Button size="lg" variant="orange">Large</Button>
          </div>
          <div className="space-y-3">
            <p className="text-xs md:text-sm text-gray-600 mb-2">Outline</p>
            <Button size="sm" variant="outline">Small</Button>
            <Button size="md" variant="outline">Medium</Button>
            <Button size="lg" variant="outline">Large</Button>
          </div>
          <div className="space-y-3">
            <p className="text-xs md:text-sm text-gray-600 mb-2">Secondary</p>
            <Button size="sm" variant="secondary">Small</Button>
            <Button size="md" variant="secondary">Medium</Button>
            <Button size="lg" variant="secondary">Large</Button>
          </div>
          <div className="space-y-3">
            <p className="text-xs md:text-sm text-gray-600 mb-2">Ghost</p>
            <Button size="sm" variant="ghost">Small</Button>
            <Button size="md" variant="ghost">Medium</Button>
            <Button size="lg" variant="ghost">Large</Button>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <p className="text-xs md:text-sm text-gray-600 mb-2">With Icons</p>
          <div className="flex flex-wrap gap-3">
            <Button icon={<Search className="w-4 h-4" />}>Search</Button>
            <Button variant="orange" icon={<Users className="w-4 h-4" />}>Apply Now</Button>
            <Button variant="outline" icon={<MapPin className="w-4 h-4" />}>Location</Button>
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div>
        <h3 className="text-gray-900 mb-4 md:mb-6">Input Fields</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <InputField 
            label="Text Input"
            placeholder="Enter text here..."
          />
          <InputField 
            label="With Icon"
            placeholder="Search..."
            icon={<Search className="w-5 h-5" />}
          />
          <InputField 
            label="Location"
            placeholder="Enter your address..."
            icon={<MapPin className="w-5 h-5" />}
          />
          <InputField 
            label="Textarea"
            placeholder="Enter description..."
            multiline
            rows={3}
          />
        </div>
      </div>

      {/* Task Cards */}
      <div>
        <h3 className="text-gray-900 mb-4 md:mb-6">Task Cards</h3>
        <div className="space-y-4 max-w-2xl">
          <TaskCard
            title="Help moving furniture to new apartment"
            category="Moving"
            distance="0.8 mi away"
            postedTime="2 hours ago"
            isUrgent
            budget="$40"
            description="Need 2 people to help move couch and bed frame. About 2 hours of work."
          />
          <TaskCard
            title="Fix leaking kitchen faucet"
            category="Plumbing"
            distance="0.5 mi away"
            postedTime="1 day ago"
            isVerified
            isWomenSafe
            budget="$80"
          />
        </div>
      </div>

      {/* Skill Badges */}
      <div>
        <h3 className="text-gray-900 mb-4 md:mb-6">Skill Badges</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs md:text-sm text-gray-600 mb-3">Default</p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Moving" />
              <SkillBadge label="Pet Care" />
              <SkillBadge label="Handyman" />
              <SkillBadge label="Tech Support" />
            </div>
          </div>
          <div>
            <p className="text-xs md:text-sm text-gray-600 mb-3">Verified</p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Licensed Plumber" variant="verified" />
              <SkillBadge label="Certified Electrician" variant="verified" />
              <SkillBadge label="Background Checked" variant="verified" />
            </div>
          </div>
          <div>
            <p className="text-xs md:text-sm text-gray-600 mb-3">Endorsements</p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Reliable" variant="endorsement" count={23} />
              <SkillBadge label="Great Communication" variant="endorsement" count={18} />
              <SkillBadge label="Quality Work" variant="endorsement" count={31} />
            </div>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div>
        <h3 className="text-gray-900 mb-4 md:mb-6">Icons</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {[
            { icon: MapPin, label: 'Location' },
            { icon: Clock, label: 'Time' },
            { icon: Users, label: 'Users' },
            { icon: Shield, label: 'Safety' },
            { icon: Star, label: 'Rating' },
            { icon: Check, label: 'Verified' },
            { icon: Wrench, label: 'Tools' },
            { icon: Search, label: 'Search' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <div>
        <h3 className="text-gray-900 mb-4 md:mb-6">Navigation Bar</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-gray-900 text-sm md:text-base">Community Task Exchange</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">How It Works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Browse Tasks</a>
              <Button size="sm" variant="outline">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
            <button className="md:hidden p-2">
              <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div>
        <h3 className="text-gray-900 mb-4 md:mb-6">Color Palette</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          <div>
            <div className="h-16 md:h-20 bg-teal-600 rounded-lg mb-2"></div>
            <p className="text-xs md:text-sm text-gray-600">Teal Primary</p>
            <p className="text-xs text-gray-400">#0FB3A3</p>
          </div>
          <div>
            <div className="h-16 md:h-20 bg-orange-500 rounded-lg mb-2"></div>
            <p className="text-xs md:text-sm text-gray-600">Orange Accent</p>
            <p className="text-xs text-gray-400">#FF9F43</p>
          </div>
          <div>
            <div className="h-16 md:h-20 bg-purple-600 rounded-lg mb-2"></div>
            <p className="text-xs md:text-sm text-gray-600">Women-Safe</p>
            <p className="text-xs text-gray-400">#9333EA</p>
          </div>
          <div>
            <div className="h-16 md:h-20 bg-gray-900 rounded-lg mb-2"></div>
            <p className="text-xs md:text-sm text-gray-600">Text Dark</p>
            <p className="text-xs text-gray-400">#111827</p>
          </div>
          <div>
            <div className="h-16 md:h-20 bg-gray-600 rounded-lg mb-2"></div>
            <p className="text-xs md:text-sm text-gray-600">Text Medium</p>
            <p className="text-xs text-gray-400">#4B5563</p>
          </div>
          <div>
            <div className="h-16 md:h-20 bg-gray-100 rounded-lg mb-2 border border-gray-200"></div>
            <p className="text-xs md:text-sm text-gray-600">Background</p>
            <p className="text-xs text-gray-400">#F3F4F6</p>
          </div>
        </div>
      </div>
      
      {/* Mobile Features Note */}
      <div className="bg-gradient-to-r from-teal-50 to-orange-50 border-2 border-teal-200 rounded-xl p-4 md:p-6">
        <h4 className="text-teal-900 mb-2 text-base md:text-lg">📱 Mobile Responsive Features</h4>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li className="flex gap-2">
            <span>✓</span>
            <span>Bottom navigation on mobile devices</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>Hamburger menu for compact navigation</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>Stacked layouts for single-column mobile views</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>Touch-friendly buttons and interactive elements</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>Responsive typography and spacing</span>
          </li>
        </ul>
      </div>
    </div>
  );
}