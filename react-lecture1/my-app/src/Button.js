import React from "react";

function handleClick() {
    alert('Clicked!');
  }
function Button(props) {
    return (
        <div>
            <button onClick={props.click}>{props.name}</button>
        </div>
    )
}

export default Button;