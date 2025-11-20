import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='footer font-poppins dark:bg-[#000000] transition-colors duration-300'>
      <hr className='border-slate-200 dark:border-gray-700' />

      <div className='footer-container'>
        <p className='dark:text-white'>
          © {currentYear} <strong>Rakibul Islam</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain dark:invert transition-all hover:scale-110'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
