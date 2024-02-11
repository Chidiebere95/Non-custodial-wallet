import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from '../views/pages/Dashboard';
import Layout from '../views/layouts/Layout';
import GetStarted from '../views/pages/GetStarted';

function Router() {
  const router = createBrowserRouter([
    { path: '/onboarding', element: <GetStarted /> },
    { path: '/dashboard', element: <Dashboard /> },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
