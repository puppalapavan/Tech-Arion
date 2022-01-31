import React from 'react';
const ButtonIncrement = (props) => {
    return ( 
        <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
    +
    </button>
     );
}
 
export default ButtonIncrement;