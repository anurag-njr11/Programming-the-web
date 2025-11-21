import { Check } from 'lucide-react';

interface SkillBadgeProps {
  label: string;
  variant?: 'default' | 'verified' | 'endorsement';
  count?: number;
}

export function SkillBadge({ label, variant = 'default', count }: SkillBadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    verified: 'bg-teal-50 text-teal-700 border border-teal-200',
    endorsement: 'bg-orange-50 text-orange-700 border border-orange-200'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${variants[variant]}`}>
      {variant === 'verified' && <Check className="w-3.5 h-3.5" />}
      {label}
      {count && <span className="ml-1 opacity-60">({count})</span>}
    </span>
  );
}
