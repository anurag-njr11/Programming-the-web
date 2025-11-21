import { MapPin, Clock, DollarSign, Shield, Star, CheckCircle, Calendar, Users } from 'lucide-react';
import { Button } from './ui/Button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TaskDetail() {
  return (
    <div className="w-[1440px] h-[900px] bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-12 py-4">
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900">← Back to Tasks</button>
          <div className="h-6 w-px bg-gray-300"></div>
          <span className="text-gray-600">Task Details</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Task Details */}
          <div className="col-span-2 space-y-6">
            {/* Banner Image */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1762803842055-de1e5fb14477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBtb3ZpbmclMjBjb3VjaHxlbnwxfHx8fDE3NjM3NDg2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Task"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Task Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Moving</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm flex items-center gap-1">
                      Urgent
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Women-safe
                    </span>
                  </div>
                  <h1 className="text-gray-900 mb-2">Help moving furniture to new apartment</h1>
                  <p className="text-gray-600">Posted 2 hours ago by Sarah Johnson</p>
                </div>
                <div>
                  <div className="text-teal-600 text-right mb-1">$50</div>
                  <div className="text-sm text-gray-500">Budget</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  Need 2 people to help move couch and bed frame from my 2nd floor apartment to my new place about 3 miles away. 
                  The items are heavy but we have a dolly available. Should take about 2 hours total. I'll provide water and snacks. 
                  Looking for reliable helpers who can lift heavy items safely.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-gray-900 mb-4">Task Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Date & Time</div>
                      <div className="text-gray-900">Dec 23, 2025 at 10:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="text-gray-900">2-4 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="text-gray-900">0.8 mi away</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Helpers Needed</div>
                      <div className="text-gray-900">2 people</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-900 mb-4">Location</h3>
              <div className="h-64 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center relative">
                <MapPin className="w-12 h-12 text-teal-600 opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-4">123 Main Street, San Francisco, CA 94102</p>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-900 mb-4">Applications (5)</h3>
              <div className="space-y-3">
                {[
                  { name: 'Mike Rodriguez', rating: 4.9, tasks: 47, distance: '0.5 mi', verified: true },
                  { name: 'Alex Chen', rating: 5.0, tasks: 32, distance: '0.8 mi', verified: true },
                  { name: 'Jamie Wilson', rating: 4.8, tasks: 28, distance: '1.2 mi', verified: false },
                  { name: 'Taylor Brown', rating: 4.7, tasks: 15, distance: '1.5 mi', verified: true },
                  { name: 'Jordan Lee', rating: 4.9, tasks: 41, distance: '0.9 mi', verified: true }
                ].map((applicant, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-900">{applicant.name}</span>
                        {applicant.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                          {applicant.rating}
                        </span>
                        <span>{applicant.tasks} tasks</span>
                        <span>{applicant.distance}</span>
                      </div>
                    </div>
                    <Button size="sm">View Profile</Button>
                    <Button size="sm" variant="orange">Accept</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Posted By & Actions */}
          <div className="space-y-6">
            {/* Apply Button */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Button className="w-full mb-3" variant="orange" size="lg">Apply for Task</Button>
              <Button className="w-full" variant="outline">Send Message</Button>
            </div>

            {/* Posted By */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-900 mb-4">Posted by</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full"></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-900">Sarah Johnson</span>
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                    <span>4.9 (23 reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Member since 2024 · 15 tasks posted
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-gray-900 mb-3 text-sm">Verification</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Email verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Phone verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>ID verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Endorsements */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-900 mb-4">Endorsements</h3>
              <div className="space-y-3">
                <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-teal-200 rounded-full"></div>
                    <span className="text-sm text-gray-900">Mike R.</span>
                  </div>
                  <p className="text-sm text-gray-600">"Great communicator, very organized!"</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-teal-200 rounded-full"></div>
                    <span className="text-sm text-gray-900">Lisa M.</span>
                  </div>
                  <p className="text-sm text-gray-600">"Professional and friendly. Highly recommend!"</p>
                </div>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <h4 className="text-orange-900">Safety Tips</h4>
              </div>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• Review helper profiles carefully</li>
                <li>• Meet in a public place first</li>
                <li>• Keep communication on platform</li>
                <li>• Report any suspicious behavior</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
