import React from 'react'

function Login() {
  return (
    <div className=' h-[600px] bg-black'>
    <div className='h-[500px] w-[500px]  bg-gray-800 border-solid border-red-500 py-8 px-14 ml-80'>
       <h1 className='text-4xl text-white'>Sign In </h1>
       
       <div>
       <input className='border rounded-md border-black mt-9 h-[45px] w-[250px] bg-black text-white' placeholder='Enter your Email'></input>
       </div>

       <div>
       <input className = " border rounded-md border-black mt-4 bg-black h-[45px] w-[250px] text-white"placeholder='Password'></input>
       </div>
       <div>
       <button className='border rounded-md border-black h-[40px] w-[250px] bg-red-700 text-white mt-3' >Sign In</button>
        <h1 className='text-2xl text-white text-center'>OR</h1>
       <button className='border rounded-md border-black h-[40px] w-[250px] bg-gray-500 text-white'>Use a Sign-in</button>
       </div>
      
     
    

    </div>
</div>
  )
}

export default Login;