import React, {Component}  from 'react';

const person = (props) => {
  // return <p> I am a person and I am {Math.floor(Math.random() * 30)}</p>
  // return <p>I am {props.name} and I am {props.age} years old.</p>
  return (
    <div>
      <p>I am {props.name} and I am {props.age} years old.</p>
      {/* props.children is a reserverd word, and it yields whatever is in between the opening
      and closing html tags */}
      <p>{props.children}</p>
    </div>
  );
};

export default person;