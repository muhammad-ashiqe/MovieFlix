import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img
        src="https://r2.erweima.ai/imgcompressed/compressed_a817282a6add85c46f0d930c18917fe4.webp"
        alt=""
        width={100}
        height={100}
      /> */}
      <h2 className="title">MovieFlix</h2>
      <img
        src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
        width={40}
        height={40}
        style={{ borderRadius: "50%" }}
        alt=""
      />
    </div>
  );
};

export default Navbar;
