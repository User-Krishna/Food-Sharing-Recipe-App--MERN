import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexPage from "./pages/IndexPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SignOut from "./pages/SignOut"; // ✅ Updated file name


// Import images correctly
import carbonaraImage from "./pages/images/spaghettiallacarbona.jpg";
import chickenCurryImage from "./pages/images/chicken curry.jpg";

function App() {
  // Store recipes in state
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image: carbonaraImage,
      description: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      price: "Rs.600",
      category: "Italian",
      rating: 4.5,
      cookingTime: "20 minutes",
      servings: 2,
    },
    {
      id: 2,
      name: "Chicken Curry",
      image: chickenCurryImage,
      description: "A rich and spicy chicken curry, perfect with rice.",
      price: "Rs.400",
      category: "Indian",
      rating: 4.2,
      cookingTime: "45 minutes",
      servings: 4,
    },
  ]);

  return (
    <Router>
      <Routes>
        {/* Index Page (First Page with Login & Register Buttons) */}
        <Route path="/" element={<IndexPage />} />
        <Route path="/logout" element={<SignOut />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Protected Routes with Navbar */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <HomePage recipes={recipes} />
            </>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <>
              <Navbar />
              <RecipeDetailPage recipes={recipes} setRecipes={setRecipes} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
