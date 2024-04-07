import React from "react";

function XboxTv (){
    return(
       
    <div className="w-full h-[500px] bg-black border  border-red-600 flex items-center justify-center">
        <h1 className="text-white text-center font-extrabold text-5xl pb-5 p-4" >Enjoy on your TV</h1>
        <div className="text-white pt-[120px] text-center items-center justify-center gap-2 ">
        <p className="text-center">Watch on smart TVs, PlayStation, Xbox,</p>
        <p className="text-center"> Chromecast, Apple TV, Blu-ray players</p> 
         <p className="text-center">and more.</p> 
          </div>
     <img className="pl-2" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
    </div>
    )
};
export default XboxTv;