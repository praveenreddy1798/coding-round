const initState={
    products:[
        {id:1,name:"Full sleeve",brand:"allen solly",actualPrice: 100,discountPercentage:10,discountPrice:100-(10/100*100),category:"men",sizes:"XL L",image:"https://rukminim1.flixcart.com/image/580/696/ki6bgcw0-0/cap/4/t/d/free-black-men-cap-with-neck-scarf-amormente-original-imafyf2ugjtcaf7g.jpeg?q=50"},
        {id:2,name:"Socks",brand:"socky",actualPrice: 200,discountPercentage:20,discountPrice:200-(20/100*200),category:"women",sizes:"M S",image:"https://rukminim1.flixcart.com/image/580/696/kdhphu80-0/sock/v/4/v/free-ankle-lenght-spun-daffodils-original-imafudwvk8whggn7.jpeg?q=50"},
        {id:3,name:"T-shirt",brand:"vans",actualPrice: 300,discountPercentage:30,discountPrice:300-(30/100*300),category:"men",sizes:"L M",image:"https://rukminim1.flixcart.com/image/580/696/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50"},
        {id:4,name:"cap",brand:"cas",actualPrice: 400,discountPercentage:40,discountPrice:400-(40/100*400),category:"men",sizes:"M S L",image:"https://rukminim1.flixcart.com/image/580/696/jefzonk0/cap/y/g/j/free-m8-hozie-original-imaezvc9g7gesy4a.jpeg?q=50"},
        {id:5,name:"Sweat-shirt",brand:"hasi",actualPrice: 500,discountPercentage:50,discountPrice:500-(50/100*500),category:"men",sizes:"M",image:"https://rukminim1.flixcart.com/image/580/696/kcw9w280/sweatshirt/d/2/z/l-hood-3-colours-himgiri-international-original-imaftxbnmyh5g4uz.jpeg?q=50"},
        {id:6,name:"Pull over",brand:"wovi",actualPrice: 600,discountPercentage:10,discountPrice:600-(10/100*600),category:"men",sizes:" XL M S",image:"https://rukminim1.flixcart.com/image/580/696/kgmla4w0/sweatshirt/r/p/h/l-fc6039-fastcolors-original-imafwtyfw3zynjrp.jpeg?q=50"},
    ] 
}

const ProductsReducer=(state=initState,action)=>{
    switch(action.type){
        case "BRAND_SEARCH":{
            if(action.payload==="")
            return state = initState
           let brandProductsSearch=state.products.find(product=>product.brand.includes(action.payload))
           if(brandProductsSearch){
            state={products:[brandProductsSearch]}
            return state
           }
           else{
               return state= initState
           }
          
        }
        case "CATEGORY_SEARCH":{
            if(action.payload==="")
            return state = initState
           let categoryProductsSearch=state.products.find(product=>product.category.includes(action.payload))
           if(categoryProductsSearch){
            state={products:[categoryProductsSearch]}
            return state
           }
           else{
               return state=initState
           }
           

        }

        case "SIZE_SEARCH":{
            if(action.payload==="")
            return state = initState
           let SizeProductsSearch=state.products.find(product=>product.sizes.split(" ").includes(action.payload))
           if(SizeProductsSearch){
            state={products:[SizeProductsSearch]}
            return state
           }
           else{
               return state=initState
           }
           

        }
        default:{
            return state
        }
    }
}
export default ProductsReducer

