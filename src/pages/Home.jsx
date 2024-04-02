import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Home() {
  const { user, setUser } = useAuth();
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/user/", {
  //         method: "GET",
  //         credentials: "include",
  //       });
  //       const data = await response.json();

  //       if (response.ok) {
  //         console.log(data.token);
  //         setUser(data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData(); // Call the async function here
  // }, []); // Dependency array is empty, indicating that this effect runs once

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:4000/user/refresh", {
  //       withCredentials: true,
  //     });
  //     setUser(response.data.user);
  //   } catch (error) {
  //     console.error("Error refreshing token:", error);
  //     setError("Error refreshing token");
  //   }
  // };

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  function handleLogout(e) {
    e.preventDefault();
    setUser(null);
  }

  async function handleVerify() {
    try {
      const data = await fetch("http://localhost:4000/user/refresh", {
        method: "GET",
        credentials: "include",
        // withCredentials: true,
      });
      const userData = await user.json();
      if (userData.ok) {
        console.log(userData.token);
        setUser(userData);
      } else {
        setError(data.error);
      }
      // console.log(user);
    } catch (error) {
      //   console.log(error);
    }
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleVerify}>verify token</button>
      <h1>Hello {user.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
