import React from 'react'
import { useParams } from 'react-router'
import { Product } from '../../blogComponent/data/productData'
import Navbar from '../../NavBar/NavBarTwo'
import P_ItemDetail from './P_ItemDetail'

export const ContainerProductDetail = () => {

  const {slug} = useParams()  
  const item = Product.find(item=> item.slug === slug )

  return (
    <>
    <div>
        <Navbar/>
        <P_ItemDetail props={item} />
    </div>
    </>
  )
}
