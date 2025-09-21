# ByeWind eCommerce Dashboard

A modern eCommerce dashboard built with **React**, **Redux Toolkit**, **Vite**, and **Tailwind CSS**. This project features a responsive UI, dark mode, order management, and interactive charts.

## Features

- 📊 **Dashboard**: Key metrics, projections vs actuals, revenue charts, and top-selling products.
- 🛒 **Order List**: Search, filter, sort, and paginate orders with a responsive table and card view.
- 🌙 **Dark Mode**: Toggle between light and dark themes (auto-detects system preference).
- 🔔 **Notifications & Activities**: Sidebar with notifications, recent activities, and contacts.
- ⚡ **Fast Development**: Powered by Vite for instant hot module reloads.
- 🎨 **Tailwind CSS**: Utility-first styling with custom themes and responsive design.
- 🗃️ **Redux Toolkit**: State management for UI and orders.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
npm install
```

### Development
- Start the development server:

```sh
npm run dev
```

- Open http://localhost:5173 in your browser.


### Project Structure:
src/
  components/        # Reusable React components
  contexts/          # React context providers (e.g., Theme)
  data/              # Sample/mock data
  hooks/             # Custom React hooks
  redux/             # Redux slices and store
  [App.jsx](http://_vscodecontentref_/1)            # Main application component
  [main.jsx](http://_vscodecontentref_/2)           # Entry point
  [index.css](http://_vscodecontentref_/3)          # Global styles (Tailwind)