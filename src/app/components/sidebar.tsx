import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <h1>PORTFOLIO</h1>
      </div>
      <div>
        <ul className='list flex'>
            <li><Link href="/" target="_blank">HOME</Link></li>
            <li><Link href="/intro" target="_blank">ABOUT ME</Link></li>
           
            
            <li><Link href="/contact" target="_blank">CONTACT ME</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar