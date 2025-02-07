import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Curriculum } from '../pages/Curriculum';
import { Services } from '../pages/Services';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';

const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/curriculum', element: <Curriculum /> },
    { path: '/services', element: <Services /> },
    { path: '/projects', element: <Projects /> },
    { path: '/contact', element: <Contact /> }
]);

export default routes;
