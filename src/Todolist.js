import React from 'react';

function Todolist(props) {
  return (
    <>
      <li>
        {props.item}
        <hr />
        <i className="fa fa-times" onClick={() => props.onSelect(props.id)}></i>
      </li>
    </>
  );
}

export default Todolist;
