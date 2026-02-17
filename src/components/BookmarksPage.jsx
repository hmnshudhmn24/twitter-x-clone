import React from "react";
import TweetCard from "./TweetCard";

export default function BookmarksPage({ tweets, onLike, onRetweet, onBookmark }) {
  const bookmarked = tweets.filter((t) => t.bookmarked);

  return (
    <main className="main-feed">
      <div className="feed-header">
        <div style={{ padding: "16px 20px 8px" }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Bookmarks</h2>
          <p style={{ fontSize: 13, color: "#71767b" }}>@yourusername</p>
        </div>
      </div>

      {bookmarked.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔖</div>
          <div className="empty-state-title">Save posts for later</div>
          <div className="empty-state-text">
            Bookmark posts to easily find them again in the future.
          </div>
        </div>
      ) : (
        bookmarked.map((tweet) => (
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
