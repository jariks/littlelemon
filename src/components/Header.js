import logo from '../assets/logo.svg';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='top-0 z-10'>
    <nav className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
      <img src={logo} alt="" />
      {/* Hamburger */}
        <button className={['text-3xl sm:hidden focus:outline-none', open ? 'hidden' : ''].join(' ')}
        onClick={ () => setOpen( (e) => !e)}
        aria-label="Open menu"
        aria-controls="mobile-menu"
        aria-expanded={open}
        >
          &#9776;
        </button>
      {/* Desktop nav */}
      <div className='hidden sm:block space-x-8 text-xl ' aria-label='main'>
        <Link to='/' className='hover:opacity-80'>Home</Link>
        <Link to='/reserve' className='hover:opacity-80'>Reservations</Link>
      </div>
    </nav>
    {/* Mobile menu */}
    <section id='mobile-menu' className={['bg-white absolute top-0 w-full text-3xl flex-col justify-center origin-top animate-open-menu', open ? 'flex animate-open-menu': 'hidden'].join(' ')}>
      <button className='text-6xl self-end px-2' onClick={ () => setOpen(false)} aria-label="Close menu">
        &times;
      </button>
      <nav className='flex flex-col min-h-screen items-center py-8' aria-label='mobile'>
        <hr className="border-solid border-1 border-black w-[80%]"/>
        <Link to='/' className='w-full text-center py-6 hover:opacity-80' onClick={() => setOpen(false)}>Home</Link>
        <hr className="border-solid border-1 border-black w-[80%]"/>
        <Link to='/reserve' className='w-full text-center py-6 hover:opacity-80' onClick={() => setOpen(false)}>Reservation</Link>
        <hr className="border-solid border-1 border-black w-[80%]"/>
      </nav>
    </section>
    </header>
  );
}

export default Header;
