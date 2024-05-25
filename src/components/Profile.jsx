import React from "react";
import {FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa"

const Profile = () => {

    const socials = [
        {
            id: 1,
            link: "https://github.com",
            icon: <FaGithub/>,
        },
        {
            id: 2,
            link: "https://linkedin.com",
            icon: <FaLinkedin/>,
        }
    ]

    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector('.down-arrow');

        if (this.scrollY >= 50) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    })

    return <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-5xl text-orange-600 font-medium uppercase">Ellen Daly</h2>
        <h3 className="py-3 text-2xl">Software Engineer</h3>
        <p className="max-w-xl font-light text-gray-500">Welcome to my site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel, quasi explicabo fugiat aut cupiditate in itaque, placeat voluptates neque eligendi alias beatae qui quos voluptas atque ipsa repellat reiciendis.</p>
        <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
            {socials.map(({id, link, icon}) => (
                <a href={link} key={id} target="_blank"
                rel="noopener noreferrer" className="cursor-pointer duration-300 hover:text-orange-600">{icon}</a>
            ))}            
        </div>
        <div className="mt-10 down-arrow">
            <FaArrowDown className="text-gray-500 text-2xl animate-bounce"/>
        </div>
    </section>
}

export default Profile;