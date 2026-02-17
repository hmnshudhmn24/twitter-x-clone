import React, { useState } from "react";
import Avatar from "./Avatar";
import { trendingTopics, suggestedUsers } from "../data/mockData";

export default function RightSidebar() {
  const [followed, setFollowed] = useState([]);
  const [search, setSearch] = useState("");

  const toggleFollow = (id) => {
    setFollowed((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <aside className="right-sidebar">
      {/* Search */}
      <div className="search-box" style={{ position: "sticky", top: 0, zIndex: 10 }}>
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Trending */}
      <div className="sidebar-card">
        <h3 className="sidebar-card-title">What's happening</h3>
        {trendingTopics.map((t) => (
          <div key={t.id} className="trend-item">
            <div className="trend-meta">{t.category} · Trending</div>
            <div className="trend-tag">{t.tag}</div>
            <div className="trend-count">{t.tweets} posts</div>
          </div>
        ))}
        <span className="show-more">Show more</span>
      </div>

      {/* Who to follow */}
      <div className="sidebar-card">
        <h3 className="sidebar-card-title">Who to follow</h3>
        {suggestedUsers.map((u) => (
          <div key={u.id} className="suggest-item">
            <Avatar initials={u.avatar} color={u.color} />
            <div className="suggest-info">
              <div className="suggest-name">
                {u.name}
                {u.verified && (
                  <span style={{ color: "#1d9bf0", fontSize: 13 }}>✓</span>
                )}
              </div>
              <div className="suggest-handle">@{u.handle}</div>
            </div>
            <button
              className={`follow-btn ${followed.includes(u.id) ? "following" : ""}`}
              onClick={() => toggleFollow(u.id)}
            >
              {followed.includes(u.id) ? "Following" : "Follow"}
            </button>
          </div>
        ))}
        <span className="show-more">Show more</span>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <a href="#">Terms of Service</a> ·{" "}
        <a href="#">Privacy Policy</a> ·{" "}
        <a href="#">Cookie Policy</a> ·{" "}
        <a href="#">Accessibility</a> ·{" "}
        <a href="#">Ads info</a> ·{" "}
        <a href="#">More</a> · © 2026 𝕏 Corp
      </div>
    </aside>
  );
}
