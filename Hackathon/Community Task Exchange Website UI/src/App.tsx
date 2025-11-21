import { LandingPage } from './components/LandingPage';
import { UserDashboard } from './components/UserDashboard';
import { TaskPosting } from './components/TaskPosting';
import { TaskDetail } from './components/TaskDetail';
import { SkilledServicesMarketplace } from './components/SkilledServicesMarketplace';
import { ChatPage } from './components/ChatPage';
import { UserProfile } from './components/UserProfile';
import { SettingsSafety } from './components/SettingsSafety';
import { ComponentLibrary } from './components/ComponentLibrary';
import { MobileNote } from './components/MobileNote';
import { MobileApp } from './components/MobileApp';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-[1600px] mx-auto mb-8 md:mb-12">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-teal-600 mb-2 text-xl md:text-2xl lg:text-3xl">Community Task Exchange</h1>
          <p className="text-gray-600 text-sm md:text-base">High-Fidelity Website UI Design · Responsive Desktop & Mobile · Product Design Showcase</p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
      </div>

      {/* Mobile Responsive Note */}
      <div className="max-w-[1600px] mx-auto mb-12">
        <MobileNote />
      </div>

      {/* Design Board - All Screens */}
      <div className="max-w-[1600px] mx-auto space-y-12 md:space-y-16">
        
        {/* MOBILE APP VIEW - Interactive Tabs */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">00 · Mobile App (Interactive Tabs)</h2>
            <p className="text-gray-600 text-sm">Click the bottom navigation to switch between Home, Messages, Tasks, and Profile</p>
            <div className="bg-gray-900 rounded-2xl shadow-2xl p-3 md:p-6 flex items-center justify-center">
              <MobileApp />
            </div>
          </div>
        </div>

        {/* Row 1: Landing & Dashboard */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">01 · Landing Page / Home</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <LandingPage />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">02 · User Dashboard (Logged-in)</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <UserDashboard />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">03 · Task Posting (Multi-step)</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <TaskPosting />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">04 · Task Detail Page</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <TaskDetail />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">05 · Skilled Services Marketplace</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <SkilledServicesMarketplace />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">06 · Chat / Messenger</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <ChatPage />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">07 · User Profile Page</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <UserProfile />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">08 · Settings & Safety</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <SettingsSafety />
            </div>
          </div>
        </div>

        {/* Component Library */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-teal-600 text-lg md:text-xl">Component Library</h2>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 border border-gray-200">
              <ComponentLibrary />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}