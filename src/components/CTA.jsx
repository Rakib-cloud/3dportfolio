import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text dark:text-white'>
        Have a project in mind? <br className='sm:block hidden' />
        Let's build something together!
      </p>
      <Link to='/contact' className='btn dark:from-blue-700 dark:to-purple-700'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
