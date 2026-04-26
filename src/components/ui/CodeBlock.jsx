import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'

export default function CodeBlock({ code, language = 'js', title }) {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)
  const handleCopy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="ios-card overflow-hidden"
      style={{ boxShadow: hovered ? '0 8px 32px rgba(0,122,255,0.15)' : '0 2px 12px rgba(0,0,0,0.3)' }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 bg-ios-elevated/50">
        <span className="text-[12px] text-ios-secondary font-medium">{title || `${language}`}</span>
        <motion.button onClick={handleCopy} whileTap={{ scale: 0.85 }}
          className="p-1.5 rounded-full hover:bg-ios-blue/20 text-ios-secondary hover:text-ios-blue ios-hover">
          {copied ? <Check size={14} className="text-ios-green" /> : <Copy size={14} />}
        </motion.button>
      </div>
      <div className="p-4 overflow-x-auto bg-ios-bg/80">
        <pre className="font-code text-[13px] leading-relaxed">
          <code className="text-ios-label/80">{code.trim()}</code>
        </pre>
      </div>
    </motion.div>
  )
}
