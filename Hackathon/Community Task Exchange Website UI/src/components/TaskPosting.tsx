import { Users, Wrench, ArrowRight, Upload, MapPin, Clock, DollarSign, Shield, Check } from 'lucide-react';
import { Button } from './ui/Button';
import { InputField } from './ui/InputField';
import { useState } from 'react';

export function TaskPosting() {
  const [step, setStep] = useState(1);
  
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-[600px] md:h-[900px] bg-gray-50 flex items-center justify-center p-4 md:p-12">
      <div className="w-full max-w-4xl">
        {/* Progress Steps */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex items-center flex-1">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base ${ 
                  step >= num ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {step > num ? <Check className="w-4 h-4 md:w-5 md:h-5" /> : num}
                </div>
                {num < 5 && (
                  <div className={`flex-1 h-1 mx-1 md:mx-2 ${
                    step > num ? 'bg-teal-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:flex justify-between text-sm text-gray-600">
            <span>Choose Type</span>
            <span>Add Details</span>
            <span>Location & Time</span>
            <span>Pricing</span>
            <span>Review</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          {step === 1 && (
            <div>
              <h2 className="text-gray-900 mb-2">What type of help do you need?</h2>
              <p className="text-gray-600 mb-8">Choose the category that best fits your task</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div 
                  className="border-2 border-gray-200 rounded-xl p-8 cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition-all group"
                  onClick={() => setStep(2)}
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200">
                    <Users className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Common Skills Task</h3>
                  <p className="text-gray-600 mb-4">
                    Everyday tasks like moving, shopping, pet care, tutoring, or general help
                  </p>
                  <div className="flex items-center gap-2 text-teal-600">
                    <span>Select</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div 
                  className="border-2 border-gray-200 rounded-xl p-8 cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-all group"
                  onClick={() => setStep(2)}
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200">
                    <Wrench className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Skilled Professional Service</h3>
                  <p className="text-gray-600 mb-4">
                    Licensed work requiring expertise like plumbing, electrical, carpentry, or HVAC
                  </p>
                  <div className="flex items-center gap-2 text-orange-600">
                    <span>Select</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-gray-900 mb-2">Tell us about your task</h2>
              <p className="text-gray-600 mb-8">Provide clear details to help helpers understand what you need</p>
              
              <div className="space-y-6">
                <InputField 
                  label="Task Title"
                  placeholder="e.g., Help moving furniture to new apartment"
                />
                
                <div>
                  <label className="text-gray-700 block mb-2">Category</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Moving', 'Pet Care', 'Shopping', 'Plumbing', 'Electrical', 'Gardening', 'Cleaning', 'Tech Support', 'Other'].map((cat) => (
                      <button key={cat} className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 text-gray-700 text-sm">
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <InputField 
                  label="Description"
                  placeholder="Describe what help you need, any specific requirements, and what helpers should know..."
                  multiline
                  rows={4}
                />

                <div>
                  <label className="text-gray-700 block mb-2">Add Photos (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-500 hover:bg-teal-50 cursor-pointer transition-all">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button className="flex-1" onClick={() => setStep(3)}>Continue</Button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-gray-900 mb-2">Where and when?</h2>
              <p className="text-gray-600 mb-8">Set the location and time for your task</p>
              
              <div className="space-y-6">
                <div>
                  <label className="text-gray-700 block mb-2">Location</label>
                  <div className="border-2 border-gray-200 rounded-lg h-64 bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                    <MapPin className="w-12 h-12 text-teal-600 opacity-20" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                      <input 
                        type="text" 
                        placeholder="Enter your address or drag the pin"
                        className="w-full outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <InputField 
                    label="Date & Time"
                    type="datetime-local"
                    icon={<Clock className="w-5 h-5" />}
                  />
                  
                  <div>
                    <label className="text-gray-700 block mb-2">Estimated Duration</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option>Less than 1 hour</option>
                      <option>1-2 hours</option>
                      <option>2-4 hours</option>
                      <option>4-8 hours</option>
                      <option>Full day</option>
                      <option>Multiple days</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                  <Button className="flex-1" onClick={() => setStep(4)}>Continue</Button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-gray-900 mb-2">Budget and preferences</h2>
              <p className="text-gray-600 mb-8">Set your budget and safety preferences</p>
              
              <div className="space-y-6">
                <div>
                  <label className="text-gray-700 block mb-2">Your Budget</label>
                  <div className="relative">
                    <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="number" 
                      placeholder="50"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">💡 Suggested budget for similar tasks: $40 - $60</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-purple-900 mb-1">Women-Safe Mode</h4>
                      <p className="text-sm text-purple-700 mb-3">
                        Only show this task to verified female helpers or allow female requesters to specify female helpers only
                      </p>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                        </div>
                        <span className="text-purple-900">Enable Women-Safe Mode</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-gray-900 mb-3">Additional Preferences</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                      <span className="text-gray-700">Verified helpers only</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                      <span className="text-gray-700">Helpers with 4+ star rating</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                      <span className="text-gray-700">Notify me of applications immediately</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(3)}>Back</Button>
                  <Button className="flex-1" onClick={() => setStep(5)}>Continue</Button>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-gray-900 mb-2">Review your task</h2>
              <p className="text-gray-600 mb-8">Make sure everything looks good before posting</p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-gray-900 mb-2">Help moving furniture to new apartment</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Moving</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Women-safe
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Need 2 people to help move couch and bed frame from 2nd floor apartment to new place. About 2 hours of work. Heavy lifting involved.
                      </p>
                    </div>
                    <div className="text-teal-600">$50</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="text-gray-900">123 Main St, San Francisco, CA</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Date & Time</div>
                      <div className="text-gray-900">Dec 23, 2025 at 10:00 AM</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Duration</div>
                      <div className="text-gray-900">2-4 hours</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Preferences</div>
                      <div className="text-gray-900">Verified only, 4+ stars</div>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                  <h4 className="text-teal-900 mb-2">What happens next?</h4>
                  <ul className="space-y-2 text-sm text-teal-700">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      Your task will be visible to nearby helpers
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      You'll receive notifications when helpers apply
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      Review applications and chat with potential helpers
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      Select the best helper and confirm the task
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(4)}>Back</Button>
                  <Button className="flex-1" variant="orange">Post Task</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}