import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
// import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, user } = useAuth();

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
  //     const response = await fetch("http://localhost:4000/user/", {
  //       method: "GET",
  //       credentials: "include",
  //     });
  //     const data = await response.json();
  //     setUser(data.user);
  //   } catch (error) {
  //     console.error("Error refreshing token:", error);
  //   }
  // };

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    //   try {
    //     const data = await fetch("http://localhost:4000/user/refresh", {
    //       method: "GET",
    //       credentials: "include",
    //     });
    //     const userData = await user.json();
    //     if (userData.ok) {
    //       console.log(userData.token);
    //       setUser(userData);
    //     } else {
    //       setError(data.error);
    //     }
    //     // console.log(user);
    //   } catch (error) {
    //     //   console.log(error);
    //   }
    // }
    try {
      // console.log(JSON.stringify({ username, password }));
      const response = await fetch(
        "https://ims-1-f5qb.onrender.com/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log(data.token);
        setUser(data);
      } else {
        setError(data.error);
      }
      // console.log(user);
    } catch (error) {
      //   console.log(error);
    }

    // const sendRequest = async () => {
    //   const res = await axios
    //     .post("http://localhost:4000/user/login", {
    //       username,
    //       password,
    //     })
    //     .catch((err) => console.log(err));
    //   console.log(res);
    //   const data = await res.data;
    //   console.log(data.user);
    //   setUser(data.data);
    //   return data;
    // };
  }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   sendRequest();
  //   // console.log(user);
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>
      <Link to="/signup">register</Link>
      {error && <h1>{error}</h1>}
    </>
  );
}

export default Login;
