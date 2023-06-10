import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Popular from './pages/Popular';
import Battle from './pages/Battle';
import Error from './pages/Error';
import Nav from './pages/Nav';
import Results from './pages/Battle/Results/Results';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: (
          <Home />
        )
      },
      {
        path: 'popular',
        element: (
          <Popular />
        )
      },
      {
        path: 'battle',
        element: (
          <Battle />
        )
      },
      {
        path: 'battle/results',
        element: (
          <Results />
        )
      },
      {
        path: '*',
        element: (
          <Error />
        )
      }
    ]
  }

])

const App = () => {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
