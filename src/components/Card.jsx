import React from "react";

export const Card = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgba(107, 47, 246, 0.5)",
        margin: "30px",
        width: "300px",
      }}
    >
      <h4 style={{ fontWeight: "600" }}>
        <a
          href={data.link}
          //  href="https://rahel-teferi.github.io/hcs-project/html/index.html"
          target="_blank"
        >
          <img
            style={{
              width: "100%",
              objectFit: "fill",
              height: "230px",
            }}
            src={data.img}
            alt="logo for the project"
          />
          <h5>{data.title}</h5>
          {/* <h5>Amazing Animals: Learn and Quiz!</h5> */}
        </a>
      </h4>
    </div>
  );
};
