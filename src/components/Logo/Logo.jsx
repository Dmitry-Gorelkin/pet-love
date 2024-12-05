import { Link } from 'react-router-dom';
import icon from '../../assets/icons.svg';

const Logo = () => {
  return (
    <>
      <Link to="/home">
        <svg>
          <use href={`${icon}#logo`}></use>
        </svg>
      </Link>
    </>
  );
};

export default Logo;
