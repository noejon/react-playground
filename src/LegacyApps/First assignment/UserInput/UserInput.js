import React from 'react';

const UserInput = (props) => {
  const style = {
    backgroundColor: 'pink'
  }
  return ( 
    <input type="text" onChange={props.changed} value={props.username} style={style}/>
  )
}

export default UserInput;