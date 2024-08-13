"use client"
import React, { useEffect } from "react"
import pjson from "@/package.json"

// Application Component || Define Exports
// =================================================================================================
// =================================================================================================
export default function Home() {
  useEffect(() => {
    console.log("==========================================================")
    console.log(`Application-Client || Env: ${process.env.NEXT_PUBLIC_BUILD_ENV!}`)
    console.log(`Application-Client || Version: v${pjson.version}`)
    console.log("==========================================================")
  }, [])
  return (
    <main>
      {pjson.version}
      <br />
      public.vercjames.com coming soon
    </main>
  )
}
