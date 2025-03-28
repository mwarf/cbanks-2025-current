import { cn } from "@/lib/utils";
import {
  IconCamera,
  IconMessageCircle,
  IconBuildingStore,
  IconEdit,
  IconBulb,
  IconMovie,
  IconCalendarEvent,
  IconPresentation,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Professional Videography",
      description:
        "Capturing your vision with cutting-edge equipment and cinematic techniques for stunning visual results.",
      icon: <IconCamera />,
    },
    {
      title: "Brand Storytelling",
      description:
        "Crafting compelling narratives that connect audiences with your brand's unique values and mission.",
      icon: <IconMessageCircle />,
    },
    {
      title: "Commercial Production",
      description:
        "Creating high-impact commercials that showcase your products and services with professional polish.",
      icon: <IconBuildingStore />,
    },
    {
      title: "Post-Production Excellence",
      description: 
        "Transforming raw footage into polished final products with expert editing, color grading, and effects.",
      icon: <IconEdit />,
    },
    {
      title: "Creative Direction",
      description:
        "Providing artistic vision and guidance to ensure your project achieves its full creative potential.",
      icon: <IconBulb />,
    },
    {
      title: "Motion Graphics & Animation",
      description:
        "Enhancing your content with dynamic motion graphics and engaging animations that bring concepts to life.",
      icon: <IconPresentation />,
    },
    {
      title: "Documentary Filmmaking",
      description:
        "Telling authentic stories through carefully crafted documentary techniques and journalistic integrity.",
      icon: <IconMovie />,
    },
    {
      title: "Event Coverage",
      description:
        "Capturing the key moments of your special events with multi-camera setups and comprehensive coverage.",
      icon: <IconCalendarEvent />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-xl font-semibold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="hidden md:block text-base text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
