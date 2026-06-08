import { createBrowserRouter } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import AboutPage from '../pages/AboutPage'
import CertificatesPage from '../pages/CertificatesPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import TechStackPage from '../pages/TechStackPage'

export const router = createBrowserRouter([
  {
    element: <PageShell />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/tech-stack',
        element: <TechStackPage />,
      },
      {
        path: '/certificates',
        element: <CertificatesPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
])
