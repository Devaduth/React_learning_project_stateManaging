import {configureStore} from "@reduxjs/toolkit"
import colorReducer from './color/colorSlice'
import counterReducer from './count/counterSlice'
export default configureStore({
    reducer:{
        color:colorReducer,
        count:counterReducer
    }
})
