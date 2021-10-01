import {React} from 'react';
import { useState } from "react";
import {useAddress} from '../hooks/addressContext'

const emptyAddress = {city: "", country: ""};

export default function Create(props){
    const {dispatch} = useAddress();
    const [address, setAddress] = useState(emptyAddress);
    const [error, setError] = useState({});

    function handleAddress(e){
        e.persist();
        setAddress((currAddress)=>{
            return {
                ...currAddress, 
               [e.target.id]: e.target.value,
            }
        })
    }
    function handleBlur(e){
        e.persist();
       setError((currErr)=>{
       return {
           ...currErr,
        [e.target.id] : `${e.target.id} is mandetory`
       }
       })
    }
    function submit(){
        if(!address.city){
            setError((currErr)=>{
                return {
                    ...currErr,
                 ["city"] : `city is mandetory`
                }
        });
    }
    if(!address.city){
        setError((currErr)=>{
            return {
                ...currErr,
             ["country"] : `country is mandetory`
            }
    });
}
debugger;
dispatch({type: "add", city: address.city, country: address.country});
setAddress(emptyAddress);
}

    return (<div style={{marginTop: `5vh`}}>
        <div>
            <div>
                <label>City</label>
                <input 
                id="city"
                value={address.city}
                onChange={handleAddress}
                onBlur={handleBlur}
                type="text"/>
            </div>
            {error.city && !address.city && <p>{error.city}</p> }
            <div>
                <label>Country</label>
                <input 
                id="country"
                value={address.country}
                onChange={handleAddress}
                onBlur={handleBlur}
                type="text"/>
            </div>
            {error.country && !address.country && <p>{error.country}</p> }
            <div style={{marginTop: `5vh`}}>
                <button className={"btn btn-primary"} onClick={submit}>Submit</button>
            </div>
        </div>
    </div>);
}