import React from "react";
import { Link } from "react-router-dom";

export default function ChatFooter() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-2">
      <p className="text-center text-sm text-neutral-600">
        By using Pi, you agree to our{" "}
        <Link
          to="https://pi.ai/policy#terms"
          className="text-green-600 underline"
        >
          Terms
        </Link>{" "}
        and{" "}
        <Link
          to="https://pi.ai/policy#privacy"
          className="text-green-600 underline"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
