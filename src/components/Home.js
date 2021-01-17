import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"

export const Home = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    console.log(state)
    const [value,setValue] = useState("")
    const [category,setCategory] = useState("")
    const [size,setSize] = useState("")
    const brandSearch =(e)=>{
    e.preventDefault()
    dispatch({type:"BRAND_SEARCH",payload:value})
    setValue('')
}
    const categorySearch =(e)=>{
    e.preventDefault()
    dispatch({type:"CATEGORY_SEARCH",payload:category})
    setCategory('')
}
    const sizeSearch =(e)=>{
    e.preventDefault()
    dispatch({type:"SIZE_SEARCH",payload:size})
    setSize('')
}

    return (<div className="main-row">   
    <div className="col">
        <h1>Search By</h1>
        <form  onSubmit={sizeSearch}>
            <input type="text" placeholder="size eg: XL or M or S or M" onChange={(e)=>setSize(e.target.value)}/>
            <button onClick={sizeSearch}></button>
        </form>
        <form onSubmit={categorySearch}>
            <input type="text" placeholder="category eg: men or women" onChange={(e)=>setCategory(e.target.value)}/>
            <button onClick={categorySearch}></button>
        </form>
        <form onSubmit={brandSearch}>
            <input type="text" placeholder="brand eg: allen solly" onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={brandSearch}></button>
        </form>
    </div>
    <div className="row-products">
    {state.products.map((product=>(
        
        <div className="col-25" key={product.id}>
             <img className="product-image"src={product.image} alt="image"/>
             <div>
                 {product.brand}
             </div>
             <div>
                 {product.name}
             </div>
             <div class="row">
             <div className="col-50">
                 <span style={{fontWeight: 700}}>
                     {product.discountPrice}
                     </span>
                     <span style={{color:"green"}}>
                     {product.discountPercentage} %
                     </span>
                 <span style={{textDecoration:"line-through"}}>
                     
                     {product.actualPrice}
                     </span>
             </div>
             </div>
             <div className="sizes">
                     <span> {product.sizes} </span>
             </div>
             </div>
    
    )))}
    </div>
    </div>
   
    )
}
