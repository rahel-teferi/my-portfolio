import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      style={{ padding: "2rem", maxWidth: "48rem", margin: "0 auto" }}
    >
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Get in Touch
      </h3>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          style={{
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "0.375rem",
            border: "none",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
};
