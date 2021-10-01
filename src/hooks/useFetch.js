import { useState, useEffect } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
    async function init(){
        try{
            debugger;
            const response = await fetchData(url);
            if(response){
               // const json = response.json();
                setData(response);
            }
            else{
                throw response;
            }
        }
        catch(e){
            setError(e);
        }
        finally{
            setLoading(false);
        }
    }
    init();
}, [url])
return {data, error, loading}
}

async function fetchData(){
    debugger;
    await timeoutResolver(5000);
    var data = [{fname: "Preetam", lname: "Chauhan"},
    {fname: "Preetam1", lname: "Chauhan1"},
    {fname: "Preetam2", lname: "Chauhan2"}];
    return data;
}
function timeoutResolver(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(true);
      }, ms);
    });
  }