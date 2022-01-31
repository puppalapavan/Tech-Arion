import React,{useState} from 'react';
import axios from 'axios';
const Api = () => {
    const[data,setData] = useState(
        {
            email:'',
            message:'',
            name:'',
        });
        const{email,message,name} = data;
        const onChangeHandler = e =>{
            setData({...data,[e.target.name]:[e.target.value]})
        }
        const submitHandler = e =>{
            e.preventDefault();
            if( email==="ramtej.j13@gmail.com"){
                console.log("invalid email")
            }
            else if( message === "This is a basic message"){
                console.log("message not correct")
            }
            else if( name === "ramtejajakka"){
                console.log("message not correct")
            }
            axios.post('https://admin.srkprojects.com/web/api/client/v1/contact-us/',data).then(
                console.log(data)
            )
        }
    return ( 
        <div>
            <form onSubmit={submitHandler}>
                <input type="email" name="email" value={email} placeholder='enter email' onChange={onChangeHandler} />
                <input type="text" name="message"  value={message} placeholder='enter message' onChange={onChangeHandler}/>
                <input type="text" name="name" value={name} placeholder='enter name' onChange={onChangeHandler}/>
                <input type="submit" />
            </form>
        </div>
     );
}
 
export default Api;