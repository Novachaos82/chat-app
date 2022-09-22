import React from "react";
import { logout } from "../firebase";
import { useState } from "react";
import { useAuth } from "../firebase";

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
      className="bg-blue-600 text-white px-4  py-2 rounded-md font-semibold"
    >
      Log out
    </button>
  );
}

export default Logout;
