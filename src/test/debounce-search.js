import React, {useEffect, useRef, useState} from "react";
import { delay } from "redux-saga/effects";

export default function DebounceSearch(){
    const [value, setValue] = useState("");
    const [debounceValue, setDebounceValue] = useState("");
    const timeOutRef = useRef(null);

    const handleChange = (e) => {
     const inputValue = e.target.value;

     if(timeOutRef.current){
      clearTimeout(timeOutRef.current)
     }
     timeOutRef.current = setTimeout(() => {
        setValue(inputValue);
     }, 5000)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit", value);
    }
    

    useEffect(() => {
       if(value){
        setDebounceValue(value);
       }
    }, [value]);

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
           <input type="text" onChange={(e) => handleChange(e)}/>
        </form>
    )
}