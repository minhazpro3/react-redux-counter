import { DECREMENT, INCREMENT, RESET } from "../constant/counterConst";

const initialStateCounter = {count:0}


 const counterReducers = (state=initialStateCounter, action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count:  state.count > 1 ? state.count - 1  : state.count = 0
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
    
        default:
            return state;
    }
}

export default counterReducers