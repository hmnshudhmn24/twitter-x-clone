import React from "react";

const conversations = [
  { id: "c1", user: "Elon Musk", avatar: "EM", color: "#1a1a2e", lastMsg: "Sounds good, let's talk more.", time: "2h", unread: true },
  { id: "c2", user: "Sam Altman", avatar: "SA", color: "#0f3460", lastMsg: "Have you seen the latest paper?", time: "5h", unread: false },
  { id: "c3", user: "Lex Fridman", avatar: "LF", color: "#111", lastMsg: "I'll send you the episode link.", time: "1d", unread: false },
];

export default function MessagesPage() {
  return (
    <main className="main-feed">
      <div className="feed-header">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px 8px" }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Messages</h2>
          <span style={{ fontSize: 22, cursor: "pointer", color: "#1d9bf0" }}>✏️</span>
        </div>
      </div>

      <div style={{ padding: "12px 16px", borderBottom: "1px solid #2f3336" }}>
        <div className="search-box" style={{ marginBottom: 0 }}>
          <span className="search-icon">🔍</span>
          <input className="search-input" placeholder="Search Direct Messages" />
        </div>
      </div>

      {conversations.map((c) => (
        <div
          key={c.id}
          style={{
            display: "flex",
            gap: 12,
            padding: "14px 16px",
            borderBottom: "1px solid #2f3336",
            cursor: "pointer",
            background: c.unread ? "rgba(29,155,240,0.03)" : "transparent",
            transition: "background 0.15s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
          onMouseLeave={e => e.currentTarget.style.background = c.unread ? "rgba(29,155,240,0.03)" : "transparent"}
        >
          <div className="avatar" style={{ background: c.color, width: 48, height: 48, fontSize: 16, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, flexShrink: 0 }}>
            {c.avatar}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: c.unread ? 700 : 500, fontSize: 15 }}>{c.user}</span>
              <span style={{ fontSize: 13, color: "#71767b" }}>{c.time}</span>
            </div>
            <div style={{ fontSize: 14, color: c.unread ? "#e7e9ea" : "#71767b", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {c.lastMsg}
            </div>
          </div>
          {c.unread && (
            <div style={{ width: 10, height: 10, background: "#1d9bf0", borderRadius: "50%", flexShrink: 0, alignSelf: "center" }} />
          )}
        </div>
      ))}
    </main>
  );
}
