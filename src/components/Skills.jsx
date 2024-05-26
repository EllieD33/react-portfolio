import React from "react";
import { FaJs, FaNodeJs, FaReact, FaGitAlt, FaHtml5, FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import Section from "./common/Section";

const Skills = () => {

    const iconStyles = "size-14 md:size-16 lg:size-20";

    const skillsIcons = [
        {
            id: 1,
            icon: <FaJs className={iconStyles}/>,
            label: 'JavaScript',
        },
        {
            id: 2,
            icon: <FaNodeJs className={iconStyles}/>,
            label: 'Node.js'
        },
        {
            id: 3,
            icon: <BiLogoPostgresql className={iconStyles}/>,
            label: 'PostgreSQL',
        },
        {
            id: 4,
            icon: <SiExpress className={iconStyles}/>,
            label: 'Express.js',
        },
        {
            id: 5,
            icon: <FaReact className={iconStyles}/>,
            label: 'React.js',
        },
        {
            id: 6,
            icon: <FaHtml5 className={iconStyles}/>,
            label: 'HTML',
        },
        {
            id: 7,
            icon: <FaCss3Alt className={iconStyles}/>, 
            label: 'CSS',
        },
        {
            id: 8,
            icon: <SiTailwindcss  className={iconStyles}/>,
            label: 'Tailwind CSS',
        },
        {
            id: 9,
            icon: <FaBootstrap className={iconStyles}/>,
            label: 'Bootstrap',
        },
        {
            id: 10,
            icon: <FaGitAlt className={iconStyles}/>,
            label: 'Git',
        },
    ]

    return <Section title='Skills' subtitle={'I have experience using these technologies. Check out my projects to see some of the ways I have used them.'}>
        <div className="flex flex-wrap  justify-center">
            {skillsIcons.map(({ id, icon, label }) => (
                <div className="flex flex-col items-center justify-center p-5 mt-5" key={id}>
                    {icon}
                    {label}
                </div>
            ))}
        </div>
    </Section>

}

export default Skills;