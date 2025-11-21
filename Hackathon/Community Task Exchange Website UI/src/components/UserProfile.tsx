import { MapPin, Star, CheckCircle, Award, Calendar, MessageCircle, Flag } from 'lucide-react';
import { Button } from './ui/Button';
import { SkillBadge } from './ui/SkillBadge';

export function UserProfile() {
  return (
    <div className="w-[1440px] h-[900px] bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-12 py-4">
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900">← Back</button>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-br from-teal-500 to-teal-600 px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-8">
            <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex-shrink-0"></div>
            
            <div className="flex-1 text-white">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-white">Mike Rodriguez</h1>
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-white/90 mb-4">@mikerodriguez · Member since 2023</p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-white" />
                  <span className="text-xl">4.9</span>
                  <span className="text-white/80">(127 reviews)</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div>
                  <span className="text-xl">156</span>
                  <span className="text-white/80 ml-2">Tasks Completed</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" icon={<MessageCircle className="w-4 h-4" />}>
                  Send Message
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/10" icon={<Flag className="w-4 h-4" />}>
                  Report
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="text-2xl text-white mb-1">98%</div>
                <div className="text-sm text-white/80">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-white mb-1">15m</div>
                <div className="text-sm text-white/80">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-white mb-1">100%</div>
                <div className="text-sm text-white/80">Completion</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Content */}
      <div className="max-w-6xl mx-auto px-12 py-8">
        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b border-gray-200">
          <button className="px-6 py-3 text-teal-600 border-b-2 border-teal-600">About Me</button>
          <button className="px-6 py-3 text-gray-600 hover:text-gray-900">Common Skills</button>
          <button className="px-6 py-3 text-gray-600 hover:text-gray-900">Skilled Services</button>
          <button className="px-6 py-3 text-gray-600 hover:text-gray-900">Tasks Completed</button>
          <button className="px-6 py-3 text-gray-600 hover:text-gray-900">Endorsements (47)</button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hi! I'm Mike, a licensed plumber with 12 years of experience in residential and commercial work. 
                I love helping people in my community with their plumbing needs. I'm available for everything from 
                simple repairs to complete installations. I take pride in quality work and clear communication.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not fixing pipes, I enjoy spending time with my family and coaching youth soccer. 
                I'm passionate about building strong community connections!
              </p>
            </div>

            {/* Skills & Services */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-gray-900 mb-6">Skills & Services</h2>
              
              <div className="mb-6">
                <h3 className="text-gray-900 mb-3">Common Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge label="Moving & Hauling" variant="endorsement" count={23} />
                  <SkillBadge label="Handyman Work" variant="endorsement" count={18} />
                  <SkillBadge label="Furniture Assembly" variant="endorsement" count={15} />
                  <SkillBadge label="Heavy Lifting" variant="endorsement" count={21} />
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-3">Professional Services</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge label="Licensed Plumber" variant="verified" />
                  <SkillBadge label="Residential Plumbing" variant="verified" />
                  <SkillBadge label="Emergency Repairs" variant="verified" />
                  <SkillBadge label="Drain Cleaning" variant="verified" />
                  <SkillBadge label="Fixture Installation" variant="verified" />
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-gray-900 mb-6">Certifications & Licenses</h2>
              <div className="space-y-4">
                {[
                  { name: 'California State Plumbing License', id: '#PL-12345', verified: true },
                  { name: 'Backflow Prevention Certified', id: '#BP-67890', verified: true },
                  { name: 'OSHA Safety Training', id: '#OSH-11223', verified: true }
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.id}</p>
                    </div>
                    {cert.verified && (
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-gray-900 mb-6">Recent Reviews</h2>
              <div className="space-y-6">
                {[
                  { name: 'Sarah Johnson', rating: 5, date: '2 days ago', text: 'Mike was amazing! Fixed my leaking faucet quickly and explained everything. Highly recommend!' },
                  { name: 'David Lee', rating: 5, date: '1 week ago', text: 'Very professional and punctual. Great communication throughout the job. Will definitely hire again.' },
                  { name: 'Emily Chen', rating: 4, date: '2 weeks ago', text: 'Did a great job installing my new kitchen sink. Clean work and fair pricing.' }
                ].map((review, i) => (
                  <div key={i} className="pb-6 border-b border-gray-200 last:border-0">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-gray-900">{review.name}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex gap-1 mb-2">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                View All 127 Reviews
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Verification */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-gray-900 mb-4">Verification</h3>
              <div className="space-y-3">
                {[
                  { label: 'Email Address', verified: true },
                  { label: 'Phone Number', verified: true },
                  { label: 'Government ID', verified: true },
                  { label: 'Background Check', verified: true },
                  { label: 'Professional License', verified: true }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${item.verified ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-gray-900 mb-4">Badges & Awards</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <div className="text-sm text-gray-900">Top Helper 2024</div>
                    <div className="text-xs text-gray-600">150+ tasks completed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <div className="text-sm text-gray-900">5-Star Pro</div>
                    <div className="text-xs text-gray-600">Maintained 4.9+ rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <div className="text-sm text-gray-900">Quick Responder</div>
                    <div className="text-xs text-gray-600">Avg 15min response time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-gray-900 mb-4">Activity</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tasks This Month</span>
                  <span className="text-gray-900">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Acceptance Rate</span>
                  <span className="text-gray-900">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">On-Time Rate</span>
                  <span className="text-gray-900">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Active</span>
                  <span className="text-green-600">Online now</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-gray-900 mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="text-gray-700">English (Native)</div>
                <div className="text-gray-700">Spanish (Fluent)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
