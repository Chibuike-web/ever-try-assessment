# EverTry Frontend Developer Assignment

This repository contains my submission for the **EverTry Frontend Developer React.js assessment**. The goal of this task was to build a simple, clean dashboard application that demonstrates component-based thinking, state management, and attention to UX.

---

## 🧩 Overview

The application includes:

- A basic login flow
- A dashboard layout
- A Todo-style list with add and remove functionality

---

## ✨ Features

### Login Page

- Simple login screen
- On successful login, users are redirected to the dashboard

### Dashboard

- Header with logo and user profile
- Statistic cards based on the Figma design
- "Add to List" functionality

### Todo-style List

- Add new items to the list
- Remove existing items
- Prevents adding empty items
- Clean and minimal interactions

---

## 🛠 Tech Stack

- **React.js**
- **TypeScript**
- **Tailwind CSS** (for styling)
- **Vite** (for development and bundling)

---

## 🧱 Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components (Input, Card, etc.)
├── lib/             # Types, mock data, and helpers
├── pages/           # Page-level components (Login, Dashboard)
├── App.tsx          # App entry and routing
├── main.tsx         # React DOM entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Chibuike-web/ever-try-assessment.git

# Navigate into the project
cd evertry-assignment

# Install dependencies
npm install
```

### Run Locally

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🧠 Design & Implementation Notes

- Components are kept small and reusable
- State is managed using `useState` for simplicity
- UI decisions favor clarity and minimalism
- Tailwind utility classes are used consistently

---
