# 🍽️ Food Recipe Sharing App (MERN Stack)

The **Food Recipe Sharing App** is a web-based platform where users can **browse, search, and share** food recipes. Users can register/login, submit their own recipes, and explore a variety of dishes shared by others. The app features **advanced search, filtering options, and a modern UI with animations** to enhance the user experience.

## ✨ Features
- ✅ **User Authentication** – Register, login, and manage profiles.
- ✅ **Recipe Search & Filters** – Search by name, category, rating, and dietary preferences.
- ✅ **Add & Manage Recipes** – Users can submit recipes with images and details.
- ✅ **Recipe Reviews & Ratings** – Users can rate and review recipes.
- ✅ **Responsive UI & Animations** – Clean and modern UI with a dark mode option.
- ✅ **Social Media Sharing** – Share recipes on Facebook, Twitter, and more.
- ✅ **Shopping List** – Add ingredients to a personal shopping list.

---

## 📂 Frontend Structure

```sh
frontend/
│── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Main pages (Home, Login, AddRecipe, Profile)
│   ├── context/           # React Context for state management
│   ├── hooks/             # Custom React hooks (if needed)
│   ├── assets/            # Images, icons, styles
│   ├── App.js             # Main React component
│   ├── index.js           # Entry point for React
│   ├── styles.css         # Global styles
│── public/                # Public assets
│── package.json           # Dependencies & scripts
│── README.md              # Documentation
```

### 🚀 Frontend Explanation  

The frontend is built using **React.js** with the following key functionalities:

- **User Authentication** – Users can register and log in using their **email and password**. Authentication is handled using **React Context API** or **Redux**.
- **Recipe Management** – Users can **add, edit, and delete recipes**, each including:
  - ✅ Title  
  - ✅ Ingredients  
  - ✅ Steps  
  - ✅ Image Upload  
  - ✅ Category (Vegetarian, Vegan, Non-Vegetarian, etc.)
- **Recipe Search & Filters** – Users can search recipes by **name, category, rating, or dietary preference**.
- **Reviews & Ratings** – Users can **rate** and **review** recipes, with average ratings displayed as **star icons**.
- **Shopping List Feature** – Users can add ingredients from recipes to a **personal shopping list** (stored in **local storage** for later access).
- **Responsive UI** – Dark mode, animations, and a modern design enhance the experience.

---

## 📂 Backend Structure
```sh
backend/
│── config/            # Database & Authentication Configuration
│── controllers/       # Business Logic for API Endpoints
│── models/            # Mongoose Models (User, Recipe, etc.)
│── routes/            # API Routes (User, Recipe, etc.)
│── middleware/        # Authentication & Validation Middleware
│── server.js          # Main Express Server File
│── package.json       # Project Dependencies & Scripts
│── README.md          # Project Documentation
```

### 🚀 Backend Explanation  

The backend is built with **Node.js, Express.js, and MongoDB**, providing APIs for user authentication, recipe management, and secure data handling.

- **User Authentication** – Users can register and log in with **secure password hashing** using `bcrypt.js`. JWT (JSON Web Token) is used for authentication.
- **Recipe Management** – Users can **add, edit, and delete recipes** with **MongoDB** storing recipe data.
- **Search & Filters** – Users can search recipes by **title, category, rating, or dietary preference**.
- **Security Features** – CORS enabled for frontend-backend communication and JWT Authentication to protect user data.

---

## 📂 Final Project Structure
```sh
food-recipe-app/
│── frontend/                 # Frontend (React.js)
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Main pages (Home, Login, AddRecipe, Profile)
│   │   ├── context/           # React Context for state management
│   │   ├── hooks/             # Custom React hooks (if needed)
│   │   ├── assets/            # Images, icons, styles
│   │   ├── App.js             # Main React component
│   │   ├── index.js           # Entry point for React
│   │   ├── styles.css         # Global styles
│   ├── public/                # Public assets
│   ├── package.json           # Dependencies & scripts
│   ├── README.md              # Documentation
│
│── backend/                   # Backend (Node.js, Express, MongoDB)
│   ├── config/                # Database & Authentication Configuration
│   ├── controllers/           # Business Logic for API Endpoints
│   ├── models/                # Mongoose Models (User, Recipe, etc.)
│   ├── routes/                # API Routes (User, Recipe, etc.)
│   ├── middleware/            # Authentication & Validation Middleware
│   ├── server.js              # Main Express Server File
│   ├── package.json           # Project Dependencies & Scripts
│   ├── README.md              # Documentation
```

---

## 🛠️ Installation & Setup  

Follow these steps to set up and run the project:

```bash
# Clone the repository
git clone https://github.com/yourusername/food-recipe-app.git

# Navigate into the project folder
cd food-recipe-app

# Install frontend dependencies
cd frontend
npm install
npm start

# Install backend dependencies
cd ../backend
npm install
npm start
