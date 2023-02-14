import React from 'react'
import { useParams } from 'react-router'
// import { getItemData } from '../BlogItem'
import ItemDetail from './ItemDetail'
import { blogItems } from '../data/data'


const ContainerDetail = () => {

    const {slug} = useParams()
    const post = blogItems.find(post=> post.slug === slug )
    
    return (
        <div className='bg-white'>
            <ItemDetail className="container mx-auto my-8 max-w-4xl " item={post} />
        </div>
    )
}

export default ContainerDetail