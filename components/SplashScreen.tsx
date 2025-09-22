"use client"

import { useEffect, useState } from "react"
import { Brain } from "lucide-react"
import { motion } from "framer-motion"

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000) // visible for 3s
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-background text-foreground z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8, ease: "easeInOut" }}
    >
      {/* Glowing Brain Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative"
      >
        <Brain size={90} className="text-primary drop-shadow-[0_0_20px_rgba(234,88,12,0.8)]" />
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
      </motion.div>

      {/* Typing Effect for CLARIO */}
      <motion.h1
        className="mt-6 text-4xl font-extrabold tracking-widest"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        style={{ overflow: "hidden", whiteSpace: "nowrap", borderRight: "3px solid #ea580c" }}
      >
        CLARIO
      </motion.h1>

      {/* Footer */}
      <motion.p
        className="absolute bottom-8 text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        🚀 Developed by <span className="text-primary font-semibold">Ananya , Jyoti, Biswajit, Romiya</span>
      </motion.p>
    </motion.div>
  )
}
