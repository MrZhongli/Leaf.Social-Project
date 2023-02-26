import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/NavBarTwo';
import { getItemData } from './BlogItem';
import BlogProduct from './BlogProduct';
import ButtonList from './ButtonList';
import CarouselBlog from './CarouselBlog';
import { blogItems } from './data/data';

const BlogContainer = () => {

  const [product, setProduct] = useState(blogItems);
  
  // useEffect(() => {

  //   // getItemData().then((props) => {
  //   //   setProduct(props)

  //   // })
  //   setProduct(blogItems)
    
  // }, [])
  
  const allCategories = [ "todos",...new Object(blogItems.map(article => article.category))]
  
  console.log("allcategories",allCategories)
  const [categories, setCategories] = useState(allCategories)
  
  

  const filterCategory = (category) =>{
    console.log(category)
    if(category === "todos"){
      setProduct(blogItems)
      console.log(category)
    }else{
      const filteredData = blogItems.filter(article => article.category === category)
    console.log(filteredData)
    setProduct(filteredData)
    }
    
  }
  
  return (
    <>
    <Navbar/>
    <div className='text-5xl bg-white '>
      <CarouselBlog/>
      
      <div className='flex flex-row flex-wrap justify-center p-10'>
        <ButtonList  categories={categories} filterCategory={filterCategory} />

    {
      product.map(p=>
        <BlogProduct key={p.id}  product={p}/>
        )
    }
        
      </div>
    </div>
    </>
  )
}

export default BlogContainer