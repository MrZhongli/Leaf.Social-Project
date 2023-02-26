import React from 'react'

const ButtonList = ({categories, filterCategory}) => {

    // console.log('esta es la categoria',categories)

  return (
    <div>
        
        <div>
            <ul className="menu bg-white w-56">
                {categories.map(category=> (
                    <li>
                        <p className='text-black text-sm' 
                        onClick={()=>filterCategory(category)}
                        key={category}
                        >{category}</p>
                    </li>
                ))}

              
            </ul>
        </div>

    </div>
  )
}

export default ButtonList