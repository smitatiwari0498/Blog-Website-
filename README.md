# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

_________________________________________________________________________________________________



## -------------------------------------------- Mini Blog Website ---------------------------------------------------


##  Application Criaria 

1. Redux – Global state management library for predictable data flow in React apps.
2. Redux Toolkit – Simplifies Redux setup with less boilerplate and better defaults.
3. React Router DOM – Handles navigation and routing between pages in React applications.
4. Appwrite – Provides backend services like authentication, database, and storage via APIs.
5. TinyMCE React – Adds a rich text editor component to React apps.
6. HTML React Parser – Converts HTML strings into React elements safely.
7. React Hook Form – Efficiently manages form state and validation using React hooks.


## ----------------  dependencies Role ---------------------------

##  Redux - Manages global state of your app
Stores logged-in user data
Stores blog list
Handles loading and error states

## Redux Toolkit - Makes Redux simpler and cleaner
Create slices for user and blogs
Handle API calls (fetch, add, update, delete) easily

## React Router DOM - Handles navigation between pages
/login → Login page
/ → Home (blog list)
/add-blog → Add blog
/edit/:id → Edit blog

## Appwrite - Works as your backend
User authentication (login/signup)
Stores blog data in database
Performs CRUD operations

## TinyMCE React - Used to write blogs with formatting
Supports bold, headings, images, etc.
Helps create rich content

##  HTML React Parser- Used to display blog content
Converts HTML content into React elements safely

## React Hook Form - Handles forms efficiently
Login form
Blog create/edit form
Validation and input handling 


## Appwrite → Backend
## Redux Toolkit → State management
## React Router → Navigation
## React Hook Form → Forms
## TinyMCE → Writing blogs
## HTML Parser → Displaying blogs


## ============================================================================================================ 

## 📖 Narrative Blog App
A modern, minimalist, and responsive Blog Application built with React, Appwrite, and Tailwind CSS. This project allows users to share their stories with a clean and professional interface.

## 🏗️ Project Structure & Flow
The project is structured to ensure clean separation of concerns:

##  1. pages/ (The Views)
Home.jsx: The landing page. It displays a banner, an "About" section, and a dynamic list of active blog posts.

AllPost.jsx: Fetches and displays all available blog posts from the Appwrite database.

AddPost.jsx: Provides a form to create new blog content.

EditPost.jsx: Allows authorized users to update existing posts.

Post.jsx: A single-view page that renders the full content of a specific post.

Login.jsx & SignUp.jsx: Handles user authentication.

##  2. components/ (UI Building Blocks)
Header/ & Footer/: Global navigation and footer elements.

PostCard.jsx: A reusable card component to display individual post previews.

AuthLayout.jsx: A wrapper component that protects routes (ensures only logged-in users can access certain pages).

Container/: A wrapper to provide consistent spacing and layout throughout the app.

##  3. appwrite/ (The Backend Logic)
auth.js: Handles user sessions (Login, Logout, Sign Up, and fetching the current user).

config.js: Handles Database and Storage operations (CRUD for posts and file uploads).

##  4. store/ (State Management)
authSlice.js: Manages the authentication state (whether a user is logged in and their userData).

##  ⚙️ How It Works (Workflow)
Authentication: When a user logs in, auth.js interacts with Appwrite to create a session. The authSlice updates the Redux store to status: true.

##  Access Control: The AuthLayout component checks this Redux status. If a user tries to visit /add-post while logged out, they are automatically redirected.

##  Data Fetching: The Home and AllPost components call appwriteService.getActivePosts(). The data (documents) is then mapped to the PostCard component.

##  Interaction: Clicking a PostCard triggers a navigation to /post/:slug. The Post.jsx page uses the slug to fetch specific post details.

##  🚀 Installation & Setup
Clone the repo:

Bash
git clone https://github.com/your-username/narrative-blog-app.git
##  Install dependencies:

Bash
npm install
Configure Environment Variables (.env):
Create a .env file and add:

##  Code snippet
VITE_APPWRITE_URL=...
VITE_APPWRITE_PROJECT_ID=...
VITE_APPWRITE_DATABASE_ID=...
VITE_APPWRITE_COLLECTION_ID=...
VITE_APPWRITE_BUCKET_ID=...
Run the app:

Bash
npm run dev
##  🎨 Design Philosophy
Minimalism: Uses stone and rose color palettes for a warm, sophisticated look.

Responsiveness: Fully responsive using Tailwind CSS grid and flexbox layouts.

Tips for GitHub:
Remember: Keep your .env file in .gitignore. Never push your credentials to GitHub!

Images: Add a screenshots/ folder to your project and include a few images of your dashboard and blog view in this README to make it more professional.

