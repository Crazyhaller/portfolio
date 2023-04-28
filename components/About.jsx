/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#2a9b82]">
            About
          </p>
          <h2 className="py-4">Get to know me!</h2>
          <p className="py-2 text-gray-800">
            Let me be your go to developer :)
          </p>
          <p className="py-2 text-gray-800">
            Hello and welcome to my portfolio! My name is Suvigya Mishra and I
            am a beginner MERN stack developer with over 1.5 years of
            experience. I am passionate about developing high-quality web
            applications and have worked on multiple projects to improve my
            skills and gain practical experience. My technical skills include
            proficiency in HTML, CSS, TailwindCSS, JavaScript, React.js,
            Next.js, Node.js, Express.js and MongoDB. I have a strong foundation
            in web development concepts and have also knowledge of Git, GitHub
            and version control. I enjoy learning new technologies and keeping
            up with the latest trends in the industry.
          </p>
          <p className="py-2 text-gray-800">
            During my journey as a developer, I have worked on several projects
            ranging from simple web applications. I believe that my attention to
            detail, problem-solving skills, and ability to work collaboratively
            make me a valuable asset to any team. Thank you for taking the time
            to visit my portfolio. Please feel free to take a look at my
            projects and reach out if you have any questions or opportunities to
            work together.
          </p>
          <p className="py-2 text-gray-800 underline cursor-pointer">
            Check out some of the projects I have worked in!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  )
}

export default About
