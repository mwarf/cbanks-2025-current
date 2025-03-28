import { cn } from "@/lib/utils"; // Import cn utility
import { Footerdemo } from "@/components/ui/footer-section"; // Use alias path

interface SiteFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function SiteFooter({ className, ...props }: SiteFooterProps) { // Accept className and other div props
  return (
    <div className={cn("block", className)} {...props}> {/* Apply className */}
      <Footerdemo />
    </div>
  );
}

export { SiteFooter }; // Export renamed component
