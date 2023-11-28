import { Link } from "react-router-dom";

const Nav = [
  { label: "Professor", to: "/professor" },
  { label: "Subject", to: "/subject" },
  { label: "Room", to: "/room" },
];

const Head = () => {
  return (
    <header className="header">
      <h1 className="header-title">Simple Auto Scheduling</h1>
      <nav className="header-nav">
        {Nav.map((link, index) => (
          <Link to={link.to} key={index}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Head;
