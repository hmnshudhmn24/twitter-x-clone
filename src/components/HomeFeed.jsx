import React, { useState } from "react";
import TweetCard from "./TweetCard";
import Avatar from "./Avatar";
import { currentUser } from "../data/mockData";

const MAX_CHARS = 280;

export default function HomeFeed({ tweets, onLike, onRetweet, onBookmark, onNewTweet }) {
  const [activeTab, setActiveTab] = useState("forYou");
  const [text, setText] = useState("");

  const remaining = MAX_CHARS - text.length;
  const counterClass = remaining < 0 ? "danger" : remaining < 20 ? "warning" : "";

  const handleSubmit = () => {
    if (!text.trim() || remaining < 0) return;
    onNewTweet(text.trim());
    setText("");
  };

  return (
    <main className="main-feed">
      {/* Header */}
      <div className="feed-header">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "forYou" ? "active" : ""}`}
            onClick={() => setActiveTab("forYou")}
          >
            For you
          </button>
          <button
            className={`tab ${activeTab === "following" ? "active" : ""}`}
            onClick={() => setActiveTab("following")}
          >
            Following
          </button>
        </div>
      </div>

      {/* Compose Box */}
      <div className="compose-box">
        <Avatar initials={currentUser.avatar} color={currentUser.avatarColor} />
        <div className="compose-right">
          <textarea
            className="compose-textarea"
            placeholder="What is happening?!"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if ((e.ctrlKey || e.metaKey) && e.key === "Enter") handleSubmit();
            }}
            rows={2}
          />
          <div className="compose-actions">
            <div className="compose-icons">
              {["🖼️", "🎬", "📊", "😊", "📅"].map((icon, i) => (
                <button key={i} className="compose-icon-btn">{icon}</button>
              ))}
            </div>
            <div className="compose-meta">
              {text.length > 0 && (
                <>
                  <span className={`char-counter ${counterClass}`}>{remaining}</span>
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

      {/* Tweet Feed */}
      {tweets.map((tweet) => (
        <TweetCard
          key={tweet.id}
          tweet={tweet}
          onLike={onLike}
          onRetweet={onRetweet}
          onBookmark={onBookmark}
        />
      ))}
    </main>
  );
}
