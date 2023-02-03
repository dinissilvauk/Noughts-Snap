import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      Blog with ID: {id}
      <button className="border" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
};

export default Blog;
