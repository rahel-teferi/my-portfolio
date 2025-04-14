import React, { useState } from "react";

export const Contact = () => {
  const { user_contact, setUser_contact } = useState({
    name: "",
    email: "",
    message: "",
  });
  const baseURL = "http://localhost:3000";
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser_contact({ ...user_contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newMessage = {
      name: user_contact.name,
      email: user_contact.email,
      message: user_contact.message,
    };

    onSubmitMessage(newMessage);
    // cleanForm(true);
  };
  const onSubmitMessage = async (data) => {
    try {
      const response = await fetch(`${baseURL}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
      console.log(response);
      if (!response.ok) {
        if (response.status === 404) {
          console.log(response);
        } else {
          throw new Error("db problem");
        }
      }
      const result = await response.json();
      console.log(result);
      alert(result.message);
      // await fetchBooks();
      // setCleanForm(true);
    } catch (error) {
      console.log(error);
    }
  };

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
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
          name="name"
          onChange={handleChange}
          // value={user_contact.name}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
          name="email"
          onChange={handleChange}
          // value={user_contact.email}
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          style={{
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
          name="massage"
          onChange={handleChange}
          // value={user_contact.message}
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
