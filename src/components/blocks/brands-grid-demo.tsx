"use client";

import { BrandsGrid } from "@/components/ui/brands-grid"; // Adjusted import path

const brands = [
  {
    name: "loops",
    logo: "https://assets.rapidui.dev/brands/loops.svg",
  },
  {
    name: "pwc",
    logo: "https://assets.rapidui.dev/brands/pwc.svg",
  },
  {
    name: "resend",
    logo: "https://assets.rapidui.dev/brands/resend.svg",
  },
  {
    name: "udio",
    logo: "https://assets.rapidui.dev/brands/udio.svg",
  },
  {
    name: "krea",
    logo: "https://assets.rapidui.dev/brands/krea.svg",
  },
  {
    name: "gopuff",
    logo: "https://assets.rapidui.dev/brands/gopuff.svg",
  },
];

export function BrandsGridDemo() {
  return (
    <BrandsGrid
      brands={brands}
      className="min-w-[800px]"
      title="Trusted and loved by fast-growing companies worldwide"
      // Optionally, you can override the default values:
      // columns={{
      //   default: 2,
      //   md: 3,
      //   lg: 6
      // }}
      // maxWidth={{
      //   container: "max-w-screen-xl",
      //   grid: {
      //     default: "max-w-xs",
      //     md: "max-w-lg",
      //     lg: "max-w-3xl"
      //   }
      // }}
    />
  );
}
