import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaJs, FaNodeJs, FaReact, FaHtml5, FaBootstrap, FaCss3Alt } from 'react-icons/fa'
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const techIcons = {
  JS: FaJs,
  React: FaReact,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Node: FaNodeJs,
  Postgres: BiLogoPostgresql,
  Express: SiExpress,
  Tailwind: SiTailwindcss,
  Bootstrop: FaBootstrap
}

const ProjectCard = ({title, description, img, techStack, demo, repo }) => {

  const linkStyles = "flex flex-grow text-center text-white font-semi-bold bg-orange-600 p-2 justify-center items-center m-2 rounded hover:bg-orange-700";
  const techIconStyles = "size-10 m-2"
  const linkIconStyles = 'mr-2'

  return (
    <div className='max-w-sm mt-4'>
      <h4 className='mb-2 text-xl'>{title}</h4>
      <img src={img} alt="project screenshot" />
      <p>{description}</p>
      <div className='flex justify-center'>
      {techStack.map(tech => {
          const IconComponent = techIcons[tech]; 
          return IconComponent ? <IconComponent key={tech} className={techIconStyles} /> : null;
        })}
      </div>
      <div className='flex justify-between'>
        <a className={linkStyles}target="_blank" rel="noopener noreferrer" href={demo}> <FaExternalLinkAlt className={linkIconStyles} /> See it in action</a>
        <a className={linkStyles} href={repo}> <FaGithub className={linkIconStyles} /> See the code</a>
      </div>
    </div>
  )
}

export default ProjectCard