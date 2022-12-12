import React from 'react';
import ReactDOM from 'react-dom';

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Learn React"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Bulldog",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "cat",
      breed: "broe",
    }),
    React.createElement(Pet, {
      name: "Lemon",
      animal: "bird",
      breed: "Cockateil",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
