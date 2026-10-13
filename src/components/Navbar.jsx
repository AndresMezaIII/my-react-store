import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar lg:navbar-expand bg-1 fg-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="btn-icon navbar-toggler"
          type="button"
          data-bs-toggle="drawer"
          data-bs-target="#navbarNavMenu"
          aria-controls="navbarNavMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" aria-hidden="true" />
        </button>
        <dialog
          className="drawer drawer-end"
          tabIndex={-1}
          id="navbarNavMenu"
          aria-labelledby="navbarNavMenuLabel"
        >
          <div className="drawer-header">
            <h5 className="drawer-title" id="navbarNavMenuLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="drawer"
              aria-label="Close"
            />
          </div>
          <div className="drawer-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  data-bs-toggle="menu"
                  aria-expanded="false"
                >
                  Menu link
                </button>
                <div className="menu">
                  <a className="menu-item" href="#">
                    Action
                  </a>
                  <a className="menu-item" href="#">
                    Another action
                  </a>
                  <a className="menu-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </dialog>
      </div>
    </nav>
  );
}

export default Navbar;
