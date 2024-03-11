import React from 'react'
import profilex from "../../DeanPixelP.png";

export default function Footer() {
  return (
        <div className="AXAA mx-auto sm:justify-between sm:flex my-4 border-t-2 py-4 ">
            <div className=' flex flex-wrap' >
            <img
                src={profilex}
                //   src="https://avatars.githubusercontent.com/u/14121234?s=400&u=c4ff30b44d17298cd8a0fded6258b505007fa891&"
                className="rounded-md rounded-r-none  w-[50px] -mt-[10px] "
            />
            
                <div className="font-bold ">
                    <div className="">Deanmark Famoleras</div>
                </div>
            </div>
           <div className='sm:flex gap-2 ml-[50px]'>
           <div> <a className='hover:underline' href="#education">Start</a> </div>
            <div> <a className='hover:underline' href="#about">About</a> </div>
            <div> <a className='hover:underline' href="#Skills">Skills</a> </div>
            <div> <a className='hover:underline' href="#Experience">Experience</a> </div>
            <div> <a className='hover:underline' href="#education">Education</a> </div>
            <div> <a className='hover:underline' href="#education">Resume</a> </div>
           </div>
        </div>
  )
}
