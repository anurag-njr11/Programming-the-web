export function MobileNote() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-orange-500 text-white p-6 rounded-xl">
      <h3 className="text-white mb-2 text-lg">📱 Fully Interactive Mobile App</h3>
      <p className="text-white/90 text-sm mb-3">
        The design now features a fully interactive mobile app view with tabbed navigation! 
        Click on the bottom navigation tabs to switch between:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
        <div className="px-3 py-2 bg-white/20 rounded-lg text-xs">
          <div className="mb-1">🏠 Home</div>
          <div className="text-white/80">Browse available tasks</div>
        </div>
        <div className="px-3 py-2 bg-white/20 rounded-lg text-xs">
          <div className="mb-1">💬 Messages</div>
          <div className="text-white/80">Chat with helpers</div>
        </div>
        <div className="px-3 py-2 bg-white/20 rounded-lg text-xs">
          <div className="mb-1">📋 My Tasks</div>
          <div className="text-white/80">Track active tasks</div>
        </div>
        <div className="px-3 py-2 bg-white/20 rounded-lg text-xs">
          <div className="mb-1">👤 Profile</div>
          <div className="text-white/80">Your profile & reviews</div>
        </div>
      </div>
      <p className="text-white/90 text-sm">
        Each tab shows unique, contextual content for a complete mobile experience. The design is optimized for both desktop (1440px) and mobile devices with touch-friendly interfaces.
      </p>
    </div>
  );
}