'use client'

import { SplineScene } from "@/components/ui/spline"; // Adjusted path
import { Card } from "@/components/ui/card"; // Adjusted path
import { Spotlight } from "@/components/ui/spotlight"; // Adjusted path
import Image from "next/image"; // Added for the Brain Muffin logo
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      {/* The Spotlight component might need different props or styling approach based on its implementation */}
      <Spotlight /> 
      
      <div className="flex h-full">
        {/* Left content - decreasing right padding at larger screens to stay closer to animation */}
        <div className="w-full md:w-1/2 lg:w-5/12 xl:w-5/12 p-8 pr-4 md:pr-0 relative z-10 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className="w-32 h-32 relative mr-4">
              <Image
                src="/images/logos/brain-muffin-logo-for-jsx.svg"
                alt="Brain Muffin Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-100">
              Introducing Brain Muffin
            </h3>
          </div>
          <p className="mt-3 text-base text-neutral-300 max-w-lg">
            Introducing our AI-powered creative assistant from Brain Muffin. Blending technological innovation 
            with artistic vision to revolutionize how your stories come to life.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
