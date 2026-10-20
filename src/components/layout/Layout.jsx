import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="relative flex h-screen w-full bg-background overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <Sidebar
        isMobileOpen={sidebarOpen}
        onMobileClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 relative">
        <TopNav onMenuToggle={() => setSidebarOpen((p) => !p)} />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
