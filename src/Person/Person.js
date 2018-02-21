import React  from 'react';
import './Person.css';


/**
 *  Application state should only be changed in containers. Use function returning JSX as often as possible
 */

const person = (props) => {
  // return <p> I am a person and I am {Math.floor(Math.random() * 30)}</p>
  // return <p>I am {props.name} and I am {props.age} years old.</p>
  return (
    // Methods can be passed as props
    <div className="person" onClick={props.click}>
      <p>I am {props.name} and I am {props.age} years old.</p>
      {/* props.children is a reserverd word, and it yields whatever is in between the opening
      and closing html tags */}
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.change}
        value={props.name}
      />
    </div>
  );
};

export default person;