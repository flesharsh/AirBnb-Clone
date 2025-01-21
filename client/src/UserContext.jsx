import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

export const UserContext=createContext({});

export function UserContextProvider({children}){
    const [user,setUser]=useState(null);
    const [ready,setReady]=useState(false);
    useEffect(()=>{
        if(!user){
           axios.get('/profile').then(({data})=>{
            setUser(data);
            setReady(true);
           })
        }
    },[]);
return(
    <UserContext.Provider value={{user,setUser,ready,setReady}}>
        {children}
    </UserContext.Provider>
);
}