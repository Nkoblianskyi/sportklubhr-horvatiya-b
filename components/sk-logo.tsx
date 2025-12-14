import Link from "next/link"

interface SkLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "light" | "dark"
}

export function SkLogo({ className = "", size = "md", variant = "dark" }: SkLogoProps) {
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl"

  const primaryColor = variant === "light" ? "text-white" : "text-sk-navy"
  const accentColor = variant === "light" ? "text-sk-red" : "text-sk-red"

  return (
    <Link href="/" className={`flex items-center gap-2 hover:opacity-90 transition-opacity ${className}`}>
      <div className="relative">
        <div className="font-display leading-none">
          <span className={`${textSize} ${primaryColor} font-bold tracking-tight`}>SPORT</span>
          <span className={`${textSize} ${accentColor} font-bold tracking-tight`}>KLUB</span>
          <span className={`${textSize} ${primaryColor} font-bold tracking-tight`}>HR</span>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sk-red"></div>
      </div>
    </Link>
  )
}
