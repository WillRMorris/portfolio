import { Link, useLocation } from 'react-router-dom';


function NavTabs() {
  const currentPage = useLocation().pathname;

  return (

      <ul className="g-0 align-items-center nav w-navbar sticky-top navbar-light">
  <li className={`w-logo nav-item w-tab col-4 mx-3`}>
  <Link 
  to={'/'} className={`nav nav-link fw-bolder`}>
    William
  <strong className={`purple`}>Morris</strong>
  </Link>
  </li>

        <li className="nav-item w-tab py-2 px-4">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item w-tab py-2 px-4">
          <Link
            to="/About"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            >
            Skills
          </Link>
        </li>
        <li className="nav-item w-tab py-2 px-4">
          <Link
            to="/projects"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/projects' ? 'nav-link active' : 'nav-link'}
            >
            Projects
          </Link>
        </li>
        <li className="nav-item w-tab py-2 px-4">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
            Contact
          </Link>
        </li>
      </ul >
  );
}

export default NavTabs;
