# DRAGON NEWS

A modern, responsive news portal built with Next.js.  
Dragon News delivers breaking stories, category-based browsing, and secure authentication with email/password and social providers.

## Live Demo

- [dragon-news-next-project-lime.vercel.app](https://dragon-news-next-project-lime.vercel.app/)

## Project Overview

Dragon News is designed as a clean and user-friendly news platform where readers can:

- Browse featured and breaking news
- Explore categorized stories
- Read detailed article pages
- Authenticate with email/password
- Sign in with social providers (Google/GitHub)
- Enjoy dark/light theme support

## Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- DaisyUI
- Next Themes
- React Hook Form
- React Icons

### Backend and Auth

- Next.js API routes
- Better Auth
- MongoDB (official Node.js driver)
- Better Auth MongoDB adapter

### Deployment

- Vercel

## Key Features

- Clean, responsive UI for desktop and mobile
- Dynamic news listing and detail views
- Breaking news marquee section
- Authentication flow:
  - Email/password sign up and login
  - Google and GitHub social login
- User session-aware navbar
- Theme toggle (light/dark mode)

## Getting Started

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd dragon-news-next
```

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment variables

Create a `.env.local` file in the project root:

```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

MONGODB_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### 4) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Notes

- Set all required environment variables in Vercel Project Settings.
- Keep `BETTER_AUTH_URL` equal to your production domain.
- Add your deployed callback URLs to Google/GitHub OAuth app settings.

## Scripts

```bash
npm run dev     # Start dev server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Folder Structure (high level)

```text
src/
  app/                  # App Router pages and layouts
  components/           # UI sections and shared components
  lib/                  # Auth client/server setup
public/                 # Static assets
```

## Contributing

Contributions, issues, and feature requests are welcome.  
If you want to improve UI, performance, or add features, feel free to open a PR.

---

If you like this project, consider giving it a star.
