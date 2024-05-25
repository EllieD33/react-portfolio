import React from "react";
import { FaJs, FaNodeJs, FaReact, FaGit, FaHtml5, FaBootstrap, FaCss3 } from "react-icons/fa"
import Section from "./common/Section";

const Skills = () => {


    const skillsIcons = [
        //To source: PostgresSQL, Express and Tailwind
        {
            id: 1,
            icon: <FaJs/>,
        },
        {
            id: 2,
            icon: <FaCss3/>,
        },
        {
            id: 3,
            icon: <FaNodeJs/>,
        },
        {
            id: 4,
            icon: <FaReact/>,
        },
        {
            id: 5,
            icon: <FaGit/>,
        },
        {
            id: 6,
            icon: <FaHtml5/>,
        },
        {
            id: 7,
            icon: <FaBootstrap/>,
        }
    ]

    return <Section title='Skills'></Section>

}

export default Skills;