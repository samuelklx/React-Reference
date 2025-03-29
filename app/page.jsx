/* Next.js uses a file-based routing system, which means that the file structure of your project determines the routes of your application. The app directory is where you will create your application’s pages.Page.js is what the url will point to, and will load the front end of the app. Each folder points to a new page in the webapp; each corresponds to a route in your application. For example, if you create a file called page.js in the pages directory, it will be accessible at the root URL of your application (e.g., http://localhost:3000/).
 */

"use client"; // This is a client component, which means it will be rendered on the client side.
import { useState } from "react";
import LikeButton from "./like-button.jsx"; // Import the LikeButton component from the like-button.jsx file.
// This allows us to use the LikeButton component in our main application.
function Header({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}

export default function HomePage() {
  // export allows a component (function) to be imported into other files. This is a client component, which means it will be rendered on the client side.
  // default export allows the component to be imported without using curly braces. only one default export is allowed per file.
  const names = [
    "Ada Lovelace",
    "Grace Hopper",
    "Marie Curie",
    "Rosalind Franklin",
  ];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header title="Develop. Preview. Ship" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
      {/* Use the LikeButton component here. This will render the like button on the page. 
      This component replaced the old button inline.  Now that LikeButton has been turned into a client component, it can be reused to simplify code. */}
    </div>
  );
}

// Now that we have the basic structure of our Next.js application, we can start building out the rest of the application. Next.js provides a lot of features out of the box, such as server-side rendering, static site generation, and API routes. We will cover these features in more detail in the following sections.
// One cool next.js feature is the ability to run a development server that will automatically reload your application when you make changes to your code. To start the development server, run the following command in your terminal. There is a command to do so in the package.json file, so check that out next.
