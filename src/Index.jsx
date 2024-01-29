import { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";

export default function Home(){
    const counter = useSelector((state)=> state.counter);
    const dispatch = useDispatch();

    const increment = ()=>{
        dispatch({type: 'INCREMENT'});
    };

    const decrement = ()=>{
        dispatch({type: "DECREMENT"});
    };

    useEffect(()=>{}, []);
     
    return(
        <>
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        </>
    )

}