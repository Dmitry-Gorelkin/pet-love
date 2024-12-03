import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
      <p>Navigacia</p>
      <p>Log/Reg</p>
      <p>User</p>
      <p>Menu</p>
    </>
  );
};

export default Header;
