export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';

export const getData = ()=>{
    return{
        type:GET_DATA,
    }
}

export const setData = (data)=>{
    console.log("Inside action",data);
   return {
      type:SET_DATA,
      payload:data
   }
}
