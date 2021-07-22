import {GET_POST_DATA} from "../actions/types";

const initialState={
    postsList:{}
}
const DataReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_POST_DATA :
             return{
                ...state,
                postsList:action.payload
            }
        default:
            return state
    }
}

export default DataReducer