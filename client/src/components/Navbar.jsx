import logo from '../assets/gitbook_logo.svg';

const Navbar = () => {
  return (
    <>
    <nav class='navbar navbar-expand-lg breakout'>
      <div class='container-fluid'>
        <a class='navbar-brand text__white' href='#'>
          <img src={logo} alt="logo" className='logo' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle text__white fw-semibold'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Product
              </a>
              <ul class='dropdown-menu'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
              </ul>
            </li>
            <li class='nav-item dropdown '>
              <a
                class='nav-link dropdown-toggle text__white fw-semibold'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Features
              </a>
              <ul class='dropdown-menu'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
              </ul>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle text__white fw-semibold'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Resoures
              </a>
              <ul class='dropdown-menu'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
              </ul>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link text__white fw-semibold'
                aria-current='page'
                href='#'
              >
                Pricing
              </a>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link text__yellow fw-semibold'
                aria-current='page'
                href='#'
              >
                We're hiring
              </a>
            </li>
          </ul>
          <form class='d-flex' role='search'>
            <button className='btn btn-dark btn-sm fw-semibold'>Login</button>
          </form>
        </div>
      </div>
    </nav>
                </>
  );
};
export default Navbar;
