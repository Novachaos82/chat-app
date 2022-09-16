import React from "react";
import { logout } from "../firebase";
import { useState } from "react";
import { useAuth } from "../firebase";
function Logout() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
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
