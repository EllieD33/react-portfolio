import React from 'react'

const Section = ({title, subtitle, children}) => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center text-center py-16 px-5'>
        <h3 className='text-3xl lg:text-5xl py-3'>{title}</h3>
        <p className='max-w-xl font-light text-gray-500 text-sm md:text-base'>{subtitle}</p>
        {children}
    </section>
  )
}

export default Section