import React, { useEffect, useState } from 'react'
import { SinglePost } from '../components/SinglePost'
import axios from 'axios';
import { Navbar } from '../components/Navbar';

export const Posts = () => {
    const [data,setData] = useState();
    const baseURL = 'https://dummyapi.io/data/v1'
    useEffect(()=>{
        axios.get(`${baseURL}/post`,{
            headers:{
                "app-id": process.env.REACT_APP_APP_ID
            }
        }).then((response)=>setData(response.data['data']));
    })
    return (
    <>
    <Navbar/>
    <div className='grid-container'>
        {data&&
        data.map((item,index)=>{
                return <SinglePost key={index} postData={item}/>
        })}
    </div>
    </> 
    )
}