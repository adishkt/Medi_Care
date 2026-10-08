import { useEffect, useState } from "react";

function useLocalStorage(key,initialValue){
    const [theme,setTheme]=useState(()=>{
        const storedValue =localStorage.getItem(key);
        if(storedValue){
            return storedValue;
        }
        return initialValue;
    });




    
    useEffect(()=>{
        localStorage.setItem(key,theme);
    },[key,theme]);


    return[theme,setTheme];
    


    

}

export default useLocalStorage;