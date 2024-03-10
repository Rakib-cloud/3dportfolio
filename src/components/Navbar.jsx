import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
          <div className={'w-[64px] h-[64px] flex items-center justify-center '}>
              <img src="https://i.ibb.co/HtLqcg9/logo.png" alt='logo' className='border rounded-full bg-sky-200'/>
          </div>
      </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
