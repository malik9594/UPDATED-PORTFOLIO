import React from 'react'
import re from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import nextjs from '../assets/nextjs.svg'
import bootstrap from '../assets/bootstrap.svg'
import mui from '../assets/mui.svg'
import rimg from '../assets/AI-right.jpg'
import limg from '../assets/AI-left avater.jpg'
import aiAvatar from '../assets/AI-avatar.avif';

const skillsData = [{
    id:1, image:re,title:'React js', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque.'
},
{
    id:2, image:tailwind,title:'Tailwind CSS', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque.'
},
{
    id:3, image:nextjs,title:'Next js', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque.'
},
{id:4, image:bootstrap,title:'Bootstrap', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque.'
},
{id:5, image:mui,title:'Material UI', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque.'}
]

const SkillBox =({image, title, description})=>(<article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
    <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
</article>)
const Skills = () => {
  return (
    <div id='skills'>
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">
        <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2
         transform -translate-x-1/2"></div>
         <img src={aiAvatar} alt="Left Picture" className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm-w-32 opacity-70"/>
      <div data-aos='fade-up' data-aos-delay='300' className="relative z-20 text-center space-y-6 sm:space-y-10">
        <header>
            <h1 className="text-3xl sm:text-4xl font-bold">
                My Experience <br/> and <span className="text-purple-400">Skills</span>
            </h1>
            <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque.
            </p>
        </header>
        <section data-aos='fade-up' data-aos-delays='500' style={{paddingTop:'3rem'}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skillsData.map((skill)=>(<SkillBox
            key={skill.id}
            image={skill.image}
            title={skill.title}
            description={skill.description}
            />))}
        </section>
      </div>
      <img src={rimg} alt='Right picture' className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform
      rotate-12 w-24 h-auto sm:w-32 opacity-70'/>
      </section>
    </div>
  )
}

export default Skills
