import { useState } from 'react'
import { motion } from 'framer-motion'

export default function IosCard({ title, icon, variant = 'default', children, delay = 0 }) {
  const [hovered, setHovered] = useState(false)
  const colors = {
    default: { border: 'transparent', glow: 'rgba(255,255,255,0.05)' },
    blue: { border: 'rgba(0,122,255,0.3)', glow: 'rgba(0,122,255,0.1)' },
    green: { border: 'rgba(52,199,89,0.3)', glow: 'rgba(52,199,89,0.1)' },
    purple: { border: 'rgba(175,82,222,0.3)', glow: 'rgba(175,82,222,0.1)' },
    pink: { border: 'rgba(255,45,85,0.3)', glow: 'rgba(255,45,85,0.1)' },
    orange: { border: 'rgba(255,149,0,0.3)', glow: 'rgba(255,149,0,0.1)' },
    red: { border: 'rgba(255,59,48,0.3)', glow: 'rgba(255,59,48,0.1)' },
    teal: { border: 'rgba(90,200,250,0.3)', glow: 'rgba(90,200,250,0.1)' },
    yellow: { border: 'rgba(255,204,0,0.3)', glow: 'rgba(255,204,0,0.1)' },
  }
  const titleMap = {
    default: 'text-ios-label', blue: 'text-ios-blue', green: 'text-ios-green',
    purple: 'text-ios-purple', pink: 'text-ios-pink', orange: 'text-ios-orange',
    red: 'text-ios-red', teal: 'text-ios-teal', yellow: 'text-ios-yellow',
  }
  const c = colors[variant] || colors.default

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="ios-card p-5 cursor-default"
      style={{
        border: `1px solid ${hovered ? c.border : 'rgba(56,56,58,0.6)'}`,
        boxShadow: hovered ? `0 12px 40px ${c.glow}` : '0 2px 12px rgba(0,0,0,0.2)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
    >
      {title && (
        <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-ios-separator/20">
          {icon && <motion.span whileHover={{ rotate: 15, scale: 1.3 }} className="text-lg">{icon}</motion.span>}
          <h4 className={`text-[14px] font-semibold ${titleMap[variant]}`}>{title}</h4>
        </div>
      )}
      <div className="text-[13px] text-ios-secondary leading-relaxed">{children}</div>
    </motion.div>
  )
}
