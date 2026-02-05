import { useAuth } from "../context/AuthContext";

const { isLoggedIn, logout } = useAuth();

{isLoggedIn && (
  <button onClick={logout}>Logout</button>
)}
