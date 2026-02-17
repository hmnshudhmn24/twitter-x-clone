import React, { useState } from "react";
import { trendingTopics } from "../data/mockData";

const categories = ["For you", "Trending", "News", "Sports", "Entertainment", "Technology"];

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("For you");
  const [search, setSearch] = useState("");

  return (
    <main className="main-feed">
      <div className="feed-header">
        <div style={{ padding: "12px 16px" }}>
          <div className="search-box" style={{ marginBottom: 0 }}>
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder="Search X"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="tabs" style={{ overflowX: "auto" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab ${activeCategory === cat ? "active" : ""}`}
              style={{ whiteSpace: "nowrap", flex: "none", padding: "14px 16px" }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Trending section */}
      <div style={{ padding: "16px" }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>
          Trends for you
        </h3>
        {trendingTopics.map((t) => (
          <div
            key={t.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "14px 0",
              borderBottom: "1px solid #2f3336",
              cursor: "pointer",
            }}
          >
            <div>
              <div style={{ fontSize: 13, color: "#71767b" }}>
                {t.category} · Trending
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, margin: "4px 0" }}>
                {t.tag}
              </div>
              <div style={{ fontSize: 13, color: "#71767b" }}>
                {t.tweets} posts
              </div>
            </div>
            <span style={{ fontSize: 20, color: "#71767b" }}>···</span>
          </div>
        ))}
      </div>
    </main>
  );
}
