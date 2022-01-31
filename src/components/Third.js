import React,{useState} from 'react';
import ButtonIncrement from './ButtonIncrement';
import ButtonDecrement from './ButtonDecrement'
import Display from './Display';
const Third = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 3);
    let decrementCounter = () => setCounter(counter - 3);
   if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }
    return ( 
        <div style={{ width: '18rem',height:'20rem', background:'whitesmoke'}}>
            <h1>Counter</h1>
              <ButtonIncrement onClickFunc={incrementCounter}/>
              <Display message={counter}/> 
              <ButtonDecrement onClickFunc={decrementCounter}/>
          </div>
     );
}
 
export default Third;