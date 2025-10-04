# 📝 Todo App

A modern full-stack Todo application built with **Next.js** (App Router) on the frontend and **Express.js** with **Prisma** and **MySQL** on the backend. This repository contains the **frontend** only. The backend is hosted separately.

## 🚀 Features

- 🧾 Create, update, and delete tasks
- 🎨 Task color tagging
- ✅ Completion toggling
- ⚡ Clean and responsive UI
- 🌙 Dark mode supported

## 🖥️ Tech Stack

### Frontend

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root with:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

> ⚠️ Replace the URL with your actual backend URL if hosted elsewhere.

### 4. Run the Development Server

```bash
npm run dev
```

## 📁 Project Structure

```

todo-app/
├── app/                # Next.js App Router Pages
├── components/         # Reusable Components
├── lib/                # Utility Functions
├── services/           # API Calls
└── public/             # Static Assets

```
