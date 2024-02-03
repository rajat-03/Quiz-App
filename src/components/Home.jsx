import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/quiz-stepper");
  };

  return (
    <main>
      <h2 className="mt-5 text-center">Welcome to online quiz for everyone</h2>
      <div className="mt-5 d-flex justify-content-center align-items-center ">
        <button className="btn btn-primary btn-lg" onClick={handleButton}>
          Take Quiz
        </button>
      </div>
    </main>
  );
};

export default Home;
