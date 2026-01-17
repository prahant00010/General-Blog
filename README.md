# General Blog

## Overview

General Blog is a modern blog application built with React and TypeScript. The project demonstrates best practices in frontend development, including server-state management, clean component architecture, and responsive UI design. It uses a mock backend powered by JSON Server and focuses on efficient data fetching, caching, and UI consistency.

This repository is intended to evaluate practical knowledge of React, TanStack Query, Tailwind CSS, and shadcn/ui through a real-world style assignment.

---

## Tech Stack

* **React (with TypeScript)** – Component-based UI development
* **TanStack Query** – Server-state management and data fetching
* **Tailwind CSS** – Utility-first styling
* **shadcn/ui** – Reusable and accessible UI components
* **JSON Server** – Mock REST API for backend operations

---

## Features

* View a list of all blog posts
* View blog details by selecting a blog
* Create a new blog post
* Loading and error state handling
* Clean, responsive layout
* Modular and scalable project structure

---

## Installation and Setup

### Prerequisites

* Node.js (v18 or higher)
* Git
* Basic knowledge of React and TypeScript
* Familiarity with TanStack Query, Tailwind CSS, and shadcn/ui

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd general-blog
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install and configure required libraries**

   Follow the official documentation to complete setup:

   * TanStack Query
   * Tailwind CSS
   * shadcn/ui

4. **Start the JSON Server (Backend API)**

   ```bash
   npm run server
   ```

   Backend runs at:

   ```
   http://localhost:3001
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   Frontend runs at:

   ```
   http://localhost:5173
   ```

---

## Application Requirements

### Implemented Tasks

#### 1. Get All Blogs

* Fetch and display all blogs using `GET /blogs`
* Implemented with TanStack Query
* Includes loading and error handling

#### 2. Get Blog by ID

* Display a single blog using `GET /blogs/:id`
* Uses TanStack Query for caching and refetching

#### 3. Create a New Blog

* Form to create a new blog using `POST /blogs`
* Automatically invalidates and refreshes the blog list after creation

---

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/blogs`     | Fetch all blogs   |
| GET    | `/blogs/:id` | Fetch blog by ID  |
| POST   | `/blogs`     | Create a new blog |

---

## Sample Blog Object

```json
{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content..."
}
```



---

## Project Structure (High Level)

```
src/
├── components/
│   ├── ui/
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── BlogDetail.tsx
│   ├── BlogList.tsx
│   └── CreateBlogForm.tsx
│
├── hooks/
│   ├── useBlog.ts
│   ├── useBlogs.ts
│   └── useCreateBlog.ts
│
├── lib/
│   └── utils.ts
│
├── services/
│   └── api.ts
│
├── types/
│   └── blog.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

This structure promotes separation of concerns, reusability, and scalability, closely mirroring real-world frontend application architecture.

---

## Conclusion

General Blog demonstrates practical frontend engineering skills, including working with asynchronous data, modern UI libraries, and clean component-driven design. The project reflects real-world development practices and serves as a strong foundation for scalable React applications.





