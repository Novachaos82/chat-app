import React from "react";
import { logout } from "../firebase";
import { useState } from "react";
import { useAuth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      navigate("/");
    } catch {
      alert("error");
    }
    setLoading(false);
  };

  return (
    <button
      disabled={loading || !currentUser}
      onClick={handleLogout}
      className="button"
    >
      Log out
    </button>
  );
}

export default Logout;
