import Link from 'next/link'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

/* eslint-disable react/no-unescaped-entities */
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-800">
            LET'S WORK ON SOMETHING TOGETHER!
          </p>
          <h1 className="py-4 text-gray-800">
            Hi, I'm <span className="text-[#2a9b82]">Suvigya</span>
          </h1>
          <h1 className="py-2 text-gray-800">
            A MERN Stack | Next.js Developer
          </h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            I am a Full MERN Stack Developer with a passion for building web
            apps and websites. You can check out some of my projects below and
            visit the live link or the code for it. I am always ready to learn
            new technologies and implement them in my projects. You can contact
            me on LinkedIn or mail me at suvigyamadrid@gmail.com.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              legacyBehavior
              href="https://www.linkedin.com/in/suvigyamishra/"
            >
              <a target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
            </Link>
            <Link legacyBehavior href="https://github.com/Crazyhaller">
              <a target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
            </Link>
            <Link
              legacyBehavior
              href="https://drive.google.com/drive/folders/1g88hKtSEJAtDEF0jOq_IMstDFf5Vu3nA?usp=sharing"
            >
              <a target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
