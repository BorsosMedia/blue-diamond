import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundScreen() {
  const navigate = useNavigate();
  return (
    <div className="rdrct-ctnr">
      <h1 className="main-ttl">The page has not been found</h1>
      <button className="bttn bttn-try" onClick={() => navigate("/")}>
        Return to home
      </button>
    </div>
  );
}

export default NotFoundScreen;
