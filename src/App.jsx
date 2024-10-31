import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ServicePage1 from '../src/pages/Service1/ServicePage1.jsx';
import ServicePage2 from '../src/pages/Service2/ServicePage2.jsx';
import Layout from './layouts/Layout.jsx';
import Home from '../src/pages/Home/Home.jsx';
import LetsTalk from './pages/LetsTalk/LetsTalk.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/clientmsg',
          element: <LetsTalk />
        },
        {
          path: '/contactus',
          element: <ContactUs />
        },
        {
          path: '/service1',
          element: <ServicePage1 />
        },
        {
          path: '/service2',
          element: <ServicePage2 />
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App;
