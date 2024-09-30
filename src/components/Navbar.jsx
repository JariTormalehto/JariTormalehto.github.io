/* eslint-disable react/prop-types */

const Navbar = ({ scrollToTop, handleSmoothScroll, isOpen, toggleMenu }) => (
  <nav className="bg-white shadow-lg w-full fixed top-0 z-50">
    <div className="px-4 mx-auto flex justify-between items-center h-16">
      {/* Logo - Smooth Scroll to Top */}
      <a href="/" onClick={scrollToTop} className="flex-shrink-0 flex items-center">
        <img className="h-8 w-32" src="/images/logo.png" alt="Logo" />
      </a>

      {/* Hamburger Icon (for mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu" className="text-gray-700 focus:outline-none">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Links for Desktop */}
      <div className="hidden md:flex space-x-4">
        <a href="#haagised" onClick={(e) => handleSmoothScroll(e, "haagised")} className="text-gray-700 hover:text-customGreen">
          Haagised
        </a>
        <a href="#traktorid" onClick={(e) => handleSmoothScroll(e, "traktorid")} className="text-gray-700 hover:text-customGreen">
          Traktorid
        </a>
        <a href="#muu" onClick={(e) => handleSmoothScroll(e, "muu")} className="text-gray-700 hover:text-customGreen">
          Muu tehnika
        </a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="text-gray-700 hover:text-customGreen">
          Kontakt
        </a>
      </div>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
      <a href="#haagised" onClick={(e) => handleSmoothScroll(e, "haagised")} className="block text-gray-700 hover:text-customGreen py-2 px-4">
        Haagised
      </a>
      <a href="#traktorid" onClick={(e) => handleSmoothScroll(e, "traktorid")} className="block text-gray-700 hover:text-customGreen py-2 px-4">
        Traktorid
      </a>
      <a href="#muu" onClick={(e) => handleSmoothScroll(e, "muu")} className="block text-gray-700 hover:text-customGreen py-2 px-4">
        Muu tehnika
      </a>
      <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="block text-gray-700 hover:text-customGreen py-2 px-4">
        Kontakt
      </a>
    </div>
  </nav>
);

export default Navbar;
