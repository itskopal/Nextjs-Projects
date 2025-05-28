import { Meteors } from "@/components/ui/meteors";
import React from "react";

function page() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 pt-36">
      <Meteors number={20} />

      <div className="max-w-4xl text-center">
        <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-4 text-white">
          Contact Us
        </h1>
        <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
          I don&apos;t know what to write so I&apos;ll just paste something cool
          here. One more sentence because lorem ipsum is just unacceptable.
          Won&apos;t ChatGPT the shit out of this.
        </p>
      </div>
    </div>
  );
}

export default page;
