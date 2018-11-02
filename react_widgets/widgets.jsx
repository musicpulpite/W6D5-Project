import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock.jsx';
import Tabs from './frontend/tabs.jsx';

// class Root {
//   return (
//
//   )
// }
const sample = [ {title: "one", content: "1"}, {title: "two", content: "2"}, {title: "three", content: "3"}];

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Tabs el={sample}/>, main);
});
