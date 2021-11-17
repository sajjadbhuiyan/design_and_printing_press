import { useEffect, useState } from "react";

const useServices = () =>{
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://guarded-plateau-66773.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
        
    },[]);
    // return necessary things fro product
    return [services];
}

export default useServices;