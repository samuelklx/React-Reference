/* 
# like-button.jsx
This is a simple React component that renders a button to like something.
Client components render, or are processed on the client side, and can use hooks like useState.
The LikeButton() component uses the useState hook to manage the number of likes.
This component will be exported to page.jsx to be used in the main application.
*/

"use client"; // This directive indicates that the component is a client component.
// Client components can use hooks like useState, which is necessary for managing state in functional components.

import { useState } from "react";

// The LikeButton component uses the useState hook to manage the number of likes.
// It initializes the likes state to 0 and provides a function to increment the likes count when the button is clicked.
export default function LikeButton() {
  const [likes, setLikes] = useState(0); // Initialize state to keep track of likes

  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
