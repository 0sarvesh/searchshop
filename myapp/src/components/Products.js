import React from 'react'
import { useEffect } from 'react'
function Products() {
useEffect(()=>{
fetch('https://dummyjson.com/products/category/smartphones')
.then(res => res.json())
.then(console.log);

},[])
  return (
    <div>

      
    </div>
  )
}

export default Products
