"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children?: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * Error Boundary component to catch JavaScript errors anywhere in child component tree
 * and display a fallback UI instead of the component tree that crashed.
 * 
 * Usage:
 * ```jsx
 * <ErrorBoundary fallback={<p>Something went wrong</p>}>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error boundary caught an error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-8 text-center">
          <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            We're sorry, but we encountered an error.
          </p>
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-auto max-w-full">
            <pre>{this.state.error?.message}</pre>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Reload page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }
