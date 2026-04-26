import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

const tabs = [
  { id: 'algorithms', label: 'Algoritmos', icon: '🧮', color: 'text-algo-green bg-algo-green/15' },
  { id: 'ml', label: 'Machine Learning', icon: '🤖', color: 'text-ml-purple bg-ml-purple/15' },
  { id: 'dl', label: 'Deep Learning', icon: '🧠', color: 'text-dl-pink bg-dl-pink/15' },
]

export default function TopNav({ activeTab, setActiveTab, onToggleSidebar }) {
  return (
    <motion.nav initial={{ y: -60 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 h-12 ios-glass border-b border-ios-separator/10">
      <div className="flex items-center h-full px-4">
        <motion.button whileTap={{ scale: 0.9 }} onClick={onToggleSidebar}
          className="lg:hidden p-1.5 mr-3 text-ios-secondary hover:text-ios-blue ios-hover">
          <Menu size={18} />
        </motion.button>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 mr-6">
          <span className="text-xl">🧠</span>
          <span className="font-bold text-ios-blue hidden sm:inline">alearning</span>
        </motion.div>
        <div className="flex items-center gap-1 bg-ios-elevated/50 rounded-full p-0.5">
          {tabs.map(tab => (
            <motion.button key={tab.id} whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold ios-hover ${
                activeTab === tab.id ? tab.color : 'text-ios-tertiary hover:text-ios-secondary'
              }`}>
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
