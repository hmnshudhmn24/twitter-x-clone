import React, { useState, useRef, useEffect } from "react";
import Avatar from "./Avatar";
import { currentUser } from "../data/mockData";

const MAX_CHARS = 280;

export default function ComposeModal({ onClose, onTweet }) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleKey = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleSubmit();
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleSubmit = () => {
    if (!text.trim() || text.length > MAX_CHARS) return;
    onTweet(text.trim());
    onClose();
  };

  const remaining = MAX_CHARS - text.length;
  const counterClass =
    remaining < 0 ? "danger" : remaining < 20 ? "warning" : "";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>✕</button>
          <span style={{ fontSize: 15, color: "#1d9bf0", fontWeight: 700 }}>
            Drafts
          </span>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Avatar
            initials={currentUser.avatar}
            color={currentUser.avatarColor}
          />
          <div style={{ flex: 1 }}>
            <textarea
              ref={textareaRef}
              className="compose-textarea"
              placeholder="What is happening?!"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKey}
              rows={5}
              style={{ fontSize: 20 }}
            />

            <div
              style={{
                borderTop: "1px solid #2f3336",
                paddingTop: 12,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <div className="compose-icons">
                {["🖼️", "🎬", "📊", "😊", "📅", "📍"].map((icon, i) => (
                  <button key={i} className="compose-icon-btn">
                    {icon}
                  </button>
                ))}
              </div>
              <div className="compose-meta">
                {text.length > 0 && (
                  <>
                    <span className={`char-counter ${counterClass}`}>
                      {remaining}
                    </span>
                    <div className="char-divider" />
                  </>
                )}
                <button
                  className="tweet-submit-btn"
                  onClick={handleSubmit}
                  disabled={!text.trim() || remaining < 0}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
