###React Basic Concepts – README
1. What is JSX, and why is it used?

JSX means JavaScript XML. It lets you write HTML-like syntax directly inside JavaScript code in React components. JSX makes the UI easier to understand and manage because you can combine both design and logic in one place. It is later converted into regular JavaScript using a compiler like Babel. Developers use JSX because it makes components simpler, readable, and more expressive.


---


2. What is the difference between State and Props?
State is data that belongs to a component and can be changed inside it. It is mainly used to handle dynamic content or user interaction.
Props are read-only data sent from one component to another, usually from a parent to a child component. They cannot be changed by the receiving component.
In short, state changes inside a component, but props come from outside and remain fixed unless the parent updates them.

---


3. What is the useState Hook, and how does it work?
useState is a built-in React Hook that allows functional components to store and update state values. It returns two things — the current value and a function to update that value.
When the update function is called, React re-renders the component with the new value. For example:

const [count, setCount] = useState(0);


Here, count stores the value and setCount updates it.


---


4. How can you share state between components in React?
To share state between components, you can lift the state up to a common parent and pass it down as props to the children. This way, multiple components can access and update the same state.
For more complex cases, you can use the Context API to provide global state that any component can access without passing props manually. For large apps, external libraries like Redux or Zustand can also be used.


---


5. How is event handling done in React?
Event handling in React is done using camelCase syntax such as onClick, onChange, or onSubmit. Instead of writing event names as strings, you pass them as functions.

