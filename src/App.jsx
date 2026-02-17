import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeFeed from "./components/HomeFeed";
import RightSidebar from "./components/RightSidebar";
import NotificationsPage from "./components/NotificationsPage";
import ExplorePage from "./components/ExplorePage";
import BookmarksPage from "./components/BookmarksPage";
import ProfilePage from "./components/ProfilePage";
import MessagesPage from "./components/MessagesPage";
import ComposeModal from "./components/ComposeModal";
import { initialTweets, currentUser } from "./data/mockData";
import "./index.css";

export default function App() {
  const [tweets, setTweets] = useState(initialTweets);
  const [activePage, setActivePage] = useState("home");
  const [showCompose, setShowCompose] = useState(false);

  // ── Tweet actions ──────────────────────────────────
  const handleLike = (id) => {
    setTweets((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, liked: !t.liked, likes: t.liked ? t.likes - 1 : t.likes + 1 }
          : t
      )
    );
  };

  const handleRetweet = (id) => {
    setTweets((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, retweeted: !t.retweeted, retweets: t.retweeted ? t.retweets - 1 : t.retweets + 1 }
          : t
      )
    );
  };

  const handleBookmark = (id) => {
    setTweets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, bookmarked: !t.bookmarked } : t
      )
    );
  };

  const handleNewTweet = (text) => {
    const newTweet = {
      id: `my-${Date.now()}`,
      userId: "me",
      user: currentUser.name,
      handle: currentUser.handle,
      avatar: currentUser.avatar,
      avatarColor: currentUser.avatarColor,
      time: "now",
      content: text,
      image: null,
      likes: 0,
      retweets: 0,
      replies: 0,
      views: 0,
      liked: false,
      retweeted: false,
      bookmarked: false,
      verified: currentUser.verified,
      pinned: false,
    };
    setTweets((prev) => [newTweet, ...prev]);
  };

  // ── Page renderer ──────────────────────────────────
  const renderPage = () => {
    const commonProps = { tweets, onLike: handleLike, onRetweet: handleRetweet, onBookmark: handleBookmark };
    switch (activePage) {
      case "home":
        return <HomeFeed {...commonProps} onNewTweet={handleNewTweet} />;
      case "explore":
        return <ExplorePage />;
      case "notifications":
        return <NotificationsPage />;
      case "messages":
        return <MessagesPage />;
      case "bookmarks":
        return <BookmarksPage {...commonProps} />;
      case "profile":
        return <ProfilePage {...commonProps} />;
      default:
        return (
          <main className="main-feed">
            <div className="empty-state" style={{ marginTop: 60 }}>
              <div className="empty-state-icon">🚧</div>
              <div className="empty-state-title">Coming soon</div>
              <div className="empty-state-text">This page is under construction.</div>
            </div>
          </main>
        );
    }
  };

  const showRightSidebar = ["home", "explore", "notifications", "profile"].includes(activePage);

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        onOpenCompose={() => setShowCompose(true)}
      />

      {renderPage()}

      {showRightSidebar && <RightSidebar />}

      {showCompose && (
        <ComposeModal
          onClose={() => setShowCompose(false)}
          onTweet={(text) => {
            handleNewTweet(text);
          }}
        />
      )}
    </div>
  );
}
