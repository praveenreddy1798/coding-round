
import {createStore} from "redux"
import ProductsReducer from './ProductsReducer'

const store = createStore(ProductsReducer)
export default store