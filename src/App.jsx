//import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchParams from "./SearchParams";
// import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Learn React"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Bulldog",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "cat",
//       breed: "broe",
//     }),
//     React.createElement(Pet, {
//       name: "Lemon",
//       animal: "bird",
//       breed: "Cockateil",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Learn React V8</h1>
      <SearchParams />;
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);