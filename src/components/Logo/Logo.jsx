import icon from '../../assets/icons.svg';

const Logo = () => {
  return (
    <>
      <svg>
        <use href={`${icon}#logo`}></use>
      </svg>
    </>
  );
};

export default Logo;
