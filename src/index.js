import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
}; // reducer = function that modify our data

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" }); // action -> has to be object
countStore.dispatch({ type: "ADD" }); // action -> has to be object
countStore.dispatch({ type: "ADD" }); // action -> has to be object
countStore.dispatch({ type: "ADD" }); // action -> has to be object
countStore.dispatch({ type: "ADD" }); // action -> has to be object
countStore.dispatch({ type: "ADD" }); // action -> has to be object
countStore.dispatch({ type: "ADD" }); // action -> has to be object
countStore.dispatch({ type: "MINUS" }); // action -> has to be object

console.log(countStore.getState());
