import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignOut.css"; // Importing CSS

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session (if stored in localStorage)
    localStorage.removeItem("user");

    // Redirect to Index page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup function
  }, [navigate]);

  return (
    <div className="signout-container">
      <div className="signout-overlay"></div>

      {/* Moving Food Images */}
      <img src="https://cdn-icons-png.flaticon.com/512/590/590685.png" alt="Burger" className="food-icon food-1" />
      <img src="https://cdn-icons-png.flaticon.com/512/1046/1046786.png" alt="Pizza" className="food-icon food-2" />
      <img src="https://cdn-icons-png.flaticon.com/512/1046/1046753.png" alt="Cupcake" className="food-icon food-3" />
      <img src="https://cdn-icons-png.flaticon.com/512/3480/3480428.png" alt="Sushi" className="food-icon food-4" />

      <div className="signout-box">
        <h2>Thank You for Visiting! 🍽️</h2>
        <p>We appreciate your time. Hope to see you again soon!</p>
        <div className="loader"></div>
        <p className="redirect-msg">Redirecting to homepage in a moment...</p>
      </div>
    </div>
  );
};

export default SignOut;
