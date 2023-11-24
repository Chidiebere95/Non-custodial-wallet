import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../views/pages/Home';
import Layout from '../views/layouts/Layout';
import About from '../views/pages/About';
import GetStarted from '../views/pages/GetStarted';

function Router() {
  const router = createBrowserRouter([
    { path: '/', element: <GetStarted /> },
    { element: <About />, path: '/about' },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
