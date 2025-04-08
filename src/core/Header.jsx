import logo from "/logo.png";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
            src={logo}
            alt="Logo image"
          />
        </Link>
        <nav>
          <Link
            to="/"
            style={{
              marginRight: "1rem",
              textDecoration: "none",
              color: "#1f2937",
            }}
          >
            About
          </Link>
          <a
            href="/"
            style={{
              marginRight: "1rem",
              textDecoration: "none",
              color: "#1f2937",
            }}
          >
            Projects
          </a>
          <a
            href="contact"
            style={{ textDecoration: "none", color: "#1f2937" }}
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};
