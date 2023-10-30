import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
// import { useState } from "react";

//Simple Test Star Rating
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <>
//       <p>Test Rating</p>
//       <StarRating color="orange" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Test /> */}
    <App />
    {/* <StarRating />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={2}
    />
    <StarRating maxRating={10} size={40} color="cyan" />
    <StarRating maxRating={10} size={40} color="cyan" className="test" /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
