import React, { useState, useEffect } from 'react'
import  axios  from 'axios'

function Getapidata() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("error is ", error)
            })
    })
    return (
        <div className=' w-full h-auto px-20 py-16 gird grid-cols-3 gap-10'>
        {data.map(( index ) => (

       <div key={index.id} className='w-96 h-96  border border-red-600 rounded relative'> 
        <li>{index.title}</li>
        <li>{index.body}</li>  


                </div>
))}
                </div>
            )
}

            export default Getapidata;