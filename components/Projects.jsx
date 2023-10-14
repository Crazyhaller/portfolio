/* eslint-disable react/no-unescaped-entities */
import ProjectItem from './ProjectItem'
import housemarketplace from '../public/assets/projects/housemarketplace.png'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
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
        </div>
      </div>
    </div>
  )
}
export default Projects
