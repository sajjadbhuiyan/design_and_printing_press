import { useEffect, useState } from "react";

const useServices = () =>{
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://sajjadbhuiyan.github.io/doctor_sitit_service/services.json')
        .then(res => res.json())
        .then(data => setServices(data));
        
    },[]);
    // return necessary things fro product
    return [services];
}

export default useServices;