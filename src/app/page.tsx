import Image from "next/image";
// Removed unused Button import
// import { SiteFooter } from "@/components/site-footer"; // Removed duplicate footer import (handled in layout)
import { Gallery4, Gallery4Props } from "@/components/blocks/gallery4"; // Import Gallery4 and Gallery4Props
import { Spotlight, GridBackground } from "@/components/ui/spotlight";
import { SplineSceneBasic } from "@/components/blocks/spline-scene-basic-demo"; // Import the new component
import InViewImagesGrid from "@/components/blocks/in-view-images-grid-demo";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

// Define demoData directly in the page component
const demoData: Gallery4Props = {
  title: "Featured Work",
  description:
    "Explore our diverse portfolio of video production projects that bring stories and brands to life.",
  items: [
    {
      id: "documentary",
      title: "Documentary Films",
      description: "Telling compelling stories through in-depth documentary filmmaking.",
      href: "#", // Placeholder link
      image: "/images/videography-bts-01.jpeg", // Use local image
    },
    {
      id: "brand-film",
      title: "Brand Films",
      description: "Crafting cinematic narratives that showcase your brand's essence and values.",
      href: "#", // Placeholder link
      image: "/images/videography-bts-02.jpeg", // Use local image
    },
    {
      id: "event-video",
      title: "Event Coverage",
      description: "Capturing the energy and key moments of your events with professional videography.",
      href: "#", // Placeholder link
      image: "/images/videography-bts-05.jpeg", // Use local image
    },
    {
      id: "vfx",
      title: "Visual Effects (VFX)",
      description: "Enhancing visuals and adding magic to your projects with creative VFX solutions.",
      href: "#", // Placeholder link
      image: "/images/videography-bts-04.jpeg", // Use local image
    },
    {
      id: "animation",
      title: "Animation & Motion Graphics",
      description: "Bringing ideas to life with engaging 2D/3D animation and motion graphics.",
      href: "#", // Placeholder link
      image: "/images/videography-bts-03.jpeg", // Use local image
    },
    {
      id: "corporate",
      title: "Corporate Videos",
      description: "Producing professional videos for internal communications, training, and marketing.",
      href: "#", // Placeholder link
      image: "/images/videography-bts-06.jpeg", // Use local image
    },
    {
      id: "music-video",
      title: "Music Videos",
      description: "Collaborating with artists to create visually stunning music videos.",
      href: "#", // Placeholder link
      image: "/images/videography-bts-01.jpeg", // Use local image (reusing for demo)
    },
    {
      id: "social-media",
      title: "Social Media Content",
      description: "Creating short-form video content optimized for social media platforms.",
      href: "#", // Placeholder link
      image: "/images/videography-bts-02.jpeg", // Use local image (reusing for demo)
    },
  ],
};


export default function Home() {
  // Define brands data for BrandsGrid (using local Adobe logo as placeholder)
  // Note: Replace these with actual client/partner logos before launch
  const brands = [
    {
      name: "Client 1",
      logo: "/images/brands/adobe.svg",
    },
    {
      name: "Client 2",
      logo: "/images/brands/adobe.svg",
    },
    {
      name: "Client 3",
      logo: "/images/brands/adobe.svg",
    },
    {
      name: "Client 4",
      logo: "/images/brands/adobe.svg",
    },
    {
      name: "Client 5",
      logo: "/images/brands/adobe.svg",
    },
    {
      name: "Client 6",
      logo: "/images/brands/adobe.svg",
    },
  ];

  // Simplified outer structure, removed grid layout and redundant font style
  return (
    <div className="flex flex-col flex-grow p-8 pb-20 sm:p-20">
      {/* Main content container */}
      <main id="main-content" className="flex flex-col space-y-16 md:space-y-24 items-center sm:items-start w-full"> 
        <div className="container mx-auto w-full">
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 w-full"> {/* Increased top padding for first section */}
             <GridBackground />
                <Spotlight />
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 md:w-28 md:h-28">
            <Image
              src="/images/logos/coalbanks-icon.svg"
              alt="Coalbanks Creative Logo"
              fill
              className="object-contain dark:invert" 
              priority
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Seasoned Storytelling<br />by Coalbanks Creative Inc.
        </h1>
        <p className="mt-4 mb-16 text-base text-neutral-300 max-w-lg text-center mx-auto">
          Bringing your vision to life through expert videography and compelling narratives.
        </p>
      </div>
        </section>

        {/* Services Section */}
        <section className="w-full">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-neutral-800 dark:text-neutral-100">Our Services</h2>
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto">
              Comprehensive video production solutions for all your creative needs
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </section>

        {/* Projects Section */}
        <section className="w-full">
          <Gallery4 {...demoData} /> {/* Use Gallery4 directly with demoData */}
        </section>

        {/* Spline Scene Section */}
        <section className="w-full py-12 md:py-16">
          <SplineSceneBasic />
        </section>
        {/* Removed duplicated InView image grid block */}

        {/* InView Images Grid Section */}
        <section className="w-full">
          <div className="mb-10 md:mb-14 flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl md:text-5xl font-semibold text-neutral-800 dark:text-neutral-100">Behind the Scenes</h2>
              <p className="max-w-lg text-base text-neutral-600 dark:text-neutral-300">
                A glimpse into our production process and creative workflow
              </p>
            </div>
          </div>
          <InViewImagesGrid/>
        </section>
 
        </div> {/* Closing container div */}
      </main>
      {/* SiteFooter is rendered in layout.tsx */}
    </div>
  );
}
