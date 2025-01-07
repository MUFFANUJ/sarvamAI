import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';


export default function MenuItem({ icon, text, to }) {
  const commonClasses = "flex h-14 w-full items-center justify-between rounded-md px-2 py-4 font-sans text-body-m-mobile text-primary-700 hover:bg-neutral-50-hover active:bg-neutral-50-tap";
  
    return (
      <Link
        to={to}
        className={commonClasses}
        aria-label={`Go to ${text} page`}
      >
        <div className="flex items-center space-x-2">
        {icon}
        <p>{text}</p>
      </div>
      <ChevronRight className="h-6 w-6 text-neutral-700" />
      </Link>
    );

  return null;
}
