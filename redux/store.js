import{createSlice,configureStore} from '@reduxjs/toolkit'
import Login from './../src/pages/Login';
const authSlice=createSlice({
    name:'auth',
    initialState:{
        isLogin:false,
    },
    reducers:{
        Login(state){
            state.isLogin=true
        },
        Logout(state){
            state.isLogin=false
        }
    }
})
export const authActions=authSlice.actions
export const store=configureStore({
    reducer:authSlice.reducer
})