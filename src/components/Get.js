import React,{useState,useEffect} from 'react';
import Gets from './Gets.css'
import axios from 'axios';
const Get = () => {
    const[data,setData] = useState([])
    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            response => setData(response.data)
        )
    },[])
    return ( 
        <div className='layout'>
            {data.map( items => <li key={items.id}>{items.title}</li>)}
        </div>
     );
}
 
export default Get;