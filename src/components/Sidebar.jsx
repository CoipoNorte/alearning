import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const topicsByTab = {
  algorithms: [
    { id: 'al-intro', label: 'Qué son algoritmos', icon: '📖' },
    { id: 'al-complexity', label: 'Big O', icon: '📊' },
    { id: 'al-search', label: 'Búsqueda', icon: '🔍' },
    { id: 'al-sort', label: 'Ordenamiento', icon: '📶' },
    { id: 'al-recursion', label: 'Recursividad', icon: '🔄' },
    { id: 'al-structures', label: 'Estructuras datos', icon: '🏗️' },
    { id: 'al-dynamic', label: 'Prog. dinámica', icon: '⚡' },
    { id: 'al-tips', label: 'Tips entrevistas', icon: '💡' },
  ],
  ml: [
    { id: 'ml-intro', label: 'Qué es ML', icon: '📖' },
    { id: 'ml-types', label: 'Tipos aprendizaje', icon: '📋' },
    { id: 'ml-regression', label: 'Regresión', icon: '📈' },
    { id: 'ml-classification', label: 'Clasificación', icon: '🏷️' },
    { id: 'ml-clustering', label: 'Clustering', icon: '🔵' },
    { id: 'ml-tools', label: 'Herramientas', icon: '🧰' },
  ],
  dl: [
    { id: 'dl-intro', label: 'Qué es DL', icon: '📖' },
    { id: 'dl-neural', label: 'Redes neuronales', icon: '🕸️' },
    { id: 'dl-cnn', label: 'CNN (imágenes)', icon: '🖼️' },
    { id: 'dl-rnn', label: 'RNN (secuencias)', icon: '📝' },
    { id: 'dl-transformers', label: 'Transformers', icon: '🤖' },
    { id: 'dl-practice', label: 'Práctica Python', icon: '🐍' },
  ],
}

const tabActive = {
  algorithms: 'text-algo-green bg-algo-green/15',
  ml: 'text-ml-purple bg-ml-purple/15',
  dl: 'text-dl-pink bg-dl-pink/15',
}
const tabLabel = { algorithms: '🧮 Algoritmos', ml: '🤖 ML', dl: '🧠 Deep Learning' }

export default function Sidebar({ activeTab, activeTopic, setActiveTopic, collapsed, setCollapsed }) {
  const topics = topicsByTab[activeTab] || []
  const isMobile = () => window.innerWidth < 1024
  const handleSelect = (id) => { setActiveTopic(id); if (isMobile()) setCollapsed(true) }

  return (
    <>
      <AnimatePresence>
        {!collapsed && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setCollapsed(true)} />}
      </AnimatePresence>
      <motion.aside animate={{ width: collapsed ? (window.innerWidth >= 1024 ? 48 : 0) : 220 }}
        transition={{ duration: 0.3 }}
        className="fixed top-12 left-0 bottom-0 z-40 ios-glass border-r border-ios-separator/10 overflow-hidden flex flex-col">
        {!collapsed && (
          <div className="px-4 py-3">
            <p className="text-[11px] text-ios-tertiary font-semibold uppercase tracking-widest">{tabLabel[activeTab]}</p>
          </div>
        )}
        <div className="flex-1 overflow-y-auto">
          {!collapsed && topics.map((topic, i) => (
            <motion.button key={topic.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(topic.id)}
              className={`w-full text-left px-4 py-2.5 flex items-center gap-2.5 text-[13px] font-medium ios-hover ${
                activeTopic === topic.id ? `${tabActive[activeTab]} rounded-xl mx-1` : 'text-ios-secondary hover:text-ios-label'
              }`}>
              <span className="text-sm">{topic.icon}</span>
              <span className="truncate">{topic.label}</span>
            </motion.button>
          ))}
          {collapsed && topics.map(topic => (
            <button key={topic.id}
              onClick={() => { setActiveTopic(topic.id); if (!isMobile()) setCollapsed(false) }}
              className={`hidden lg:block w-full py-2.5 text-center text-sm ios-hover ${
                activeTopic === topic.id ? tabActive[activeTab] : 'text-ios-tertiary hover:text-ios-secondary'
              }`} title={topic.label}>{topic.icon}</button>
          ))}
        </div>
        <button onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center py-3 border-t border-ios-separator/10 text-ios-tertiary hover:text-ios-blue ios-hover">
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </motion.aside>
    </>
  )
}
