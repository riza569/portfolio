import { useState } from "react";
import logo from "../assets/mylogo.svg";
const Navbar = () => {
  const [list, setList] = useState(["Home", "Skills", "Projects", "Contact"]);
  return (
    <header className="navbar-container">
      <div className="scroll-watcher"></div>
      <div className="logo">
        <h1>RIZA.</h1>
      </div>
      <nav className="link-container">
        {list.map((li) => (
          <span key={li.length} className="active">
            {li}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
