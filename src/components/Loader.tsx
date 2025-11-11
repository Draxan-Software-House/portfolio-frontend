import React from 'react';

// ✅ Simple animated loading spinner using DaisyUI classes
export default function Loader({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <span className="loading loading-spinner text-primary w-12 h-12"></span>
      <p className="mt-3 text-sm text-gray-600">{text}</p>
    </div>
  );
}