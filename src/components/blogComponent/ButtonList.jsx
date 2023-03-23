import React from 'react'

const ButtonList = ({categories, filterCategory}) => {

  return (
    <div>
        <div>
            <p className='text-black m-2 text-lg font-bold'>Categorias</p>
              <ul className="menu bg-white w-56 mx-2 ">
                  {categories.map(category => (
                      <div>
                          <li>
                              <p className='text-black text-sm btn-ghost'
                                  onClick={() => filterCategory(category)}
                                  key={category}
                              >{category}</p>
                          </li>
                      </div>
                  ))}
              </ul>
        </div>

    </div>
  )
}

export default ButtonList