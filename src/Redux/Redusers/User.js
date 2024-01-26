import { LOGIN, LOGOUT, SIGNUP } from "../ActionType"

let initialState ={
    UserData:{},
    isLogin:false,
}

export const User=(state=initialState , {type ,payload})=>{
    switch(type){
        case SIGNUP:
            return{
                ...state,
                UserData: payload,
                isLogin: true
            }

        case LOGIN:
            return {
                ...state,
                UserData: payload,
                isLogin:true
            }

        case LOGOUT:
            return{
                ...state,
                UserData: {},
                isLogin:false
            }

        default:
            return state;
    }
}