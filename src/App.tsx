import { useState, useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Project from './components/Project'
import Skills from './components/Skills'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import Achievements from './components/Achievements'
import "./index.css"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <Header />
      <div id="home">
        <Intro />
      </div>
      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="achievements">
        <Achievements />
      </div>

      <div id="projects">

        <Project />
      </div>
      <div id="contact">

        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
