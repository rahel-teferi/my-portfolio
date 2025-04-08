import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMobileButton } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Carosel.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Carosel = ({ data }) => {
  const [index, setIndex] = useState(0);

  function getPrev() {
    setIndex((index) => {
      if (index === 0) return data.length - 1;
      return index - 1;
    });
  }
  function getNext() {
    setIndex((index) => {
      if (index === data.length - 1) return 0;
      return index + 1;
    });
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <button onClick={() => getPrev(index)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div>
          {data[index].title}
          <br /> {data[index].content}
        </div>

        <button onClick={() => getNext(index)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="caroselBtn">
        {data.map((_, index) => (
          <button key={index} onClick={() => setIndex(index)}>
            <FontAwesomeIcon icon={faMobileButton} />
          </button>
        ))}
      </div>
      <section className="returnLink">
        <p>
          Go back to{" "}
          <a href="#" onClick={() => navigate("/")}>
            Home
          </a>
        </p>
        <p>
          Go back t
          <a href="#" onClick={() => navigate(-1)}>
            Previous page
          </a>
        </p>
      </section>
    </>
  );
};
