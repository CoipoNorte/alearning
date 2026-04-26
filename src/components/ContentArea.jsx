import { motion, AnimatePresence } from 'framer-motion'
import { algoTopics } from '../data/algoTopics'
import { mlTopics } from '../data/mlTopics'
import { dlTopics } from '../data/dlTopics'
import TopicNav from './ui/TopicNav'

const allTopics = { ...algoTopics, ...mlTopics, ...dlTopics }

export default function ContentArea({ activeTab, activeTopic, setActiveTopic, setActiveTab, sidebarCollapsed }) {
  const TopicComponent = allTopics[activeTopic]
  const info = {
    algorithms: { icon: '🧮', name: 'Algoritmos', desc: 'La lógica detrás del código', color: 'text-algo-green' },
    ml: { icon: '🤖', name: 'Machine Learning', desc: 'Máquinas que aprenden', color: 'text-ml-purple' },
    dl: { icon: '🧠', name: 'Deep Learning', desc: 'Redes neuronales profundas', color: 'text-dl-pink' },
  }
  const t = info[activeTab]

  return (
    <div className={`pt-12 min-h-screen transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-12' : 'lg:pl-[220px]'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {TopicComponent ? (
            <motion.div key={activeTopic}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="ios-card p-6" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
              <TopicComponent />
              <TopicNav currentTopic={activeTopic} onNavigate={setActiveTopic} onTabChange={setActiveTab} />
            </motion.div>
          ) : (
            <motion.div key="welcome" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="ios-card p-16 text-center" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-6">{t.icon}</motion.div>
              <h2 className={`text-3xl font-extrabold ${t.color} mb-2`}>{t.name}</h2>
              <p className="text-ios-secondary mb-8">{t.desc}</p>
              <div className="ios-surface p-4 max-w-sm mx-auto text-left text-[13px] text-ios-tertiary">
                <p>👈 Selecciona un tema del sidebar</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
