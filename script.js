/*********
* REACT
**********/

/*********
* Below code is inspired by boilerplate code from codepen. The licence agreement is below.
**********/

/*********
*Copyright (c) 2020 by Scott Cox (https://codepen.io/iamscottcox/pen/xROoyR)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 
**********/



/* Create Counter component which takes value, onIncrement, and onDecrement as its parameters */
const Counter = ({ value, onIncrement, onDecrement, onReset, onSet }) =>
React.createElement("div", { id: "counter-app" },
    React.createElement("div", { id: "display-container", className: "container" },
React.createElement("p", { id: "display" }, value),
        React.createElement("p", { id: "capacity" })),

React.createElement("div", { id: "buttons-container", className: "container" },
React.createElement("button", { id: "increment-button", className: "button", onClick: onIncrement }, React.createElement("i", { className: "fa fa-plus" })),
    React.createElement("button", { id: "set-button", className: "button", onClick: onSet }, React.createElement("i", { className: "fa fa-caret-down" })),
    React.createElement("button", { id: "decrement-button", className: "button", onClick: onDecrement }, React.createElement("i", { className: "fa fa-minus" })),
React.createElement("button", { id: "reset-button", className: "button", onClick: onReset }, React.createElement("i", { className: "fa fa-refresh" }))));



/* Wrapper function for ReactDOM.render functionality for the app */
const render = () => {
  ReactDOM.render(
  React.createElement(Counter, {
    value: store.getState(),
    onIncrement: () => {
      const val = store.getState();
      if (val < 999) {
        store.dispatch({
          type: 'INCREMENT' });
      }
    },

	onSet: () => {
      store.dispatch({
        type: 'SET' });
    },

    onDecrement: () => {
      const val = store.getState();
      if (val > 0) {
        store.dispatch({
          type: 'DECREMENT' });
      };
    },
    onReset: () => {
      store.dispatch({
        type: 'RESET' });
    }
  }),

  document.getElementById('react-root'));

};

/*********
   * REDUX
   **********/

/* counter takes a default value for state, and an action */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
	case 'SET':
	  count = parseInt(prompt("Please enter current count"));
	  if (count > 0){
	    return count;
      }
	  else
	  return 0;
    default:
      return state;}
};

/* Import { createStore } from 'redux' */
const { createStore } = Redux;
/* store uses counter as its reducer */
const store = createStore(counter);

/* When the state in store changes, use this function */
store.subscribe(render);

/* Initial render */
render();
