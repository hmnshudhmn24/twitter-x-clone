import React from "react";
import Avatar from "./Avatar";
import { currentUser } from "../data/mockData";

const navItems = [
  { icon: "🏠", label: "Home", page: "home" },
  { icon: "🔍", label: "Explore", page: "explore" },
  { icon: "🔔", label: "Notifications", page: "notifications", badge: 2 },
  { icon: "✉️", label: "Messages", page: "messages" },
  { icon: "📋", label: "Lists", page: "lists" },
  { icon: "🔖", label: "Bookmarks", page: "bookmarks" },
  { icon: "👤", label: "Profile", page: "profile" },
];

export default function Sidebar({ activePage, onNavigate, onOpenCompose }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo" onClick={() => onNavigate("home")}>
        𝕏
      </div>

      <nav>
        {navItems.map((item) => (
          <button
            key={item.page}
            className={`nav-item ${activePage === item.page ? "active" : ""}`}
            onClick={() => onNavigate(item.page)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.badge && (
              <span className="nav-badge">{item.badge}</span>
            )}
          </button>
        ))}
      </nav>

      <button className="post-btn" onClick={onOpenCompose}>
        Post
      </button>

      <button className="sidebar-user" onClick={() => onNavigate("profile")}>
        <Avatar
          initials={currentUser.avatar}
          color={currentUser.avatarColor}
        />
        <div className="sidebar-user-info">
          <div className="sidebar-user-name">{currentUser.name}</div>
          <div className="sidebar-user-handle">@{currentUser.handle}</div>
        </div>
        <span className="sidebar-user-dots">···</span>
      </button>
    </aside>
  );
}
