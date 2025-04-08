import React from "react";
import { NavLink } from "react-router-dom";
import pic from "/rahel.png";
import logo2 from "/logo-2.png";
import books from "/books.jpg";

import { Contact } from "../components/Contact";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#f9fafb",
        color: "#1f2937",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          textAlign: "center",
          padding: "2rem",
          background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
        }}
      >
        <img
          src={pic}
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: "12rem",
            height: "15rem",
            marginBottom: "1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Rahel Teferi</h2>
        <p
          style={{ color: "#6b7280", maxWidth: "36rem", margin: "0.5rem auto" }}
        >
          Fullstack developer
        </p>
      </section>
      <section
        id="about"
        style={{ padding: "3rem", maxWidth: "64rem", margin: "0 auto" }}
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          About Me
        </h3>
        <p style={{ color: "#374151", lineHeight: "1.75" }}>
          I'm a Junior full-stack developer with a lot of motivation and hunger
          for learning more about new technologies. I enjoy solving problems,
          collaborating with others, and constantly learning new things.
        </p>
      </section>
      <section
        id="projects"
        style={{
          padding: "2rem",
          backgroundColor: "#ffffff",
          maxWidth: "72rem",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Projects
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "80vw",
            gap: "50px",
            margin: "auto",
          }}
        >
          <Card
            data={{
              link: "https://rahel-teferi.github.io/hcs-project/html/index.html",
              title: "Amazing Animals: Learn and Quiz!",
              img: logo2,
            }}
          />
          <Card
            data={{
              link: "https://library-management-system-fe-diop.onrender.com",
              title: "Library management system",
              img: books,
            }}
          />
        </div>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            margin: "2rem 0",
            textAlign: "center",
          }}
        >
          Other applications
        </h3>
        <div
          style={{
            backgroundColor: "#f3f4f6",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <NavLink to="digitalClock">
            <h5
              style={{
                padding: "1rem 0",
              }}
            >
              Digital Clock
            </h5>
          </NavLink>
          <NavLink to="quoteGenerator">
            <h5
              style={{
                padding: "1rem 0",
              }}
            >
              Random quote generator
            </h5>
          </NavLink>
          <NavLink to="carosel">
            <h5
              style={{
                padding: "1rem 0",
              }}
            >
              Carosel
            </h5>
          </NavLink>
          <NavLink to="shoppingList">
            <h5
              style={{
                padding: "1rem 0",
              }}
            >
              Shopping list
            </h5>
          </NavLink>
          <NavLink to="searchUser">
            <h5
              style={{
                padding: "1rem 0",
              }}
            >
              Search User
            </h5>
          </NavLink>
        </div>
        <a
          href="https://github.com/rahel-teferi?tab=repositories"
          target="_blank"
          style={{
            display: "block",
            marginTop: "1rem",
            color: "#2563eb",
            textDecoration: "none",
          }}
        >
          View more on GitHub
        </a>
      </section>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          margin: "2rem 0",
          textAlign: "center",
        }}
      >
        Skills
      </h3>
      <div
        style={{
          margin: "2rem",
          textAlign: "center",
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <img src="https://skillicons.dev/icons?i=js,html,css,nodejs,expressjs,bootstrap,mui,github,postgresql,mysql,react," />
      </div>
      <Contact />
    </div>
  );
};
