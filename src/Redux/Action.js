import { LOGIN, LOGOUT, SIGNUP } from "./ActionType"

export const signup =(data)=>{

    console.log(data);
    return{
        type : SIGNUP,
        payload : data
    }
};

export const login =(data)=>{
    return{
        type : LOGIN,
        payload : data
    }
}

export const logout=()=>{
    return{
        type : LOGOUT,
    }
}