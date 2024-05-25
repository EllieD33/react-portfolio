import { useState } from 'react';
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && 'dark'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    <main className='bg-white dark:bg-gray-950 text-gray-900 dark:text-white'>
      <Profile/>
    </main>
    </div>
  );
}

export default App;
