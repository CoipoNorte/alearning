import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const allTopicsOrdered = [
  { id: 'al-intro', label: 'Qué son algoritmos', tab: 'algorithms' },
  { id: 'al-complexity', label: 'Complejidad Big O', tab: 'algorithms' },
  { id: 'al-search', label: 'Búsqueda', tab: 'algorithms' },
  { id: 'al-sort', label: 'Ordenamiento', tab: 'algorithms' },
  { id: 'al-recursion', label: 'Recursividad', tab: 'algorithms' },
  { id: 'al-structures', label: 'Estructuras de datos', tab: 'algorithms' },
  { id: 'al-dynamic', label: 'Programación dinámica', tab: 'algorithms' },
  { id: 'al-tips', label: 'Tips para entrevistas', tab: 'algorithms' },
  { id: 'ml-intro', label: 'Qué es ML', tab: 'ml' },
  { id: 'ml-types', label: 'Tipos de aprendizaje', tab: 'ml' },
  { id: 'ml-regression', label: 'Regresión', tab: 'ml' },
  { id: 'ml-classification', label: 'Clasificación', tab: 'ml' },
  { id: 'ml-clustering', label: 'Clustering', tab: 'ml' },
  { id: 'ml-tools', label: 'Herramientas', tab: 'ml' },
  { id: 'dl-intro', label: 'Qué es Deep Learning', tab: 'dl' },
  { id: 'dl-neural', label: 'Redes neuronales', tab: 'dl' },
  { id: 'dl-cnn', label: 'CNN (imágenes)', tab: 'dl' },
  { id: 'dl-rnn', label: 'RNN (secuencias)', tab: 'dl' },
  { id: 'dl-transformers', label: 'Transformers & LLMs', tab: 'dl' },
  { id: 'dl-practice', label: 'Práctica con Python', tab: 'dl' },
]

const tabColors = {
  algorithms: 'border-algo-green/30 text-algo-green',
  ml: 'border-ml-purple/30 text-ml-purple',
  dl: 'border-dl-pink/30 text-dl-pink',
}

export default function TopicNav({ currentTopic, onNavigate, onTabChange }) {
  const idx = allTopicsOrdered.findIndex(t => t.id === currentTopic)
  if (idx === -1) return null
  const prev = idx > 0 ? allTopicsOrdered[idx - 1] : null
  const next = idx < allTopicsOrdered.length - 1 ? allTopicsOrdered[idx + 1] : null
  const progress = Math.round(((idx + 1) / allTopicsOrdered.length) * 100)

  const handleNav = (topic) => {
    if (topic.tab !== allTopicsOrdered[idx].tab) onTabChange(topic.tab)
    onNavigate(topic.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="mt-10 pt-6 border-t border-ios-separator/20">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[11px] text-ios-tertiary font-code">{idx + 1}/{allTopicsOrdered.length}</span>
        <div className="flex-1 h-1 bg-ios-elevated rounded-full overflow-hidden">
          <motion.div className="h-full rounded-full bg-ios-blue"
            initial={{ width: 0 }} animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }} />
        </div>
        <span className="text-[11px] text-ios-blue font-semibold">{progress}%</span>
      </div>
      <div className="flex justify-between gap-3">
        {prev ? (
          <motion.button whileHover={{ x: -3 }} whileTap={{ scale: 0.97 }} onClick={() => handleNav(prev)}
            className={`flex items-center gap-2 flex-1 text-left px-4 py-3 rounded-2xl ios-card border ${tabColors[prev.tab]} text-xs ios-hover`}>
            <ChevronLeft size={14} />
            <div><div className="text-[10px] text-ios-tertiary">anterior</div><div className="font-semibold">{prev.label}</div></div>
          </motion.button>
        ) : <div className="flex-1" />}
        {next ? (
          <motion.button whileHover={{ x: 3 }} whileTap={{ scale: 0.97 }} onClick={() => handleNav(next)}
            className={`flex items-center justify-end gap-2 flex-1 text-right px-4 py-3 rounded-2xl ios-card border ${tabColors[next.tab]} text-xs ios-hover`}>
            <div><div className="text-[10px] text-ios-tertiary">siguiente</div><div className="font-semibold">{next.label}</div></div>
            <ChevronRight size={14} />
          </motion.button>
        ) : (
          <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}
            className="flex-1 ios-card rounded-2xl p-3 text-center border border-ios-green/30">
            <span className="text-ios-green text-xs font-semibold">🧠 ¡Curso completado!</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
