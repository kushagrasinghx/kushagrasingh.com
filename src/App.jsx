import { useState } from 'react'
import { Mail, Instagram, Linkedin, Github } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="flex items-center justify-between h-18 px-7 md:px-34 backdrop-blur-xl bg-black/50 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="nav-logo text-xl font-medium font-['Clash_Display'] tracking-wide">kushagra singh</div>
        <div className="nav-links hidden md:block">
          <ul className="flex items-center gap-10">
            <li className="cursor-pointer hover:underline transition-all duration-300">Projects</li>
            <li className="cursor-pointer hover:underline transition-all duration-300">Experience</li>
            <li className="cursor-pointer hover:underline transition-all duration-300">Contact</li>
          </ul>
        </div>
      </nav>

      <main className="grid grid-cols-1 md:grid-cols-[minmax(220px,300px)_1fr] min-h-screen bg-[url('/src/assets/background.svg')] bg-no-repeat bg-cover pt-20 px-4 md:px-34 gap-6 md:gap-25 overflow-hidden">
        <div className="left-side">
          <div className="left-side-content flex flex-col justify-start p-5 my-6 md:p-0 pt-10 gap-6 md:gap-10">
            <div className="pfp h-48 w-48 md:h-75 md:w-75 rounded-3xl bg-[url('/src/assets/434588151_755842176647990_4355885289299874595_n.jpg')] bg-cover bg-center"></div>
            <div className="about-txt flex flex-col gap-5">
              <div className="text flex flex-col gap-1">
                <h1 className="text-xl font-medium">Hello, I'm Kushagra! 👋</h1>
                <p>I'm a passionate <strong>frontend developer</strong> and <strong>designer</strong> from India.</p>
                <div className="email text-gray-400 flex items-center gap-2 text-sm">
                  <Mail size={16} />
                  <p>contact@kushagrasingh.com</p>
                </div>
              </div>
              <div className="live-stats">
                <ul className="flex flex-wrap items-center gap-4 md:gap-5 text-sm">
                  <li className="flex items-center gap-2">
                    <Instagram size={16} />
                    <a href="https://instagram.com/kuxhagrasingh" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Linkedin size={16} />
                    <a href="https://linkedin.com/in/kushagra-singh-varanasi" target="_blank" rel="noopener noreferrer" className="hover:underline">Linkedin</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Github size={16} />
                    <a href="https://github.com/kushagrasinghx" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side my-6 flex flex-col gap-6 md:gap-10">
          <div className="right-side-1 bg-white/5 rounded-2xl p-5 md:p-9">
            <div className="right-side-content flex flex-col gap-6 md:gap-10">
              <div className="section1 flex flex-col gap-2">
                <h1 className="text-xl font-medium">Projects</h1>
                <div className="project-item">
                  <p className="text-gray-400 text-justify">Below are some of my featured projects — feel free to check out the rest on my GitHub profile.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-side-2 bg-white/5 rounded-2xl p-5 md:p-9">
            <div className="right-side-content flex flex-col gap-6 md:gap-10">
              <div className="section1 flex flex-col gap-2">
                <h1 className="text-xl font-medium">Experience</h1>
                <div className="experience-item">
                  {/* 
                  <ul className="flex justify-between items-center gap-4 md:gap-10 overflow-x-auto">
                    <li><img src="/src/assets/logos/WpnMEF04Q0IKFyq098hI5VPlVFA.avif" alt="Company Logo" className="h-10 md:h-12 object-contain" /></li>
                    <li><img src="/src/assets/logos/nextfrontwhite.png" alt="Company Logo" className="h-8 md:h-10 object-contain" /></li>
                    <li><img src="/src/assets/logos/someonewhite.png" alt="Company Logo" className="h-8 md:h-10 object-contain" /></li>
                  </ul> 
                  */}
                  <p className="text-gray-400 text-justify">
                    As a front-end developer, UX Designer and Graphic Designer, I've worked with a variety of clients or as an intern to create beautiful and functional websites and designs.
                  </p>
                </div>
              </div>

              <div className="section2 flex flex-col gap-4">
                <h1 className="text-xl font-medium">Education</h1>
                <div className="education-item">
                  <ul className="flex flex-col gap-4">
                    <li>
                      <p className='text-gray-400'>2022 - Present</p>
                      <p>B.Tech in Computer Science and Engineering</p>
                      <p className="text-gray-400">Jaypee University of Engineering and Technology</p>
                    </li>
                    <li>
                      <p className='text-gray-400'>2020 - 2022</p>
                      <p>Higher Secondary Education</p>
                      <p className="text-gray-400">Delhi Public School, Varanasi</p>
                    </li>
                    <li>
                      <p className='text-gray-400'>2012 - 2020</p>
                      <p>High School Education</p>
                      <p className="text-gray-400">Delhi Public School, Varanasi</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="right-side-3 bg-white/5 rounded-2xl p-5 md:p-9">
            <div className="right-side-content flex flex-col gap-6 md:gap-10">
              <div className="section1 flex flex-col gap-2">
                <h1 className="text-xl font-medium">Contact</h1>
                <div className="contact-item flex flex-col gap-3">
                  <p className="text-gray-400 text-justify">
                    Feel free to contact me for any work or collaboration.
                  </p>
                  <p>
                    You can contact me on my email or through my social media handles.
                  </p>
                  <p className='text-gray-400'>contact@kushagrasingh.com</p>
                  <div className="contact-links">
                    <ul className="flex flex-wrap items-center gap-4 md:gap-5 text-sm text-gray-400">
                      <li className="flex items-center gap-2">
                        <Instagram size={16} />
                        <a href="https://instagram.com/kuxhagrasingh" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <Linkedin size={16} />
                        <a href="https://linkedin.com/in/kushagra-singh-varanasi" target="_blank" rel="noopener noreferrer" className="hover:underline">Linkedin</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <Github size={16} />
                        <a href="https://github.com/kushagrasinghx" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
