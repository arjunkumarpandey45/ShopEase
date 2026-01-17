import{configureStore} from '@reduxjs/toolkit'
import cartReducer from './slice'
import productsReducer from './productSlice'
export let store= configureStore({
  reducer:{
    cart:cartReducer,
    products:productsReducer
  }
})