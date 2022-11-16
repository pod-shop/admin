import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '@/images/logo.svg';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
// import { Link } from 'next-translate-routes';

export interface MenuItem {
  label?: string;
  url?: string;
  icon?: string;
  items?: MenuItem[];
}

const MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    url: '/',
    icon: 'icon material-icons md-home'
  },
  {
    label: 'Products',
    // url: '/products',
    icon: 'icon material-icons md-shopping_bag',
    items: [
      {
        label: 'All',
        url: '/products'
      },
      {
        label: 'Create new',
        url: '/products/new'
      },
      {
        label: 'Categories',
        url: '/products/categories'
      }
    ]
  },
  {
    label: 'Orders',
    url: '/orders',
    icon: 'icon material-icons md-shopping_cart'
  },
  {
    label: 'Sellers',
    url: '/sellers',
    icon: 'icon material-icons md-store'
  },
  {
    label: 'Transactions',
    url: '/transactions',
    icon: 'icon material-icons md-monetization_on',
    items: []
  },
  {
    label: 'Account',
    // url: '/account',
    icon: 'icon material-icons md-person',
    items: [
      {
        label: 'Login',
        url: '/login'
      },
      {
        label: 'Registration',
        url: '/sign-up'
      }
    ]
  },
  {
    label: 'Reviews',
    url: '/reviews',
    icon: 'icon material-icons md-comment'
  },
  {
    label: 'Brands',
    url: '/brands',
    icon: 'icon material-icons md-stars'
  },
  {
    label: 'Statistics',
    url: '/statistics',
    icon: 'icon material-icons md-pie_chart'
  },
]

const MENU2: MenuItem[] = [
  {
    label: 'Settings',
    url: '/settings',
    icon: 'icon material-icons md-settings',
  },
]

const NavbarAside = () => {
  const screenOverlay = useRef<HTMLElement>(null);
  const navbarAside = useRef<HTMLElement>(null);

  useEffect(() => {

  }, [])

  const handleAsideMinimize = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.innerWidth < 768) {
      document.body.classList.remove('aside-mini')
      screenOverlay?.current?.classList.remove('show')
      navbarAside?.current?.classList.remove('show')
      document.body.classList.remove('offcanvas-active')
    } else {
      document.body.classList.toggle('aside-mini')
    }
  }

  return <>
    <b className="screen-overlay" ref={screenOverlay}></b>

    <aside className="navbar-aside" id="offcanvas_aside" ref={navbarAside}>
      <div className="aside-top">
        <Link href="/" passHref>
          <a className="brand-wrap">
            <Image
              src={logo}
              height={46}
              className="logo"
              alt="Ecommerce dashboard template"
              layout='raw'
            />
          </a>
        </Link>
        <div>
          <button className="btn btn-icon btn-aside-minimize" onClick={handleAsideMinimize}>
            <i className="text-muted material-icons md-menu_open" />
          </button>
        </div>
      </div>
      <nav>
        <Menu menuItems={MENU} />
        <hr />
        <Menu menuItems={MENU2} />
        <br />
        <br />
      </nav>
    </aside>
  </>
}

const Menu = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const router = useRouter();

  const handleToggleMenu = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const submenu = e.currentTarget.parentElement?.querySelector('.menu-item.has-submenu .submenu') as HTMLElement;

    if (submenu) {
      e.preventDefault();
    }

    const display = submenu?.style?.display;

    document.querySelectorAll('.menu-item.has-submenu .submenu')
      .forEach(el => (el as HTMLElement).style.display = 'none');

    if (submenu) {
      submenu.style.display = display === 'none' ? 'block' : 'none';
    }
  }

  const isActiveRoute = (menuItem: MenuItem): boolean => (
    [menuItem.url, ...(menuItem.items?.map(i => i.url) ?? [])]
      .some(href => router.asPath === href)
  )

  return (
    <>
      <ul className="menu-aside">
        {menuItems.map((mi, i) => (
          <li key={`${mi.label}-${i}`} className={clsx('menu-item', ((mi.items ?? [])?.length > 0) && 'has-submenu', isActiveRoute(mi) && 'active')}>
            <Link href={mi.url ?? '#'} passHref>
              <a className="menu-link" onClick={handleToggleMenu}>
                {mi.icon && <i className={mi.icon} />}
                <span className="text">{mi.label}</span>
              </a>
            </Link>
            {((mi.items ?? [])?.length > 0) &&
              <div className="submenu">
                {mi.items?.map((e, i) => (
                  <Link key={`${e.label}-${i}`} href={e.url ?? '#'}>
                    {e.label}
                  </Link>
                ))}
              </div>}
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavbarAside;
