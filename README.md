1. What is JSX, and why is it used?

JSX is a special way of writing code in React. It lets us write HTML inside JavaScript. React then changes that into real JavaScript that the browser understands. We use JSX because it makes our code look cleaner and easier to read, like designing the UI directly in the code.

2. What is the difference between State and Props?

State is like a component’s own memory – it can change and update over time. Props are like gifts that a parent gives to a child component. The child can use props, but cannot change them. In short: State changes inside the component, Props come from outside and cannot be changed by the child.

3. What is the useState hook, and how does it work?

useState is a tool in React that helps a component remember something. For example, a counter that starts at 0. With useState(0), React gives us two things: the value (like count) and a function to change it (like setCount). Whenever we call setCount, React updates the value and shows the new result on the screen.

4. How can you share state between components in React?

To share state, we usually keep the state in the parent component and pass it down to children as props. If children need to update it, we also pass a function from the parent. For bigger apps, we can use React’s Context API or libraries like Redux to share state across many components without passing props everywhere.

5. How is event handling done in React?

In React, events (like button clicks) are written in camelCase, for example onClick. We give it a function to run when the event happens. Example:

<button onClick={handleClick}>Click Me</button>

Here, when the button is clicked, the handleClick function will run. React uses something called synthetic events so that events work the same in all browsers.
