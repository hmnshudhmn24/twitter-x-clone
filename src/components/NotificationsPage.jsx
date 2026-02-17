import React, { useState } from "react";
import Avatar from "./Avatar";
import { notifications as initialNotifs } from "../data/mockData";

const typeIcon = {
  like: "❤️",
  follow: "👤",
  retweet: "🔁",
  reply: "💬",
  mention: "🔔",
};

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState(initialNotifs);
  const [activeTab, setActiveTab] = useState("all");

  const markAllRead = () => {
    setNotifs(notifs.map((n) => ({ ...n, read: true })));
  };

  const filtered =
    activeTab === "mentions"
      ? notifs.filter((n) => n.type === "reply" || n.type === "mention")
      : notifs;

  return (
    <main className="main-feed">
      <div className="feed-header">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 16px 0",
          }}
        >
          <h2 className="feed-header-title" style={{ padding: 0 }}>
            Notifications
          </h2>
          <button
            onClick={markAllRead}
            style={{
              background: "none",
              border: "none",
              color: "#1d9bf0",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Mark all read
          </button>
        </div>
        <div className="tabs">
          <button
            className={`tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`tab ${activeTab === "mentions" ? "active" : ""}`}
            onClick={() => setActiveTab("mentions")}
          >
            Mentions
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔔</div>
          <div className="empty-state-title">No notifications yet</div>
          <div className="empty-state-text">
            When someone likes or replies to your posts, you'll see it here.
          </div>
        </div>
      ) : (
        filtered.map((notif) => (
          <div
            key={notif.id}
            className={`notif-item ${!notif.read ? "unread" : ""}`}
          >
            <div className="notif-icon">{typeIcon[notif.type] || "🔔"}</div>
            <div style={{ display: "flex", gap: 10, flex: 1 }}>
              <Avatar
                initials={notif.avatar}
                color={notif.avatarColor}
                size="sm"
              />
              <div className="notif-content">
                <div className="notif-text">
                  <strong>{notif.user}</strong> {notif.content}
                </div>
                <div className="notif-time">{notif.time}</div>
              </div>
            </div>
          </div>
        ))
      )}
    </main>
  );
}
