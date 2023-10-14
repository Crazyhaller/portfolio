/* eslint-disable react/no-unescaped-entities */
import ProjectItem from './ProjectItem'
import housemarketplace from '../public/assets/projects/housemarketplace.png'
import esocial from '../public/assets/projects/e-social.jpeg'
import projectmanager from '../public/assets/projects/project-manager.png'
import shopwave from '../public/assets/projects/shop-wave.png'
import threadx from '../public/assets/projects/thread-x.png'

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
            title="Shop Wave"
            backgroundImg={shopwave}
            projectUrl="/shop-wave"
            technology="MERN Stack, PayPal"
          />
          <ProjectItem
            title="Thread-X"
            backgroundImg={threadx}
            projectUrl="/thread-x"
            technology="Next.js, Clerk"
          />
          <ProjectItem
            title="E-Social"
            backgroundImg={esocial}
            projectUrl="/e-social"
            technology="MERN Stack, Redux"
          />
          <ProjectItem
            title="House Marketplace"
            backgroundImg={housemarketplace}
            projectUrl="/housemarketplace"
            technology="React.js, Firebase"
          />

          <ProjectItem
            title="Project Manager"
            backgroundImg={projectmanager}
            projectUrl="/project-manager"
            technology="MERN Stack, GraphQL"
          />
        </div>
      </div>
    </div>
  )
}
export default Projects
