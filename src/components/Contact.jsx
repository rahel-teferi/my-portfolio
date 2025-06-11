import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Contact = () => {
  const [user_contact, setUsercontact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const baseURL = "http://localhost:3000";

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUsercontact({ ...user_contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let newMessage = {
    //   name: user_contact.name,
    //   email: user_contact.email,
    //   message: user_contact.message,
    // };
    openModal();
    // onSubmitMessage(newMessage);
    // // cleanForm(true);
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
          value={user_contact.name}
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
          value={user_contact.email}
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
          value={user_contact.message}
        ></textarea>

        <button
          type="submit"
          onClick={handleSubmit}
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
      {modalIsOpen && (
        <Modal
          open={modalIsOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              height: 200,
              backgroundColor: "white",
              border: "2px solid #000",
              boxShadow: 24,
              p: 6,
            }}
          >
            <Button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                alignContent: "right",
              }}
            >
              close
            </Button>
            <br />
            <Typography id="modal-modal-description" sx={{ p: 6 }}>
              Dear {user_contact.name}, thank you for your message.
            </Typography>
          </Box>
        </Modal>
      )}
    </section>
  );
};
