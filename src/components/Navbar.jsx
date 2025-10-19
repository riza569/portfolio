import { useState } from 'react';

const Navbar = () => {
  const [list] = useState(['Home', 'Skills', 'Projects', 'Contact']);

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="navbar-container">
      <div className="scroll-watcher"></div>
      <div className="logo">
        <h1>RIZA.</h1>
      </div>
      <nav className="link-container">
        {list.map((li) => (
          <span
            key={li}
            className="active"
            onClick={() => scrollToSection(li)}
          >
            {li}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
