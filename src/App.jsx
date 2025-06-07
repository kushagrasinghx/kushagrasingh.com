import { useState } from 'react'
import { Mail } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='flex items-center justify-between h-18 px-34 backdrop-blur-xl bg-black/50 shadow-lg fixed top-0 left-0 right-0 z-50'>
        <div className="nav-logo text-xl font-medium font-['Clash_Display'] tracking-wide">kushagra singh</div>
        <div className="nav-links">
          <ul className='flex items-center gap-10'>
            <li className='cursor-pointer hover:underline transition-all duration-300'>About</li>
            <li className='cursor-pointer hover:underline transition-all duration-300'>Projects</li>
            <li className='cursor-pointer hover:underline transition-all duration-300'>Contact</li>
          </ul>
        </div>
      </nav>
      <main className='grid grid-cols-2 min-h-screen bg-[url("/src/assets/background.svg")] bg-no-repeat bg-cover pt-18 px-34'>
        <div className="left-side">
          <div className="left-side-content flex flex-col justify-center gap-10 py-15 h-full">
            <div className="pfp h-75 w-75 rounded-3xl bg-[url('/src/assets/434588151_755842176647990_4355885289299874595_n.jpg')] bg-cover bg-center"></div>
            <div className="about-txt flex flex-col gap-5">
              <div className="text flex flex-col gap-1">
                <h1 className='text-xl font-medium'>Hello, I'm Kushagra! 👋</h1>
                <p>I'm a passionate frontend developer and designer from India.</p>
                <div className="email text-gray-400 flex items-center gap-2"><Mail size={16}/> <p>contact@kushagrasingh.com</p></div>
              </div>
              <div className="live-stats">
                <ul className='flex items-center gap-5'>
                  <li className='flex items-center gap-2'><Instagram size={16}/> <a href="https://instagram.com/kuxhagrasingh" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                  <li className='flex items-center gap-2'><Linkedin size={16}/> <a href="https://linkedin.com/in/kushagra-singh-varanasi" target="_blank" rel="noopener noreferrer" className="hover:underline">Linkedin</a></li>
                  <li className='flex items-center gap-2'><Github size={16}/> <a href="https://github.com/kushagrasinghx" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side"></div>
      </main>
    </>
  )
}

export default App
