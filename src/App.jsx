import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Overview from '@/pages/Overview'
import AboutMe from '@/pages/AboutMe'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'
import Experience from '@/pages/Experience'
import Contact from '@/pages/Contact'
import ProjectDetail from '@/pages/ProjectDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

