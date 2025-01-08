import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <Link
      to="/profile"
      aria-label="Go back"
      className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap lg:hidden"
    >
      <ArrowLeft className="h-6 w-6" />
    </Link>
  );
}