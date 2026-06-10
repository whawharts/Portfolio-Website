import { Outlet, useLocation } from 'react-router-dom'
import FloatingSocialButton from '../FloatingSocialButton'
import ScrollToTopRail from '../ScrollToTopRail'
import Footer from './Footer'
import Navbar from './Navbar'

export default function PageShell() {
  const location = useLocation()

  return (
    <div className="nocturne-app flex min-h-screen flex-col overflow-x-hidden bg-nocturne-bg font-nocturne text-nocturne-cream">
      <Navbar />
      <main className="mx-auto w-full max-w-[var(--content-max-width)] flex-1 px-5 pb-10 pt-26 md:px-10 md:pb-12 md:pt-28">
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
