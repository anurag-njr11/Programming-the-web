import { Search, Send, MoreVertical, MapPin, Clock, DollarSign, Check } from 'lucide-react';
import { Button } from './ui/Button';

export function ChatPage() {
  return (
    <div className="w-[1440px] h-[900px] bg-gray-50 flex">
      {/* Left Sidebar - Chat List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-gray-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-9 pr-3 py-2 bg-gray-50 rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {[
            { name: 'Mike Rodriguez', message: 'Sounds great! See you tomorrow', time: '2m', unread: 2, active: true },
            { name: 'Sarah Martinez', message: 'I can help with that task', time: '1h', unread: 0, active: false },
            { name: 'David Chen', message: 'What time works best?', time: '3h', unread: 1, active: false },
            { name: 'Jennifer Williams', message: 'Thanks for the endorsement!', time: '5h', unread: 0, active: false },
            { name: 'Alex Thompson', message: 'I\'ll bring all the tools', time: '1d', unread: 0, active: false }
          ].map((chat, i) => (
            <div 
              key={i} 
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${chat.active ? 'bg-teal-50' : ''}`}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full"></div>
                  {chat.active && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-900 text-sm truncate">{chat.name}</span>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-gray-900">Mike Rodriguez</h3>
                <p className="text-sm text-green-600">Active now</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Task Info Card */}
          <div className="mt-4 bg-teal-50 rounded-lg p-4 border border-teal-200">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-teal-900 mb-2">Help moving furniture to new apartment</h4>
                <div className="flex items-center gap-4 text-sm text-teal-700">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Dec 23, 10:00 AM
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    0.8 mi away
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    $50
                  </span>
                </div>
              </div>
              <Button size="sm" variant="outline">View Task</Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Date Separator */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-500">Today</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Received Message */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex-shrink-0"></div>
            <div className="flex-1 max-w-md">
              <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm">
                <p className="text-gray-900">Hi! I saw your moving task. I have experience with furniture moving and I'm available on Dec 23rd.</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">10:32 AM</span>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex gap-3 justify-end">
            <div className="flex-1 max-w-md">
              <div className="bg-teal-600 rounded-2xl rounded-tr-sm p-4 shadow-sm ml-auto">
                <p className="text-white">That's great! Do you have any experience with heavy furniture? We have a large couch and bed frame.</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block text-right">10:35 AM</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex-shrink-0"></div>
          </div>

          {/* Received Message */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex-shrink-0"></div>
            <div className="flex-1 max-w-md">
              <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm">
                <p className="text-gray-900">Yes, I've helped with similar moves before. I can bring a dolly and straps to make it easier. I've completed 47 moving tasks on this platform with a 4.9 rating!</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">10:38 AM</span>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex gap-3 justify-end">
            <div className="flex-1 max-w-md">
              <div className="bg-teal-600 rounded-2xl rounded-tr-sm p-4 shadow-sm ml-auto">
                <p className="text-white">Perfect! Your profile looks great. Let me confirm - you're available at 10 AM on the 23rd?</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block text-right">10:42 AM</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex-shrink-0"></div>
          </div>

          {/* Received Message */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex-shrink-0"></div>
            <div className="flex-1 max-w-md">
              <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm">
                <p className="text-gray-900">Yes, 10 AM works perfectly! I'll bring everything we need.</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">10:45 AM</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3">
            <div className="w-8 h-8 flex-shrink-0"></div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                On My Way 🚗
              </button>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                Need More Time ⏰
              </button>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                Task Completed ✅
              </button>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex gap-3 justify-end">
            <div className="flex-1 max-w-md">
              <div className="bg-teal-600 rounded-2xl rounded-tr-sm p-4 shadow-sm ml-auto">
                <p className="text-white">Sounds great! See you tomorrow at 10 AM. I'll send you the exact address.</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block text-right">10:48 AM</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex-shrink-0"></div>
          </div>

          {/* Typing Indicator */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex-shrink-0"></div>
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-6">
          <div className="flex items-end gap-3">
            <div className="flex-1 bg-gray-50 rounded-xl p-3">
              <textarea 
                placeholder="Type your message..."
                className="w-full bg-transparent outline-none resize-none"
                rows={1}
              ></textarea>
            </div>
            <Button className="px-6" icon={<Send className="w-4 h-4" />}>
              Send
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <button className="hover:text-gray-700">📎 Attach file</button>
            <button className="hover:text-gray-700">📍 Share location</button>
            <button className="hover:text-gray-700">📅 Suggest time</button>
          </div>
        </div>
      </div>
    </div>
  );
}
