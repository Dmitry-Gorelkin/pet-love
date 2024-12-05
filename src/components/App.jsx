import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="home" element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
