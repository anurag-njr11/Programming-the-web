import { useState } from 'react';
import { Home, PlusCircle, MessageCircle, ListTodo, User, Settings, Bell, Search } from 'lucide-react';
import { TaskCard } from './ui/TaskCard';
import { Button } from './ui/Button';

export function MobileApp() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="w-full max-w-[430px] mx-auto h-[932px] bg-gray-50 flex flex-col relative">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg"></div>
            <span className="text-gray-900">CTE</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
        
        {activeTab === 'home' && (
          <>
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search tasks..." 
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1">
              <button className="px-3 py-1.5 bg-teal-600 text-white rounded-lg text-xs whitespace-nowrap">All</button>
              <button className="px-3 py-1.5 bg-white text-gray-600 border border-gray-200 rounded-lg text-xs whitespace-nowrap">Common Skills</button>
              <button className="px-3 py-1.5 bg-white text-gray-600 border border-gray-200 rounded-lg text-xs whitespace-nowrap">Skilled Services</button>
              <button className="px-3 py-1.5 bg-white text-gray-600 border border-gray-200 rounded-lg text-xs whitespace-nowrap">Urgent</button>
            </div>
          </>
        )}
        
        {activeTab === 'messages' && (
          <h2 className="text-gray-900 text-lg">Messages</h2>
        )}
        
        {activeTab === 'tasks' && (
          <h2 className="text-gray-900 text-lg">My Tasks</h2>
        )}
        
        {activeTab === 'profile' && (
          <h2 className="text-gray-900 text-lg">Profile</h2>
        )}
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div className="p-4 space-y-3">
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
              title="Dog walking for golden retriever"
              category="Pet Care"
              distance="1.2 mi away"
              postedTime="5 hours ago"
              isWomenSafe
              budget="$25"
              description="Daily walks for my friendly golden retriever, 30 min sessions."
            />
            
            <TaskCard
              title="Fix leaking kitchen faucet"
              category="Plumbing"
              distance="0.5 mi away"
              postedTime="1 day ago"
              isVerified
              budget="$80"
              description="Kitchen faucet dripping constantly. Need licensed plumber."
            />
            
            <TaskCard
              title="Grocery shopping for elderly neighbor"
              category="Shopping"
              distance="0.3 mi away"
              postedTime="3 hours ago"
              isWomenSafe
              budget="$15"
              description="Weekly grocery shopping assistance. Simple list of items."
            />
            
            <TaskCard
              title="Install ceiling fan in bedroom"
              category="Electrical"
              distance="2.1 mi away"
              postedTime="6 hours ago"
              isVerified
              budget="$120"
              description="Need certified electrician to install new ceiling fan."
            />

            <TaskCard
              title="Help setting up new laptop"
              category="Tech Support"
              distance="1.5 mi away"
              postedTime="4 hours ago"
              budget="$30"
              description="Need help transferring files and setting up programs."
            />
          </div>
        )}

        {/* MESSAGES TAB */}
        {activeTab === 'messages' && (
          <div className="divide-y divide-gray-200">
            <div className="p-4 bg-white hover:bg-gray-50 cursor-pointer">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-gray-900">Mike Roberts</h3>
                    <span className="text-xs text-gray-500">2m ago</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">Yes, I can help with the furniture move tomorrow at 2pm</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-teal-50 text-teal-700 rounded text-xs">Moving Task</span>
                </div>
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              </div>
            </div>

            <div className="p-4 bg-white hover:bg-gray-50 cursor-pointer">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-gray-900">Sarah Wilson</h3>
                    <span className="text-xs text-gray-500">1h ago</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">I'm a certified plumber. When would you like me to check the faucet?</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-orange-50 text-orange-700 rounded text-xs">Plumbing</span>
                </div>
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              </div>
            </div>

            <div className="p-4 bg-white hover:bg-gray-50 cursor-pointer">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-gray-900">Lisa Anderson</h3>
                    <span className="text-xs text-gray-500">3h ago</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">I'd love to walk your golden retriever! I have experience with dogs.</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-purple-50 text-purple-700 rounded text-xs">Pet Care</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white hover:bg-gray-50 cursor-pointer">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-gray-900">John Davis</h3>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">Task completed! Please leave a review when you get a chance.</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">Completed</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white hover:bg-gray-50 cursor-pointer">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-gray-900">Emma Thompson</h3>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">Thanks for helping with the groceries! You're a lifesaver.</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">Shopping</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MY TASKS TAB */}
        {activeTab === 'tasks' && (
          <div className="p-4">
            <div className="mb-4">
              <div className="flex gap-2 mb-4">
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm">Active (3)</button>
                <button className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-lg text-sm">Posted (2)</button>
                <button className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-lg text-sm">Completed</button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs">In Progress</span>
                      <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">Moving</span>
                    </div>
                    <h3 className="text-gray-900 mb-1">Help moving furniture</h3>
                    <p className="text-sm text-gray-600 mb-2">Helping Mike Roberts</p>
                  </div>
                  <div className="text-teal-600">$40</div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>📅 Tomorrow, 2:00 PM</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">Message</Button>
                  <Button size="sm" className="flex-1">View Details</Button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">Scheduled</span>
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Pet Care</span>
                    </div>
                    <h3 className="text-gray-900 mb-1">Dog walking service</h3>
                    <p className="text-sm text-gray-600 mb-2">Lisa Anderson accepted</p>
                  </div>
                  <div className="text-teal-600">$25</div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>📅 Today, 6:00 PM</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">Message</Button>
                  <Button size="sm" className="flex-1">View Details</Button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs">Waiting</span>
                      <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">Tech Support</span>
                    </div>
                    <h3 className="text-gray-900 mb-1">Laptop setup assistance</h3>
                    <p className="text-sm text-gray-600 mb-2">3 applicants</p>
                  </div>
                  <div className="text-teal-600">$30</div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>📅 Flexible timing</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">View Offers</Button>
                  <Button size="sm" className="flex-1">Edit Task</Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div>
            {/* Profile Header */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 px-4 py-8 text-white">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-white text-xl mb-1">Sarah Johnson</h2>
                <p className="text-white/80 text-sm mb-3">@sarahj · Member since 2024</p>
                <div className="flex items-center justify-center gap-6">
                  <div>
                    <div className="text-2xl text-white">4.9</div>
                    <div className="text-xs text-white/80">Rating</div>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div>
                    <div className="text-2xl text-white">23</div>
                    <div className="text-xs text-white/80">Tasks Done</div>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div>
                    <div className="text-2xl text-white">15</div>
                    <div className="text-xs text-white/80">Reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-4 space-y-4">
              {/* Badges */}
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="text-gray-900 mb-3">Badges & Verification</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs flex items-center gap-1">
                    <span>✓</span> Verified ID
                  </span>
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs flex items-center gap-1">
                    <span>✓</span> Background Check
                  </span>
                  <span className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs flex items-center gap-1">
                    <span>⭐</span> Top Helper
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="text-gray-900 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs">Pet Care</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs">Moving Help</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs">Shopping</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs">Handyman</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs">Gardening</span>
                </div>
                <button className="mt-3 text-teal-600 text-sm">+ Add More Skills</button>
              </div>

              {/* Recent Reviews */}
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="text-gray-900 mb-3">Recent Reviews</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full"></div>
                      <div>
                        <div className="text-sm text-gray-900">Mike Roberts</div>
                        <div className="text-xs text-teal-600">★★★★★ 5.0</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Very helpful and on time. Would definitely work with again!</p>
                    <span className="text-xs text-gray-400">2 days ago</span>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full"></div>
                      <div>
                        <div className="text-sm text-gray-900">Lisa Anderson</div>
                        <div className="text-xs text-teal-600">★★★★★ 5.0</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Great communication and professional service!</p>
                    <span className="text-xs text-gray-400">1 week ago</span>
                  </div>
                </div>
                <button className="mt-3 text-teal-600 text-sm">View All Reviews</button>
              </div>

              {/* Settings Options */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50">
                  <span className="text-gray-900 text-sm">Edit Profile</span>
                  <span className="text-gray-400">›</span>
                </button>
                <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 border-t border-gray-100">
                  <span className="text-gray-900 text-sm">Payment Methods</span>
                  <span className="text-gray-400">›</span>
                </button>
                <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 border-t border-gray-100">
                  <span className="text-gray-900 text-sm">Safety & Privacy</span>
                  <span className="text-gray-400">›</span>
                </button>
                <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 border-t border-gray-100">
                  <span className="text-gray-900 text-sm">Settings</span>
                  <span className="text-gray-400">›</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
        <div className="max-w-[430px] mx-auto flex items-center justify-around">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'home' ? 'text-teal-600' : 'text-gray-600'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('messages')}
            className={`flex flex-col items-center gap-1 p-2 relative ${activeTab === 'messages' ? 'text-teal-600' : 'text-gray-600'}`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs">Messages</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
          
          <button className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center -mt-6">
            <PlusCircle className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => setActiveTab('tasks')}
            className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'tasks' ? 'text-teal-600' : 'text-gray-600'}`}
          >
            <ListTodo className="w-5 h-5" />
            <span className="text-xs">Tasks</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'profile' ? 'text-teal-600' : 'text-gray-600'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
