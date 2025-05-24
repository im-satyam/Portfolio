import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Project from './components/Project'
import Skills from './components/Skills'
import "./index.css"
function App() {
  return (
    <>
  <Header/>
    <div id="home">
      <Intro/>
   </div>
    <div id="about">
      <About/>
   </div>
      
    <div id="skills">
     <Skills/>
   </div>
      
          <div id="projects">
     
      <Project/>
   </div>
          <div id="contact">
     
      <Contact/>
   </div>
      <Footer/>
    </>
  )
}

export default App
