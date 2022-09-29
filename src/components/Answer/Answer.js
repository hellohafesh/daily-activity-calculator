import React from 'react';
import './Answer.css';

const Answer = () => {
    return (


        <div className='answer'>

            <details>
                <summary>How Dose React Work</summary>
                While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.

            </details>
            <details>
                <summary>Difference Between Props And state</summary>
                Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
                The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
                Props are used to pass data from one component to another.
                The state is a local data storage that is local to the component only and cannot be passed to other components.
                The this.setState property is used to update the state values in the component.
            </details>
            <details>
                <summary>UseState Work Procidure</summary>
                useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

                This tutorial serves as a complete guide to the useState Hook in React, the equivalent of this.state/this.setSate for functional components. We’ll cover the following in detail:
                Class and functional components in React
                What does the React.useState hook do?
                Declaring state in React
                React Hooks: Update state
                Using an object as a state variable with useState hook
                How to update state in a nested object in React with Hooks
                Multiple state variables or one state object
                Rules for using useState
                The useReducer Hook
            </details>
        </div>
    );
};

export default Answer;