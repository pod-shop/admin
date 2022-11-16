import { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import NavbarAside from '@/components/navbar-aside';

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavbarAside />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          {children}
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Layout;
