"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{
    text: string
    type: "success" | "error" | null
  }>({ text: "", type: null })

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset status
    setMessage({ text: "", type: null })
    
    // Validate email
    if (!email) {
      setMessage({ text: "Please enter your email address", type: "error" })
      return
    }
    
    if (!validateEmail(email)) {
      setMessage({ text: "Please enter a valid email address", type: "error" })
      return
    }
    
    // Show loading state
    setIsSubmitting(true)
    
    try {
      // In production, replace with actual API call
      // e.g., const response = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
      
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 800))
      
      // Success feedback
      setMessage({ text: "Thank you for subscribing!", type: "success" })
      setEmail("")
    } catch (error) {
      // Error feedback
      setMessage({ text: "Something went wrong. Please try again.", type: "error" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Enter your email"
        className="pr-12 backdrop-blur-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email for newsletter"
        disabled={isSubmitting}
      />
      <Button
        type="submit"
        size="icon"
        className={`absolute right-1 top-1 h-8 w-8 rounded-full ${
          isSubmitting ? "bg-gray-400" : "bg-primary"
        } text-primary-foreground transition-all ${
          isSubmitting ? "" : "hover:scale-105"
        }`}
        disabled={isSubmitting}
        aria-label="Subscribe to newsletter"
      >
        <Send className={`h-4 w-4 ${isSubmitting ? "animate-pulse" : ""}`} />
        <span className="sr-only">Subscribe</span>
      </Button>
      
      {message.text && (
        <p
          className={`mt-2 text-sm ${
            message.type === "error" ? "text-red-500" : "text-green-500"
          }`}
          role={message.type === "error" ? "alert" : "status"}
        >
          {message.text}
        </p>
      )}
    </form>
  )
}
