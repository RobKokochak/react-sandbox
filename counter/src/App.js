import {useState } from 'react';

let init;

function InputForm() { 
  const [input, setInput] = useState(0); // useState returns 2 values: the current state and a function that has access to change it (using object desctructuring). Passing in an arg sets the init state.

  // listens for when the value field changes and updates the input state
  const handleInitValChange = (evt) => {
    evt.persist();
    setInput((input) => (evt.target.value));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    init = input;
  }
  // how to pass submitted input as a prop of Counter?

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <label>Enter initial value:
        <input type="text" name="init" placeholder="0, 1, 2, 100, etc." value={ input } onChange={ handleInitValChange } />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

function Counter({ initVal }) {
  console.log(initVal);
  return (
    <>
      <div>
        <h1>{ initVal }</h1>
      </div>
      <button>+1</button>
      <button>-1</button>
      <label> Add or Subtract</label>
    </>
  )
}

export default function App() {

  return (
    <>
      <InputForm />
      <Counter initVal={ init }/>
    </>
  )
}

// basic structure - doesn't work yet