import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css"; // ✅ Make sure global CSS is loaded

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210" // 🔹 Replace with your WhatsApp number (without + or spaces)
      className="whatsapp-float-left"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
