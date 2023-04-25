import verticalLogo from "./logos/Asset 18@4x.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={verticalLogo} width='120' alt='Little Lemon logo' />
      </div>
      <nav>
        <h3>Doormat Navigation</h3>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Menu</a>
          </li>
          <li>
            <a href='/'>Reservations</a>
          </li>
          <li>
            <a href='/'>Order Online</a>
          </li>
          <li>
            <a href='/'>Login</a>
          </li>
        </ul>
      </nav>
      <div>
        <h3>Contacts</h3>
        <ul>
          <li>Adress</li>
          <li>Phone number</li>
          <li>email</li>
        </ul>
      </div>
      <nav>
        <h3>Social Media Links</h3>
        <ul>
          <li>
            <a href='/'>Facebook</a>
          </li>
          <li>
            <a href='/'>Instagram</a>
          </li>
          <li>
            <a href='/'>Tripadvaser</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
