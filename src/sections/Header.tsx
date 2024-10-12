export const Header = () => {
  return (
    <div className="fixed top-3 flex items-center justify-center">
      <nav>
        <ul className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
            >
              About
            </a>
          </li>
          <li className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
            <a
              href="#"
              className="nav-link"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
