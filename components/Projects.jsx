/* eslint-disable react/no-unescaped-entities */
import ProjectItem from './ProjectItem'
import housemarketplace from '../public/assets/projects/housemarketplace.png'
import githubfinder from '../public/assets/projects/githubfinder.jpeg'
import todolist from '../public/assets/projects/todolist.jpeg'
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
          />
          <ProjectItem
            title="GitHub Finder"
            backgroundImg={githubfinder}
            projectUrl="/housemarketplace"
          />
          <ProjectItem
            title="To Do List"
            backgroundImg={todolist}
            projectUrl="/housemarketplace"
          />
          <ProjectItem
            title="SpaceX Clone"
            backgroundImg={spacex}
            projectUrl="/housemarketplace"
          />
          <ProjectItem
            title="Travel Website"
            backgroundImg={travel}
            projectUrl="/housemarketplace"
          />
          <ProjectItem
            title="Next13 Courses"
            backgroundImg={next13}
            projectUrl="/housemarketplace"
          />
        </div>
      </div>
    </div>
  )
}
export default Projects
