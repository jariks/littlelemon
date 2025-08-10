import logo from '../assets/LogoXl.png'

function Footer() {
  return (
    <footer>
      <img src={logo} alt="" />
      <section>
        <div>
          <h3 className=''>Contact us</h3>
        </div>
        <div>
          <h3>Find us</h3>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
