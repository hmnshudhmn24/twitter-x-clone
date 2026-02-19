# Twitter Clone

> A pixel-perfect Twitter/X UI clone built with React. Features a dark theme, real-time likes & retweets, tweet composer, trending topics, and a who-to-follow sidebar.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white&style=flat-square)


## ✨ Features

### 📱 Pages
- **Home Feed** — Scrollable tweet feed with "For you" and "Following" tabs
- **Explore** — Trending topics with category filters
- **Notifications** — All activity with like, follow, retweet & reply events
- **Messages** — DM inbox with unread indicators
- **Bookmarks** — Saved posts
- **Profile** — User profile with banner, bio, and stats

### 🎯 Interactions
- ✍️ **Post tweets** with live character counter (280 char limit)
- ❤️ **Like & unlike** with live counter updates
- 🔁 **Retweet & undo** with live counter updates
- 🔖 **Bookmark** posts and view them on the Bookmarks page
- 👥 **Follow / Unfollow** suggested users
- 🔔 **Mark all notifications** as read
- 📝 **Compose modal** (keyboard shortcut: Ctrl/Cmd + Enter to post)
- 🔍 **Search bar** UI
- 📌 **Trending topics** sidebar

### 💅 Design
- Full **dark theme** (just like the real 𝕏)
- Smooth **animations** & micro-interactions
- **Sticky headers** with backdrop blur
- **Responsive layout** (sidebar collapses on small screens)
- Hashtag & mention **syntax highlighting**
- Hover states on all interactive elements



## 🗂 Project Structure

```
twitter-x-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Avatar.jsx           # Reusable avatar component
│   │   ├── Sidebar.jsx          # Left navigation sidebar
│   │   ├── RightSidebar.jsx     # Trending & suggestions
│   │   ├── HomeFeed.jsx         # Main feed page
│   │   ├── TweetCard.jsx        # Individual tweet component
│   │   ├── ComposeModal.jsx     # Full-screen compose modal
│   │   ├── NotificationsPage.jsx
│   │   ├── ExplorePage.jsx
│   │   ├── BookmarksPage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── MessagesPage.jsx
│   ├── data/
│   │   └── mockData.js          # All mock data (tweets, users, notifications)
│   ├── utils/
│   │   └── helpers.js           # Utility functions (formatCount, etc.)
│   ├── App.jsx                  # Root component + routing + state
│   ├── index.css                # Global styles & design system
│   └── index.js                 # React entry point
├── .gitignore
├── package.json
└── README.md
```



## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 14.x
- **npm** >= 6.x or **yarn**

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/twitter-x-clone.git

# 2. Navigate to the project folder
cd twitter-x-clone

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

### Build for Production

```bash
npm run build
```

The `build/` folder is ready to be deployed.


## 🌐 Deploy to GitHub Pages

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "homepage": "https://YOUR_USERNAME.github.io/twitter-x-clone",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```



## 🛠️ Built With

| Technology | Purpose |
|---|---|
| [React 18](https://reactjs.org/) | UI library |
| [Create React App](https://create-react-app.dev/) | Project scaffold |
| CSS Custom Properties | Design tokens / theming |
| React Hooks (useState) | State management |

