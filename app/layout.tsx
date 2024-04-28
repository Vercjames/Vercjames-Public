import React from "react"
import type { Metadata } from "next"
import "./globals.scss"

// Application Component || Define Metadata
// =================================================================================================
// =================================================================================================
export const metadata: Metadata = {
  title: "Vercjames",
  description: "Vercjames personal portfolio",
  keywords: "Vercjames personal portfolio, Full-Stack Development, Responsive Web Design, JavaScript Expert, User Experience Design, HTML5, CSS3, Frontend Frameworks, React, Vue.js, Backend Technologies, Node.js, Django, API Integration, Agile Methodologies, Web Performance, Cross-Browser Compatibility, Mobile-First, Accessibility, Cloud Services, AWS, Azure, Git, GitHub, CI/CD, Problem Solving, Creative Web Solutions, Project Management, Digital Transformation",
  authors: [{ name: "Vercjames", url: "https://vercjames.com" }],
}

// Application Component || Define Exports
// =================================================================================================
// =================================================================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
