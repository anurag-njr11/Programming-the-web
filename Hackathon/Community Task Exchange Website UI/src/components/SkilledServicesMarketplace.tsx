import { Search, Filter, MapPin, Star, CheckCircle, Wrench, Zap, Droplet, Hammer, Paintbrush } from 'lucide-react';
import { Button } from './ui/Button';
import { SkillBadge } from './ui/SkillBadge';

export function SkilledServicesMarketplace() {
  return (
    <div className="w-[1440px] h-[900px] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white mb-3">Find Verified Experts Near You</h1>
          <p className="text-white/90 mb-6 text-lg">
            Licensed professionals for plumbing, electrical, carpentry, and more
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-lg p-2 flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-400 ml-3" />
            <input 
              type="text" 
              placeholder="Search for services or professionals..." 
              className="flex-1 px-3 py-3 outline-none text-gray-900"
            />
            <div className="h-8 w-px bg-gray-200"></div>
            <MapPin className="w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Location" 
              className="w-48 px-3 py-3 outline-none text-gray-900"
            />
            <Button>Search</Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-6xl mx-auto p-8 h-full flex gap-6">
          {/* Left Filter Panel */}
          <div className="w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-900">Filters</h3>
                <button className="text-sm text-teal-600 hover:text-teal-700">Clear all</button>
              </div>

              <div>
                <h4 className="text-gray-900 mb-3 text-sm">Service Type</h4>
                <div className="space-y-2">
                  {[
                    { icon: Droplet, label: 'Plumbing', count: 23 },
                    { icon: Zap, label: 'Electrical', count: 18 },
                    { icon: Hammer, label: 'Carpentry', count: 15 },
                    { icon: Paintbrush, label: 'Painting', count: 12 },
                    { icon: Wrench, label: 'HVAC', count: 9 }
                  ].map((service, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                      <service.icon className="w-4 h-4 text-gray-400" />
                      <span className="flex-1 text-sm text-gray-700">{service.label}</span>
                      <span className="text-xs text-gray-400">{service.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-gray-900 mb-3 text-sm">Budget Range</h4>
                <div className="space-y-2">
                  <input type="range" min="0" max="500" className="w-full" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>$500+</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-gray-900 mb-3 text-sm">Distance</h4>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                  <option>Within 5 miles</option>
                  <option>Within 10 miles</option>
                  <option>Within 25 miles</option>
                  <option>Within 50 miles</option>
                </select>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-gray-900 mb-3 text-sm">Requirements</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                    <span className="text-sm text-gray-700">Verified only</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                    <span className="text-sm text-gray-700">Licensed</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                    <span className="text-sm text-gray-700">Insured</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                    <span className="text-sm text-gray-700">4+ stars only</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Middle - Professionals Grid */}
          <div className="flex-1 overflow-y-auto space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900">52 Professionals Found</h3>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
                <option>Sort by: Best Match</option>
                <option>Highest Rated</option>
                <option>Most Reviews</option>
                <option>Nearest</option>
                <option>Lowest Price</option>
              </select>
            </div>

            {/* Professional Cards */}
            <div className="space-y-4">
              {[
                { 
                  name: 'Mike Rodriguez', 
                  title: 'Licensed Plumber', 
                  rating: 4.9, 
                  reviews: 127, 
                  distance: '0.8 mi', 
                  price: '$80-120/hr',
                  skills: ['Residential', 'Emergency', 'Drain Cleaning'],
                  verified: true,
                  licensed: true,
                  experience: '12 years'
                },
                { 
                  name: 'Sarah Martinez', 
                  title: 'Master Electrician', 
                  rating: 5.0, 
                  reviews: 98, 
                  distance: '1.2 mi', 
                  price: '$90-150/hr',
                  skills: ['Commercial', 'Residential', 'Solar'],
                  verified: true,
                  licensed: true,
                  experience: '15 years'
                },
                { 
                  name: 'David Chen', 
                  title: 'Carpenter & Contractor', 
                  rating: 4.8, 
                  reviews: 76, 
                  distance: '2.1 mi', 
                  price: '$70-110/hr',
                  skills: ['Custom Furniture', 'Remodeling', 'Decks'],
                  verified: true,
                  licensed: true,
                  experience: '10 years'
                },
                { 
                  name: 'Jennifer Williams', 
                  title: 'HVAC Specialist', 
                  rating: 4.9, 
                  reviews: 134, 
                  distance: '1.5 mi', 
                  price: '$85-130/hr',
                  skills: ['Repair', 'Installation', 'Maintenance'],
                  verified: true,
                  licensed: true,
                  experience: '14 years'
                },
                { 
                  name: 'Alex Thompson', 
                  title: 'Professional Painter', 
                  rating: 4.7, 
                  reviews: 54, 
                  distance: '0.9 mi', 
                  price: '$60-95/hr',
                  skills: ['Interior', 'Exterior', 'Commercial'],
                  verified: true,
                  licensed: true,
                  experience: '8 years'
                }
              ].map((pro, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex-shrink-0"></div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-gray-900">{pro.name}</h3>
                            {pro.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                          </div>
                          <p className="text-gray-600">{pro.title}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-orange-600 mb-1">{pro.price}</div>
                          <div className="text-sm text-gray-500">{pro.distance}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                          <span className="text-gray-900">{pro.rating}</span>
                          <span className="text-gray-500 text-sm">({pro.reviews} reviews)</span>
                        </div>
                        <div className="h-4 w-px bg-gray-200"></div>
                        <span className="text-gray-600 text-sm">{pro.experience} experience</span>
                        {pro.licensed && (
                          <>
                            <div className="h-4 w-px bg-gray-200"></div>
                            <span className="text-teal-600 text-sm flex items-center gap-1">
                              <CheckCircle className="w-3.5 h-3.5" />
                              Licensed
                            </span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        {pro.skills.map((skill, j) => (
                          <SkillBadge key={j} label={skill} variant="default" />
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View Profile</Button>
                        <Button size="sm" variant="orange">Request Quote</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Map */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-0">
              <div className="h-[600px] bg-gradient-to-br from-orange-50 to-yellow-50 relative">
                <MapPin className="w-12 h-12 text-orange-600 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                
                {/* Map Pins */}
                {[
                  { top: '20%', left: '30%' },
                  { top: '35%', left: '60%' },
                  { top: '50%', left: '40%' },
                  { top: '65%', left: '70%' },
                  { top: '75%', left: '35%' }
                ].map((pos, i) => (
                  <div 
                    key={i}
                    className="absolute w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                    style={{ top: pos.top, left: pos.left }}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <button className="w-full px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors text-sm">
                  Expand Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
