import React from 'react'
import Section from "./common/Section";
import ProjectCard from './common/ProjectCard';

const Projects = () => {

  const projectInfo = [
    {
      id: 1,
      title: 'Example project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel, quasi explicabo fugiat aut cupiditate in itaque, placeat voluptates neque eligendi alias beatae qui quos voluptas atque ipsa repellat reiciendis.',
      imgPath: 'https://placehold.co/600x400',
      techStack: ['JS', 'React', 'HTML', 'CSS', 'Tailwind'],
      demoURL: 'https://google.com/',
      repoURL: 'https://github.com/'
    },
    {
      id: 2,
      title: 'Example project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel, quasi explicabo fugiat aut cupiditate in itaque, placeat voluptates neque eligendi alias beatae qui quos voluptas atque ipsa repellat reiciendis.',
      imgPath: 'https://placehold.co/600x400',
      techStack: ['JS', 'Node', 'Postgres', 'Express'],
      demoURL: 'https://google.com/',
      repoURL: 'https://github.com/'
    },
    {
      id: 3,
      title: 'Example project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel, quasi explicabo fugiat aut cupiditate in itaque, placeat voluptates neque eligendi alias beatae qui quos voluptas atque ipsa repellat reiciendis.',
      imgPath: 'https://placehold.co/600x400',
      techStack: ['JS', 'HTML', 'CSS', 'Bootstrap'],
      demoURL: 'https://google.com/',
      repoURL: 'https://github.com/'
    }
  ]

  return <Section title='Projects' subtitle='Here are some of my projects.'>
    <div className='flex flex-wrap justify-center'>
      {projectInfo.map(project => (
          <div key={project.id} className='p-4 md:w-1/2 lg:w-1/3'> 
          <ProjectCard
            title={project.title}
            description={project.description}
            img={project.imgPath}
            techStack={project.techStack}
            demo={project.demoURL}
            repo={project.repoURL}
          />
        </div>
        ))}
    </div>
  </Section>
}

export default Projects