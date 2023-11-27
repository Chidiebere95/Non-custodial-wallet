import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from '../views/pages/Dashboard';
import Layout from '../views/layouts/Layout';
import About from '../views/pages/About';
import GetStarted from '../views/pages/GetStarted';

function Router() {
  const router = createBrowserRouter([
    { path: '/onboarding', element: <GetStarted /> },
    { path: '/dashboard', element: <Dashboard /> },
    { element: <About />, path: '/about' },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
