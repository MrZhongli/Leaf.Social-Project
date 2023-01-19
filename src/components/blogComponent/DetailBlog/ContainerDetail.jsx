import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getItemData } from '../BlogItem'
import ItemDetail from './ItemDetail'



const ContainerDetail = () => {

    const {blogId} = useParams()
    const [Product, setProduct] = useState([])

    useEffect(() => {
        if (blogId === undefined) {
            getItemData().then((resp) => setProduct(resp))
            console.log(getItemData().then((resp) => setProduct(resp)))
        } else {
            getItemData().then((resp) => setProduct(resp[blogId ]))
            console.log(getItemData().then((resp) => setProduct(resp[blogId - 1])))
        }
        // console.log
    }, [blogId])






    return (
        <div className='bg-white'>Este es el container 
            <ItemDetail className="container mx-auto my-8 max-w-4xl " item={Product} />
        </div>
    )
}

export default ContainerDetail