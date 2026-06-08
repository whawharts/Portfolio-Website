import { Outlet, useLocation } from 'react-router-dom'
import FloatingSocialButton from '../FloatingSocialButton'
import ScrollToTopRail from '../ScrollToTopRail'
import Footer from './Footer'
import Navbar from './Navbar'

export default function PageShell() {
  const location = useLocation()

  return (
    <div className="nocturne-app flex min-h-screen flex-col bg-nocturne-bg font-nocturne text-nocturne-cream">
      <Navbar />
      <main className="mx-auto w-full max-w-[var(--content-max-width)] flex-1 px-5 py-14 md:px-20 md:py-20">
        <div key={location.pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <ScrollToTopRail />
      <FloatingSocialButton />
      <Footer />
    </div>
  )
}
