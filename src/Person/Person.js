import React from 'react';
import './Person.css';

const person = (props) => {
return (
    <div  className="Person">
        <h2 onClick={props.click}>Hi, I am {props.name}</h2>
        <p>I am {props.age} years old!</p>
        <input type="text" value={props.name} onChange={props.change}/>

    </div>
    
    )
}
export default person;