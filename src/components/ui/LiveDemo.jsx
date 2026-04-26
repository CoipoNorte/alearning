import { useState } from 'react'
import { motion } from 'framer-motion'

export default function LiveDemo({ title, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.01 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="ios-card overflow-hidden"
      style={{ boxShadow: hovered ? '0 8px 32px rgba(52,199,89,0.12)' : '0 2px 12px rgba(0,0,0,0.3)' }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-ios-elevated/50">
        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-ios-green" />
        <span className="text-[12px] text-ios-secondary font-medium">{title || 'Output'}</span>
      </div>
      <div className="p-5">{children}</div>
    </motion.div>
  )
}
