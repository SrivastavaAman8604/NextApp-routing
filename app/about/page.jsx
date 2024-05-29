import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link href='/' className='text-2xl'>Home Page</Link><br/>
      <Link href='/about/info' className='text-2xl'>About Info Page</Link>
    </div>
  )
}

export default AboutPage
