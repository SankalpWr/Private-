import { GET_DATA,SET_DATA } from "../Actions/card";

const initialState = {
    loading:false,
    card:[]
}

export const cardReducer = (state = initialState,action)=>{
    switch(action.type){
        case GET_DATA:
            return{
                loading:true,
                card:[]
            }
        case SET_DATA:{
            console.log("Inside reducer",action.payload)
            return {
                loading:false,
                card:action.payload
            }
        }
        default:
            return state
    }
}