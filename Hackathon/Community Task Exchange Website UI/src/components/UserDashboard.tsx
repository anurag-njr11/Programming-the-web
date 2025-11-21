import { Home, PlusCircle, MessageCircle, ListTodo, User, Settings, MapPin, Bell, Search } from 'lucide-react';
import { TaskCard } from './ui/TaskCard';
import { Button } from './ui/Button';

export function UserDashboard() {
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-[600px] md:h-[900px] bg-gray-50 flex flex-col md:flex-row">
      {/* Left Sidebar - Hidden on mobile, shown as bottom nav */}
      <div className="hidden md:flex md:w-64 bg-white border-r border-gray-200 flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg"></div>
            <div>
              <div className="text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">@sarahj</div>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-teal-50 text-teal-600">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <PlusCircle className="w-5 h-5" />
            <span>Post a Task</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <MessageCircle className="w-5 h-5" />
            <span>Messages</span>
            <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <ListTodo className="w-5 h-5" />
            <span>My Tasks</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-teal-50 rounded-lg p-4">
            <h4 className="text-teal-900 mb-1">Post Your First Task</h4>
            <p className="text-sm text-teal-700 mb-3">Get help from your community!</p>
            <Button size="sm" className="w-full">Create Task</Button>
          </div>
        </div>
      </div>

      {/* Middle Feed */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 md:p-6 sticky top-0 z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search tasks..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base"
              />
            </div>
            <button className="p-2.5 hover:bg-gray-100 rounded-lg relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </button>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
            <button className="px-3 md:px-4 py-2 bg-teal-600 text-white rounded-lg text-xs md:text-sm whitespace-nowrap">All Tasks</button>
            <button className="px-3 md:px-4 py-2 bg-white text-gray-600 hover:bg-gray-50 rounded-lg text-xs md:text-sm border border-gray-200 whitespace-nowrap">Common Skills</button>
            <button className="px-3 md:px-4 py-2 bg-white text-gray-600 hover:bg-gray-50 rounded-lg text-xs md:text-sm border border-gray-200 whitespace-nowrap">Skilled Services</button>
            <button className="px-3 md:px-4 py-2 bg-white text-gray-600 hover:bg-gray-50 rounded-lg text-xs md:text-sm border border-gray-200 whitespace-nowrap">Urgent</button>
          </div>
        </div>

        {/* Task Feed */}
        <div className="p-4 md:p-6 space-y-4">
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
            description="Need help transferring files and setting up programs on new computer."
          />
        </div>
      </div>

      {/* Right Side - Map - Hidden on mobile */}
      <div className="hidden lg:block lg:w-96 bg-white border-l border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900 mb-1">Nearby Helpers</h3>
          <p className="text-sm text-gray-500">Tasks and helpers in your area</p>
        </div>
        
        <div className="h-[500px] bg-gray-100 relative">
          {/* Map Mockup */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
            <MapPin className="w-12 h-12 text-teal-600 opacity-20" />
          </div>
          
          {/* Map Pins */}
          <div className="absolute top-20 left-20 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="absolute top-32 right-16 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="absolute bottom-32 left-32 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="absolute bottom-24 right-24 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
        </div>

        <div className="p-6 space-y-3">
          <h4 className="text-gray-900">Active Helpers Nearby</h4>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full"></div>
            <div className="flex-1">
              <div className="text-gray-900 text-sm">Mike R.</div>
              <div className="text-xs text-gray-500">Handyman • 0.5 mi</div>
            </div>
            <div className="text-teal-600 text-sm">4.9★</div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full"></div>
            <div className="flex-1">
              <div className="text-gray-900 text-sm">Lisa M.</div>
              <div className="text-xs text-gray-500">Pet Care • 1.2 mi</div>
            </div>
            <div className="text-teal-600 text-sm">5.0★</div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full"></div>
            <div className="flex-1">
              <div className="text-gray-900 text-sm">John D.</div>
              <div className="text-xs text-gray-500">Plumber • 2.1 mi</div>
            </div>
            <div className="text-teal-600 text-sm">4.8★</div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
        <div className="flex items-center justify-around">
          <a href="#" className="flex flex-col items-center gap-1 p-2 text-teal-600">
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 p-2 text-gray-600 relative">
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs">Messages</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </a>
          <button className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center -mt-6">
            <PlusCircle className="w-6 h-6" />
          </button>
          <a href="#" className="flex flex-col items-center gap-1 p-2 text-gray-600">
            <ListTodo className="w-5 h-5" />
            <span className="text-xs">Tasks</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 p-2 text-gray-600">
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </a>
        </div>
      </div>

      {/* Floating Action Button - Desktop only */}
      <button className="hidden md:block fixed bottom-8 right-8 w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110">
        <PlusCircle className="w-6 h-6" />
      </button>
    </div>
  );
}