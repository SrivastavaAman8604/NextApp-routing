import React from 'react'
import Link from 'next/link'

const DrinksList = ({drinks}) => {
  return (
    <div>
        <ul className='menu menu-vertical pl-0'>
        {drinks.map((drinks)=>(
            <li key={drinks.idDrink}>
                <Link href={`/drinks/${drinks.idDrink}`} className='7xl'>
                    {drinks.strDrink}
                </Link>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default DrinksList