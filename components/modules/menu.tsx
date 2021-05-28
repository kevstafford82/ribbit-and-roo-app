const Menu = () => {
  return (
    <nav className="bg-transparent fixed w-full">
      <div>
        <div className="relative flex items-center h-16">
          <div className="absolute inset-y-0 left-0 sm:hidden">
            {/*Mobile menu button*/}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/*
      Icon when menu is closed.

      Heroicon name: outline/menu

      Menu open: "hidden", Menu closed: "block"
    */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/*
      Icon when menu is open.

      Heroicon name: outline/x

      Menu open: "block", Menu closed: "hidden"
  */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="/RibbitAndRoo.png"
              alt="RIBBIT &amp; ROO"
            />
            <a href="/" className="text-white">
              RIBBIT &amp; ROO
            </a>
          </div>
          <div className="flex-1 flex justify-end items-center sm:items-stretch">
            <div className="hidden justify-end sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  className="bg-primary-green text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Play Sessions
                </a>

                <a
                  href="#"
                  className="text-white hover:bg-primary-green px-3 py-2 rounded-md text-sm font-medium"
                >
                  Early Childcare Programs
                </a>

                <a
                  href="#"
                  className="text-white hover:bg-primary-green px-3 py-2 rounded-md text-sm font-medium"
                >
                  Gallery
                </a>

                <a
                  href="#"
                  className="text-white hover:bg-primary-green px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testamonials
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="bg-primary-green text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Play Sessions
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Early Childhood Programs
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Gallery
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Testamonials
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Menu };
