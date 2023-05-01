import React, { createContext, useEffect, useState } from "react";
/**
 * Import app from firebase/index to desplegate firebase.
 */
import { app } from "./firebase/index";
import Header from "./components/header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { Toaster } from "react-hot-toast";
import Shopping from "./routes/Shopping";
import Footer from "./components/footer";
/**
 * Create the context and its exportation to use it in each component
 */
export const AppContext = createContext(null);

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogged = localStorage.getItem(`user`);
    if (userLogged) setUser(JSON.parse(userLogged));
  }, []);

  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <div className="h-screen">
        <Toaster position="top-center" reverseOrder={false} />
        <Header></Header>
        <main className="p-6 py-24">
          {route === "home" && <Home />}
          {route === "login" && <Login />}
          {route === "register" && <Register />}
          {route === "shopping" && <Shopping />}
          {user && <p>Usuario logueado: {user.email}</p>}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
