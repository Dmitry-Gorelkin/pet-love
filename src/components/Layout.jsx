import { Suspense } from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './UI/Conteiner/Conteiner.styled';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
