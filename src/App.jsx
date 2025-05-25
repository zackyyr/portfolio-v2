import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Education from './components/Education'
import Skill from './components/Skill'
import Project from './components/Project'
import CTA from './components/CTA'

function App() {
  return <>
    <Header/>
    <main>
      <Hero/>
      <About />
      <Work />
      <Education />
      <Skill />
      <Project />
      <CTA />
    </main>
  </>
}

export default App
