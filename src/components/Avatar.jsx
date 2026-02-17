import React from "react";

export default function Avatar({ initials, color, size = "md" }) {
  const sizeClass =
    size === "sm" ? "sm" : size === "lg" ? "lg" : size === "xl" ? "xl" : "";
  return (
    <div
      className={`avatar ${sizeClass}`}
      style={{ background: color || "#333" }}
    >
      {initials}
    </div>
  );
}
