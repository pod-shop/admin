import { MouseEvent } from 'react';
import Image from 'next/image';

const Header = () => {

  const handleDarkMode = (e: MouseEvent<HTMLAnchorElement>) => {
    if (document.body.classList.contains('dark')) {
      // Add darkmode 
      localStorage.removeItem('darkmode');
      document.body.classList.toggle('dark');
      e.currentTarget.classList.remove('active');
    } else {
      // remove darkmode 
      localStorage.setItem('darkmode', 'active');
      document.body.classList.toggle('dark');
      e.currentTarget.className += ' active';
    }
  }

  return (
    <>
      <header className="main-header navbar">
        <div className="col-search">
          <form className="searchform">
            <div className="input-group">
              <input
                list="search_terms"
                type="text"
                className="form-control"
                placeholder="Search term"
              />
              <button className="btn btn-light bg" type="button">
                <i className="material-icons md-search" />
              </button>
            </div>
            <datalist id="search_terms">
              <option value="Products"></option>
              <option value="New orders"></option>
              <option value="Apple iphone"></option>
              <option value="Ahmed Hassan"></option>
            </datalist>
          </form>
        </div>
        <div className="col-nav">
          <button
            className="btn btn-icon btn-mobile me-auto"
            data-trigger="#offcanvas_aside"
          >
            <i className="md-28 material-icons md-menu" />
          </button>
          <ul className="nav">
            <li className="nav-item">
              <a
                className="nav-link btn-icon"
                onClick={handleDarkMode}
                title="Dark mode"
                style={{ cursor: 'pointer' }}
              >
                <i className="material-icons md-nights_stay" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn-icon"
                style={{ cursor: 'pointer' }}
              >
                <i className="material-icons md-notifications_active" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                English
              </a>
            </li>
            <li className="dropdown nav-item">
              <a
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <Image
                  className="img-xs rounded-circle"
                  src="/images/people/avatar1.jpg"
                  alt="User"
                  layout='raw'
                />
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  My profile
                </a>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
                <a className="dropdown-item text-danger" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </header>

    </>
  );
}

export default Header;
