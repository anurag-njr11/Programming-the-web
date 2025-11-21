import { Shield, Lock, Bell, Eye, MapPin, Phone, Mail, CreditCard, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

export function SettingsSafety() {
  return (
    <div className="w-[1440px] h-[900px] bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-12 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-gray-900 mb-2">Settings & Safety</h1>
          <p className="text-gray-600">Manage your account, privacy, and safety preferences</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Left Sidebar Nav */}
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-teal-50 text-teal-600 rounded-lg">
              <Shield className="w-5 h-5" />
              <span>Safety & Trust</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Lock className="w-5 h-5" />
              <span>Privacy</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <CreditCard className="w-5 h-5" />
              <span>Payments</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Users className="w-5 h-5" />
              <span>Account</span>
            </button>
          </div>

          {/* Right Content */}
          <div className="col-span-3 space-y-8">
            {/* ID Verification */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-gray-900 mb-6">Identity Verification</h2>
              
              <div className="space-y-4">
                {[
                  { label: 'Email Address', value: 'sarah.j@email.com', verified: true, icon: Mail },
                  { label: 'Phone Number', value: '+1 (555) 123-4567', verified: true, icon: Phone },
                  { label: 'Government ID', value: 'Driver\'s License verified', verified: true, icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="text-gray-900 mb-1">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.value}</div>
                      </div>
                    </div>
                    {item.verified ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">Verified</span>
                      </div>
                    ) : (
                      <Button size="sm" variant="outline">Verify</Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-blue-900 mb-1">Background Check Available</h4>
                    <p className="text-sm text-blue-700 mb-3">
                      Complete a background check to increase trust and get access to more opportunities.
                    </p>
                    <Button size="sm" variant="outline">Start Background Check</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Women-Safe Mode */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-900 mb-2">Women-Safe Mode</h2>
                  <p className="text-gray-600">
                    Enhanced safety features for female users. When enabled, you can choose to only see tasks from 
                    or show your tasks to verified female users.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200 cursor-pointer">
                  <div className="flex-1">
                    <div className="text-gray-900 mb-1">Enable Women-Safe Mode</div>
                    <div className="text-sm text-gray-600">Only show and receive tasks from verified female users</div>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"></div>
                  </div>
                </label>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex-1">
                    <div className="text-gray-900 mb-1">Require Female Helpers Only</div>
                    <div className="text-sm text-gray-600">Only female helpers can apply to your tasks</div>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"></div>
                  </div>
                </label>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-900">Emergency Contacts</h2>
                <Button size="sm" variant="outline">Add Contact</Button>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'John Johnson', relation: 'Spouse', phone: '+1 (555) 123-4568' },
                  { name: 'Emily Wilson', relation: 'Sister', phone: '+1 (555) 987-6543' }
                ].map((contact, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-gray-900">{contact.name}</div>
                        <div className="text-sm text-gray-600">{contact.relation} · {contact.phone}</div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <span className="text-xl">×</span>
                    </button>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Emergency contacts will be notified if you mark yourself as unsafe during a task.
              </p>
            </div>

            {/* Privacy Controls */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-gray-900 mb-6">Privacy Controls</h2>

              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Eye className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-gray-900 mb-1">Show profile to everyone</div>
                      <div className="text-sm text-gray-600">Make your profile visible to all users</div>
                    </div>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-teal-600 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"></div>
                  </div>
                </label>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-gray-900 mb-1">Share exact location</div>
                      <div className="text-sm text-gray-600">Show precise address instead of general area</div>
                    </div>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-teal-600 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"></div>
                  </div>
                </label>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-gray-900 mb-1">Allow endorsements</div>
                      <div className="text-sm text-gray-600">Let others leave positive feedback on your profile</div>
                    </div>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-teal-600 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"></div>
                  </div>
                </label>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-orange-900 mb-3">Safety Reminders</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Always meet in public places for first meetings</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Keep all communication on the platform</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Trust your instincts - report suspicious behavior</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Never share personal financial information</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Let friends or family know where you're going</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Button variant="outline" className="mt-4">View Full Safety Guidelines</Button>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border-2 border-red-200">
              <h2 className="text-red-900 mb-4">Danger Zone</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200">
                  Deactivate Account Temporarily
                </button>
                <button className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 rounded-lg border border-red-200">
                  Delete Account Permanently
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
