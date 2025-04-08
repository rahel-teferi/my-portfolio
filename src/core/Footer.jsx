import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  const today = new Date();

  return (
    <footer
      style={{
        backgroundColor: "#e5e7eb",
        padding: "1rem",
        textAlign: "center",
        fontSize: "0.875rem",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          margin: "20px auto",
          listStyle: "none",
          width: "100%",
        }}
      >
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      © {today.getFullYear()} Rahel Teferi. All rights reserved.
    </footer>
  );
};
