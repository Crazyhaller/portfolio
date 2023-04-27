import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

/* eslint-disable react/no-unescaped-entities */
const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S WORK ON SOMETHING TOGETHER!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#05BFDB]">Suvigya</span>
          </h1>
          <h1 className="py-2 text-gray-700">A MERN Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a Full MERN Stack Developer with a passion for building web
            apps and websites. I have a good knowledge of HTML, CSS, JavaScript,
            React, Node, Express and MongoDB. I am a quick learner and a team
            player. I am always ready to learn new technologies and implement
            them in my projects.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main