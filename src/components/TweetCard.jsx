import React from "react";
import Avatar from "./Avatar";
import { formatCount } from "../utils/helpers";

function renderContent(text) {
  const parts = text.split(/(\s|^)([#@]\w+)/g);
  return parts.map((part, i) => {
    if (/^#\w+/.test(part))
      return <span key={i} className="hashtag">{part}</span>;
    if (/^@\w+/.test(part))
      return <span key={i} className="mention">{part}</span>;
    return part;
  });
}

export default function TweetCard({ tweet, onLike, onRetweet, onBookmark, onReply }) {
  return (
    <article className="tweet-card">
      {tweet.pinned && (
        <div className="pinned-label" style={{ gridColumn: "2" }}>
          📌 Pinned
        </div>
      )}
      <Avatar initials={tweet.avatar} color={tweet.avatarColor} />
      <div className="tweet-body">
        <div className="tweet-header">
          <span className="tweet-name">{tweet.user}</span>
          {tweet.verified && <span className="verified-badge">✓</span>}
          <span className="tweet-handle">@{tweet.handle}</span>
          <span className="tweet-dot">·</span>
          <span className="tweet-time">{tweet.time}</span>
          <button className="tweet-more" title="More options" onClick={e => e.stopPropagation()}>
            ···
          </button>
        </div>

        <p className="tweet-content">{renderContent(tweet.content)}</p>

        {tweet.image && (
          <img src={tweet.image} alt="tweet media" className="tweet-image" />
        )}

        <div className="tweet-actions" onClick={e => e.stopPropagation()}>
          <button
            className="action-btn reply"
            onClick={() => onReply && onReply(tweet)}
            title="Reply"
          >
            <span className="action-icon">💬</span>
            <span className="action-count">{formatCount(tweet.replies)}</span>
          </button>

          <button
            className={`action-btn retweet ${tweet.retweeted ? "active" : ""}`}
            onClick={() => onRetweet(tweet.id)}
            title={tweet.retweeted ? "Undo repost" : "Repost"}
          >
            <span className="action-icon">🔁</span>
            <span className="action-count">{formatCount(tweet.retweets)}</span>
          </button>

          <button
            className={`action-btn like ${tweet.liked ? "active" : ""}`}
            onClick={() => onLike(tweet.id)}
            title={tweet.liked ? "Unlike" : "Like"}
          >
            <span className="action-icon">{tweet.liked ? "❤️" : "🤍"}</span>
            <span className="action-count">{formatCount(tweet.likes)}</span>
          </button>

          <button
            className="action-btn"
            title="Views"
          >
            <span className="action-icon">📊</span>
            <span className="action-count">{formatCount(tweet.views)}</span>
          </button>

          <button
            className={`action-btn bookmark ${tweet.bookmarked ? "active" : ""}`}
            onClick={() => onBookmark(tweet.id)}
            title={tweet.bookmarked ? "Remove bookmark" : "Bookmark"}
          >
            <span className="action-icon">{tweet.bookmarked ? "🔖" : "🏷️"}</span>
          </button>

          <button className="action-btn" title="Share">
            <span className="action-icon">↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}
