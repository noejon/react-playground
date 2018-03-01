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
    <div className="person">
      <p>I am {props.name} and I am {props.age} years old.</p>
      {/* props.children is a reserverd word, and it yields whatever is in between the opening
      and closing html tags */}
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
      />
      <i  onClick={props.click}>x</i>
    </div>
  );
};

export default person;