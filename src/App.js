import { useState } from 'react';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && 'dark'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    <main className='bg-white dark:bg-gray-950 text-gray-900 dark:text-white'>
      <Profile/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
    </div>
  );
}

export default App;
