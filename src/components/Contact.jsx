import React from 'react'
import Section from "./common/Section";

const Contact = () => {

  const spanStyles = "text-xs font-normal text-red-500"
  const labelStyles = "block text-left text-gray-700 dark:text-white text-md font-bold mb-2"
  const inputStyles = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 dark:placeholder-white leading-tight focus:outline-none focus:shadow-outline mb-6"

  return <Section title='Contact' subtitle="Got a question or want to work together? Please feel welcome to get in touch!">
    <div className="w-full max-w-xs mt-5">
      <form className="bg-white dark:border dark:border-gray-200 dark:bg-gray-950 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div>
          <label className={labelStyles} htmlFor="name">
            Name <span className={spanStyles}>(required)</span>
          </label>
          <input className={inputStyles} id="name" type="text" placeholder="Jane Bloggs"/>
        </div>
        <div>
          <label className={labelStyles} htmlFor="email">
            Email <span className={spanStyles}>(required)</span>
          </label>
          <input className={inputStyles} id="email" type="email" placeholder="example@example.com"/>
        </div>
        <div>
          <label className={labelStyles} htmlFor="message">
            Message <span className={spanStyles}>(required)</span>
          </label>
          <textarea className={inputStyles} id="message" type="text" placeholder="Your message here..." rows="5"/>
        </div>
        <div className="flex">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded  flex-grow" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  </Section>
}

export default Contact