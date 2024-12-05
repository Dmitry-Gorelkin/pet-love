import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <p>404</p>
        <p>Ooops! This page not found :(</p>
        <button>
          <Link to="/home">To home page</Link>
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
