import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Info from './components/Info.jsx'
import Header from './components/Header.jsx'
import Summary from './components/Summary.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Languages from './components/Languages.jsx'
import Skills from './components/Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Info />
    <Summary />
    <Skills />
    <Education />
    <Experience />
    <Languages />
  </StrictMode>,
)
