import { MapPin, Clock, Zap, Shield } from 'lucide-react';

interface TaskCardProps {
  title: string;
  category: string;
  distance: string;
  postedTime: string;
  isVerified?: boolean;
  isWomenSafe?: boolean;
  isUrgent?: boolean;
  budget?: string;
  description?: string;
}

export function TaskCard({
  title,
  category,
  distance,
  postedTime,
  isVerified,
  isWomenSafe,
  isUrgent,
  budget,
  description
}: TaskCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer">
      <div className="flex items-start justify-between mb-3 gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-block px-2 md:px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs md:text-sm whitespace-nowrap">{category}</span>
            {isUrgent && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs md:text-sm whitespace-nowrap">
                <Zap className="w-3 h-3" />
                <span className="hidden sm:inline">Urgent</span>
              </span>
            )}
            {isVerified && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs md:text-sm whitespace-nowrap">
                <Shield className="w-3 h-3" />
                <span className="hidden sm:inline">Verified</span>
              </span>
            )}
            {isWomenSafe && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs md:text-sm whitespace-nowrap">
                <Shield className="w-3 h-3" />
                <span className="hidden sm:inline">Women-safe</span>
              </span>
            )}
          </div>
          <h3 className="text-gray-900 mb-2 text-base md:text-lg">{title}</h3>
          {description && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>}
        </div>
        {budget && <div className="text-teal-600 ml-2 flex-shrink-0 text-base md:text-lg">{budget}</div>}
      </div>
      <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 flex-wrap">
        <span className="flex items-center gap-1 whitespace-nowrap">
          <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
          {distance}
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
          {postedTime}
        </span>
      </div>
    </div>
  );
}