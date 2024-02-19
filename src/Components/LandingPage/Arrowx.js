import React from 'react'

export default function Arrowx(p) {
  return (
   <div>
     <div className="w-[100px]" style={{
        rotate:"180deg"
     }}>         
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
    xmlnsxlink="http://www.w3.org/1999/xlink"
     xmlnssvgjs="http://svgjs.dev/svgjs" 
     viewBox="0 0 800 800"><g stroke-width="10" stroke="hsl(0, 0%, 0%)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M255.97421741485596 250Q182.97421741485596 447 555.974217414856 550 " marker-end="url(#SvgjsMarker1089)"></path></g><defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1089"><polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(0, 0%, 0%)"></polygon></marker></defs></svg>
    
    </div>
    <div className="ml-[40px] -mt-[25px] MKAX">{p.text}</div>
   </div>
  )
}
