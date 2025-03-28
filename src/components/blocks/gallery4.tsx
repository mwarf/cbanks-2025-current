"use client";

import Image from "next/image"; // Import next/image
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  // Removed CarouselNext, CarouselPrevious imports
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

// Using placeholder images
const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description:
      "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
    href: "https://ui.shadcn.com",
    image: "https://via.placeholder.com/1080x720.png?text=Shadcn/UI",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS: The Utility-First Revolution",
    description:
      "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
    href: "https://tailwindcss.com",
    image: "https://via.placeholder.com/1080x720.png?text=Tailwind+CSS",
  },
  {
    id: "astro",
    title: "Astro: The All-in-One Web Framework",
    description:
      "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
    href: "https://astro.build",
    image: "https://via.placeholder.com/1080x720.png?text=Astro",
  },
  {
    id: "react",
    title: "React: Pioneering Component-Based UI",
    description:
      "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
    href: "https://react.dev",
    image: "https://via.placeholder.com/1080x720.png?text=React",
  },
  {
    id: "nextjs",
    title: "Next.js: The React Framework for Production",
    description:
      "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
    href: "https://nextjs.org",
  image: "https://via.placeholder.com/1080x720.png?text=Next.js",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items, // FIX: Removed default assignment to local 'data'
}: Gallery4Props) => {
  // Handle case where items might not be provided or are empty
  const galleryItems = items && items.length > 0 ? items : [];

  // Restore state for custom buttons and dots
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false); // Re-add
  const [canScrollNext, setCanScrollNext] = useState(false); // Re-add
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev()); // Re-add
      setCanScrollNext(carouselApi.canScrollNext()); // Re-add
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);


  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-10 md:mb-14 flex items-end justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-5xl font-semibold text-neutral-800 dark:text-neutral-100">
              {title}
            </h2>
            <p className="max-w-lg text-base text-neutral-600 dark:text-neutral-300">{description}</p>
          </div>
          {/* Re-add the original custom arrow button div & add positioning/z-index */}
          <div className="hidden shrink-0 gap-2 md:flex relative z-20">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              // Keep className="disabled:pointer-events-auto" removed
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              // Keep className="disabled:pointer-events-auto" removed
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      {/* Remove relative positioning context */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            // Keep opts for breakpoints, etc.
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          {/* Removed complex 2xl margin calculation from CarouselContent */}
          <CarouselContent className="ml-0">
            {galleryItems.map((item) => ( // Use galleryItems instead of items
              <CarouselItem
                key={item.id}
                className="max-w-xs pl-5 lg:max-w-sm" // Replaced max-w-[320px] with max-w-xs, pl-[20px] with pl-5, lg:max-w-[360px] with lg:max-w-sm
              >
                <a
                  href={item.href}
                  target="_blank" // Added target="_blank" for external links
                  rel="noopener noreferrer" // Added rel for security
                  className="group rounded-xl"
                >
                  {/* Adjusted aspect ratio classes for consistency */}
                  <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-xl"> {/* Changed aspect ratio to 9:16 */}
                    {/* Replaced <img> with next/image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill // Use fill to cover the parent div
                      sizes="(max-width: 1024px) 320px, 360px" // Provide sizes for responsive loading
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    {/* Changed text-primary-foreground to text-white and added dark:text-white */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white dark:text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:text-2xl md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-base md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Removed standard arrow buttons */}
        </Carousel>
        {/* Increased dot size, gap, and added padding */}
        {/* TODO: Dot logic needs fixing as carouselApi is removed. Temporarily remove onClick */}
        <div className="mt-8 flex justify-center gap-3 p-2">
          {galleryItems.map((_, index) => ( // FIX: Use 'galleryItems' instead of 'items'
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-colors cursor-pointer ${ // Increased dot size
                currentSlide === index ? "bg-primary" : "bg-primary/20" // currentSlide state is now updated by useEffect
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
