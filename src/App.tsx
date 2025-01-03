import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import HomePage from './components/HomePage'
import LearnPage from './components/LearnPage'
import ProjectsPage from './components/ProjectsPage'
import LibrariesPage from './components/LibrariesPage'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/libraries" element={<LibrariesPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
