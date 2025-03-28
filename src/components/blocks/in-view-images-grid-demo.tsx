"use client";
import Image from "next/image"; // Import Next.js Image component
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
// Removed cn import as it's not needed for the simpler structure

// Simple array of image paths (same as the first successful edit)
const imagePaths = [
  '/images/bts/bts-photo-03.jpg',
  '/images/bts/bts-photo-07.jpg',
  '/images/bts/bts-photo-11.jpg',
  '/images/bts/bts-photo-15.jpg',
  '/images/bts/bts-photo-19.jpg',
  '/images/bts/bts-photo-22.jpg',
  '/images/bts/bts-photo-25.jpg',
  '/images/bts/bts-photo-28.jpg',
  '/images/bts/bts-photo-31.jpg',
];

function InViewImagesGrid() {
  return (
    <InView
      viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.09 },
        },
      }}
    >
      {/* Reverted to original CSS Columns layout */}
      <div className="columns-2 gap-4 px-8 sm:columns-3">
        {imagePaths.map((imgSrc, index) => {
          // Extract filename for alt text
          const filename = imgSrc.split('/').pop() || `bts-image-${index}`;

          // Classes for the container: relative for Image fill, mb-4 for spacing, aspect ratio for consistent height before load
          const itemClasses = "relative mb-4 aspect-[3/4] overflow-hidden rounded-lg";

          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
              }}
              key={index}
              className={itemClasses} // Apply classes
            >
              <Image
                src={imgSrc}
                alt={`Behind the scenes photo: ${filename}`} // Updated alt text
                fill // Use fill to cover the container
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" // Responsive sizes
                className="object-cover" // Use object-cover for better filling
                priority={index < 4} // Prioritize loading first few images
              />
            </motion.div>
          );
        })}
      </div>
    </InView>
  );
}

// Exporting directly for easier import in page.tsx
export default InViewImagesGrid;
