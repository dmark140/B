import { LinkedIn } from '@mui/icons-material'
import React from 'react'

export default function Contact() {
  return (
    <div>

      <h1 className="font-sans font-bold text-4xl TITLE  pb-5 ">Contact</h1>
    <div className=' -space-y-1'>
        
        <div className='ml-[26px] text-sm opacity-80'>
        My LinkedIn
        </div>
        <div className='flex'>
        <LinkedIn />  <a href="#" className='hover:underline ml-[2px]'>/in/Dmark</a>
        </div>
    </div>
    </div>
  )
}
