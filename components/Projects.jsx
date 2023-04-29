/* eslint-disable react/no-unescaped-entities */
import ProjectItem from './ProjectItem'
import housemarketplace from '../public/assets/projects/housemarketplace.png'
import githubfinder from '../public/assets/projects/githubfinder.png'
import todolist from '../public/assets/projects/todolist.png'
import next13 from '../public/assets/projects/next13.png'
import spacex from '../public/assets/projects/spacex.png'
import travel from '../public/assets/projects/travel.png'

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#2a9b82]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="House Marketplace"
            backgroundImg={housemarketplace}
            projectUrl="/housemarketplace"
            technology="React.js, Firebase"
          />
          <ProjectItem
            title="GitHub Finder"
            backgroundImg={githubfinder}
            projectUrl="/housemarketplace"
            technology="React.js, GitHub API"
          />
          <ProjectItem
            title="To Do List"
            backgroundImg={todolist}
            projectUrl="/housemarketplace"
            technology="Node.js, Express.js, MongoDB"
          />
          <ProjectItem
            title="SpaceX Clone"
            backgroundImg={spacex}
            projectUrl="/housemarketplace"
            technology="HTML, CSS, JavaScript"
          />
          <ProjectItem
            title="Travel Website"
            backgroundImg={travel}
            projectUrl="/housemarketplace"
            technology="HTML, CSS, JavaScript"
          />
          <ProjectItem
            title="Next13 Project"
            backgroundImg={next13}
            projectUrl="/housemarketplace"
            technology="Next.js v13"
          />
        </div>
      </div>
    </div>
  )
}
export default Projects
