import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
  githubProvider,
  signInWithPopup,
  signOut,
} from "../firebase";
import {
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
} from "firebase/auth";
import { FaGoogle, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import "./IndexPage.css";

// Import images for background
import main1 from "../pages/images/l1.jpg";
import main2 from "../pages/images/l2.jpg";
import main3 from "../pages/images/l3.jpg";
import main4 from "../pages/images/l4.jpg";
import main5 from "../pages/images/l5.jpg";
import main6 from "../pages/images/l6.jpg";

function IndexPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [bgIndex, setBgIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const backgrounds = [main1, main2, main3, main4, main5, main6];

  // Check for logged-in user in localStorage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      setUser(loggedUser);
      navigate("/home");
    }
  }, [navigate]);

  // Background Image Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const loggedUser = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };

      localStorage.setItem("user", JSON.stringify(loggedUser));
      setUser(loggedUser);
      navigate("/home");
    } catch (error) {
      setError("Google Sign-In Failed: " + error.message);
      console.error("Google Sign-In Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // GitHub Login with Account Linking
  const handleGithubLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const userData = result.user;
      const email = userData.email || userData.providerData[0]?.email || "No Email";

      const loggedUser = {
        name: userData.displayName || "GitHub User",
        email: email,
        photo: userData.photoURL || "",
      };

      localStorage.setItem("user", JSON.stringify(loggedUser));
      setUser(loggedUser);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const existingEmail = error.customData?.email;
        if (existingEmail) {
          setError(
            `🔴 This GitHub email (${existingEmail}) is already linked with Google. Please log in with Google. 🔄`
          );
        } else {
          setError("This GitHub account is already linked with another provider.");
        }
      } else {
        setError("GitHub Sign-In Failed: " + error.message);
        console.error("GitHub Sign-In Error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Logout Function
  const handleLogout = async () => {
    setLoading(true);
    await signOut(auth);
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    setLoading(false);
  };

  return (
    <div
      className={`landing-page ${darkMode ? "dark-mode" : ""}`}
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    >
      <div className="landing-overlay">
        <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Title & Subtitle */}
        <h1 className="app-title">
          Recipe Sharing App &nbsp; | &nbsp;{" "}
          <span className="app-description">
            Discover, share, and create amazing recipes!
          </span>
        </h1>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <h3>📖 Browse Recipes</h3>
            <p>Explore thousands of delicious recipes shared by the community.</p>
          </div>
          <div className="feature-card">
            <h3>📝 Share Your Own</h3>
            <p>Create and upload your own unique recipes with images and details.</p>
          </div>
          <div className="feature-card">
            <h3>⭐ Rate & Review</h3>
            <p>Leave reviews and rate recipes to help others choose the best dishes.</p>
          </div>
        </section>

        {/* Authentication Section */}
        {user ? (
          <div className="user-section">
            <h2>Welcome, {user.name} 👋</h2>
            <img src={user.photo} alt="Profile" className="user-photo" />
            <button className="logout-btn" onClick={handleLogout} disabled={loading}>
              {loading ? "Logging out..." : "Logout"}
            </button>
          </div>
        ) : (
          <div className="auth-section">
            <button className="btn login-btn" onClick={() => navigate("/login")} disabled={loading}>
              Login
            </button>
            <button className="btn register-btn" onClick={() => navigate("/register")} disabled={loading}>
              Register
            </button>
          </div>
        )}

        <p className="or-text">or</p>

        {/* OAuth Login */}
        <section className="oauth-section">
          <button className="oauth-btn google" onClick={handleGoogleLogin} disabled={loading}>
            <FaGoogle /> {loading ? "Logging in..." : "Login With Google"}
          </button>
          <div className="github-container">
            <button className="oauth-btn github" onClick={handleGithubLogin} disabled={loading}>
              <FaGithub /> {loading ? "Logging in..." : "Login With GitHub"}
            </button>

            {/* Error Message Box - Styled */}
            {error && (
              <div className="error-popup">
                <p>{error}</p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="landing-footer">
          <p>© 2025 Recipe Sharing App - Krishna Das</p>
        </footer>
      </div>
    </div>
  );
}

export default IndexPage;
