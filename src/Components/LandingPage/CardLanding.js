import React from 'react'
import Arrowx from './Arrowx'

export default function CardLanding() {
  return (
    <div className="mt-4 flex bg-white rounded-md w-[614px] h-80 shadow-md mx-auto">
      {/* Picture */}
      <div className=" w-1/2 bg-[#c3c3c3]  rounded-md rounded-r-none relative">
      <img
            src="https://avatars.githubusercontent.com/u/14121234?s=400&u=c4ff30b44d17298cd8a0fded6258b505007fa891&"
         className="rounded-md rounded-r-none  absolute bottom-0 "
          />
      </div>
      <div className=" w-1/2  ">
          <div className="MKAX  text-5xl mx-auto w-fit mt-2">Howdy!</div>
          <div className="w-fit mx-auto mt-6 text-center"> 
          🙌 Thanks for making it! 🎉 <br/>
          Hi I'm Dean, <br/>
        <div className="w-[300px] text-gray-400">
        I like making dynamic and imaginative 
          products from beginning to end. 
          Dedicated to creating user-friendly
          experiences that continuously get better 
          through user feedback.
        </div>
          </div>
        <div className="mx-auto w-fit mt-7">
        <div className='flex'>
        <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
            <path d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h5.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H17c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z"></path>
          </svg>
          </a>
          <a>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
          </svg>
          
          </a>
        
            <div className="absolute">
                <Arrowx text="it's my resume!!"/>
            </div>

        </div>
          </div>
      </div>
</div>
  )
}
