import React from "react";

const NavBar = () => {
  return (
    <nav className="shadow-md">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <img
          style={{ width: "50px", height: "50px", marginLeft: "0" }}
          src="https://th.bing.com/th?id=OIF.H2fUiZIPgU%2bKPDe9saJ5gw&w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="logo"
        />
        <h3 className="text-gray-950 font-bold">LIST OF USERS</h3>
      </div>
    </nav>
  );
};

export default NavBar;

