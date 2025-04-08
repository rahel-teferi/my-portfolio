import { Link, useNavigate } from "react-router-dom";
import "../quoteGenerator/QuoteGenerator.css";
export const QuoteGenerator = ({ data, fetchNewQuote }) => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ padding: "50px", textAlign: "center" }}>
        Random quote Generator
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "lightgrey",
          margin: "auto",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <button
          type="button"
          onClick={fetchNewQuote}
          style={{
            padding: "5px",

            borderRadius: "8px",
            border: "2px solid grey",
          }}
        >
          Load more
        </button>
        <blockquote>"{data.quote ? data.quote : ""}"</blockquote>
      </div>
      <section
      // style={{ margin: "100px 20px" }}
      >
        <p>
          Go back to <Link to="/">Home</Link>
        </p>

        <p>
          Go back to{" "}
          <a href="#" onClick={() => navigate(-1)}>
            Previous page
          </a>
        </p>
      </section>
    </div>
  );
};
