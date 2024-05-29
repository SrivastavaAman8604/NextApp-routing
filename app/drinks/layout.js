import React from 'react'

const DrinksLayouts = ({ children }) => {
  return (
    <div className='max-w-xl'>
        <div className="mockup-code mb-8">
            <pre data-prefix="$">
                <code>npx create-ext-app@latest NextJs</code>
            </pre>
        </div>
        {children}
    </div>
  )
}

export default DrinksLayouts