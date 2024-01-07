const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 bg-gradient-to-br from-indigo-300 to-violet-300">
        <a
          className="text-4xl text-[#1f2937] sm:text-6xl font-semibold animate-fade-down animate-delay-75"
          href="/"
        >
          LOGO
        </a>
        <div className="menu ">
          <ul className="flex sm:text-lg text-[#1f2937]">
            <li className="px-1 sm:px-3 animate-fade-down animate-delay-0">
              <a href="">Home</a>
            </li>
            <li className="px-1 sm:px-3 animate-fade-down animate-delay-75">
              <a href="">About</a>
            </li>
            <li className="px-1 sm:px-3 animate-fade-down animate-delay-100">
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
