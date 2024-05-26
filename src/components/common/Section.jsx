import React from 'react'

const Section = ({title, subtitle, children}) => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center text-center py-16 px-5'>
        <h3 className='text-4xl text-orange-600 lg:text-5xl py-3'>{title}</h3>
        <p className='max-w-xl font-light text-gray-700 text-lg dark:text-gray-200'>{subtitle}</p>
        {children}
    </section>
  )
}

export default Section