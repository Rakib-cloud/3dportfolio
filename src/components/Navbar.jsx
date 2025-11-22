import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className='header dark:bg-[#0a0a0a]/98 backdrop-blur-sm transition-colors duration-300 border-b border-gray-200 dark:border-gray-800'>
      <NavLink to='/'>
          <div className={'w-[64px] h-[64px] flex items-center justify-center '}>
              <img src="https://i.ibb.co/HtLqcg9/logo.png" alt='logo' className='border rounded-full bg-sky-200'/>
          </div>
      </NavLink>
        <nav className='flex text-lg gap-7 font-medium items-center'>
            <NavLink 
              to='/about' 
              className={({ isActive }) => 
                `transition-all duration-300 hover:scale-110 cursor-pointer ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400 font-bold" 
                    : "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                }`
              }
            >
          About
        </NavLink>
        <NavLink 
          to='/projects' 
          className={({ isActive }) => 
            `transition-all duration-300 hover:scale-110 cursor-pointer ${
              isActive 
                ? "text-blue-600 dark:text-blue-400 font-bold" 
                : "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            }`
          }
        >
          Projects
        </NavLink>
        <button
          onClick={toggleDarkMode}
          className='p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
          aria-label='Toggle dark mode'
        >
          {darkMode ? (
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
