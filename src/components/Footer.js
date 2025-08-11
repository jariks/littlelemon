import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <footer className="bg-white rounded-lg shadow-sm  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-10" alt="Little lemon" ></img>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                <li>
                    <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
                </li>
                <li>
                    <Link to="/reserve" className="hover:underline me-4 md:me-6">Reservations</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">© 2025 <a href="https://flowbite.com/" className="hover:underline">Little Lemon</a>. All Rights Reserved.</span>
    </div>
</footer>
  );
}

export default Footer;
