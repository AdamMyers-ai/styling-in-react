// src/components/example-2-inline-css/Button.jsx

import { useState } from "react";

// const buttonStyle = {
//   backgroundColor: "#b974b6",
//   borderRadius: "8px",
//   color: "white",
//   fontSize: "24pt",
//   padding: "15px 50px",
//   width: "300px",
// };

const Button = ({ buttonText }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <button
      onClick={() => setIsLoggedIn(!isLoggedIn)}
      style={{
        backgroundColor: "dodgerblue",
        borderRadius: "8px",
        color: "white",
        fontSize: "24pt",
        padding: "15px 50px",
        width: "300px",
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
