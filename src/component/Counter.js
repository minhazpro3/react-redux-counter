import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrementCount, incrementCount, reset } from './services/actions/counterAction';

const Counter = () => {
const count = useSelector(state=>state.count)     
    const dispatch = useDispatch()
const handleIncrement = ()=>{
    dispatch(incrementCount())
}

const handleDecrement = ()=>{
    dispatch(decrementCount())
}
const handleReset = ()=>{
    dispatch(reset())
}

    return (
        <div>
            <h3>Counter App</h3>

            <h2 style={{marginTop: "12px", marginBottom: "12px"}}>Count: {count }  </h2>
            <button onClick={handleIncrement} >Increment</button>
            <button onClick={handleDecrement} >Decrement</button>
            <button onClick={handleReset} >Reset</button>
           
        </div>
    );
};

export default Counter;


// 1. State => count : 0
// 2. action -> increment, decrement, reset
// 3.  reducers -> increment count + 1
                // decrement count - 1
                // reset count  = 0

// 4. store

// root or main file e store use korbo. karon sob child e data jabe

// 5. providing store in react
// 6. use store


