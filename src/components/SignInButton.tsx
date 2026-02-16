"use client";

import Image from "next/image";

function SignInButton({ provider }) {
  return (
    <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium hover:bg-slate-950 hover:text-white rounded transition cursor-pointer">
      <Image
        src={`https://authjs.dev/img/providers/${provider.toLowerCase()}.svg`}
        alt={`${provider} logo`}
        width={24}
        height={24}
      />
      <span>Continue with {provider}</span>
    </button>
  );
}

export default SignInButton;