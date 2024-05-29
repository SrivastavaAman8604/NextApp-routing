'use client';
import React, {useState} from 'react'

const page = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>{count}</h1>
      <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increment</button>
      <button className='btn btn-primary ml-3' onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default page