import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../utils/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();
  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);
  return (
    <div className=" contianer hero min-h-screen bg-base-200">
      <div className="hero-content text-center ">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
          <p className="py-6">
            Join the conversation, talk with random peoper, and make connections
            in one shared room.
          </p>
          <button onClick={handleLogin} className="btn">
            Login With Google
          </button>
        </div>
        <div className="">
          <img
            className="object-contain "
            src="https://cdn.pixabay.com/photo/2021/10/05/14/35/girl-6682881_1280.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
