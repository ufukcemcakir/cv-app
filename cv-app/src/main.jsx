import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Info from './components/Info.jsx'
import Summary from './components/Summary.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Languages from './components/Languages.jsx'
import Skills from './components/Skills.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <Header name={'Ahmet Kaya'} />
    <div className='app'>
    <Info />
    <Summary />
    <Skills />
    <Education />
    <Experience />
    <Languages />
    </div>
    </div>
  </StrictMode>,
)
