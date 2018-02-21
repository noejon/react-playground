import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return(
    <div>
      <p className='title'>Username:</p>
      <p className='username'>{props.username}</p>
    </div>
  );
}

export default UserOutput;