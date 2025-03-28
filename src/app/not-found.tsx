import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 mt-8 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
