import React, { useState } from "react";
import TweetCard from "./TweetCard";
import { currentUser } from "../data/mockData";
import { formatCount } from "../utils/helpers";

export default function ProfilePage({ tweets, onLike, onRetweet, onBookmark }) {
  const [activeTab, setActiveTab] = useState("posts");

  const userTweets = tweets.filter((t) => t.userId === "me" || t.handle === currentUser.handle);
  const likedTweets = tweets.filter((t) => t.liked);

  const displayed = activeTab === "likes" ? likedTweets : userTweets;

  return (
    <main className="main-feed">
      <div className="profile-header">
        {/* Back button */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "12px 16px" }}>
          <span style={{ fontSize: 20, cursor: "pointer" }}>←</span>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{currentUser.name}</div>
            <div style={{ fontSize: 13, color: "#71767b" }}>
              {formatCount(userTweets.length)} posts
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="profile-banner">
          <div className="profile-avatar-wrap">
            <div
              className="profile-avatar-img"
              style={{ background: currentUser.avatarColor }}
            >
              {currentUser.avatar}
            </div>
          </div>
        </div>

        {/* Edit button */}
        <div className="profile-actions">
          <button className="edit-profile-btn">Edit profile</button>
        </div>

        {/* Info */}
        <div className="profile-info">
          <div className="profile-name">
            {currentUser.name}
            {currentUser.verified && (
              <span style={{ color: "#1d9bf0", fontSize: 16 }}>✓</span>
            )}
          </div>
          <div className="profile-handle">@{currentUser.handle}</div>
          <div className="profile-bio">{currentUser.bio}</div>
          <div className="profile-stats">
            <div className="profile-stat">
              <strong>{formatCount(currentUser.following)}</strong> Following
            </div>
            <div className="profile-stat">
              <strong>{formatCount(currentUser.followers)}</strong> Followers
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {["posts", "replies", "media", "likes"].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tweets */}
      {displayed.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🐦</div>
          <div className="empty-state-title">No posts yet</div>
          <div className="empty-state-text">
            When you post something, it'll show up here.
          </div>
        </div>
      ) : (
        displayed.map((tweet) => (
          <TweetCard
            key={tweet.id}
            tweet={tweet}
            onLike={onLike}
            onRetweet={onRetweet}
            onBookmark={onBookmark}
          />
        ))
      )}
    </main>
  );
}
