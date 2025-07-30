import logo from '../assets/logo.svg';
function Header() {
  return (
    <header>
    <img src={logo} alt="" />
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
      </ul>
    </nav>
    </header>
  );
}

export default Header;
