import { ReactNode } from 'react';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  type?: string;
  multiline?: boolean;
  rows?: number;
}

export function InputField({ label, placeholder, icon, type = 'text', multiline, rows = 3 }: InputFieldProps) {
  const baseStyles = 'w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all';
  
  return (
    <div className="space-y-2">
      {label && <label className="text-gray-700">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        {multiline ? (
          <textarea
            className={`${baseStyles} ${icon ? 'pl-10' : ''}`}
            placeholder={placeholder}
            rows={rows}
          />
        ) : (
          <input
            type={type}
            className={`${baseStyles} ${icon ? 'pl-10' : ''}`}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}
