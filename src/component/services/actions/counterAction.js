import { DECREMENT, INCREMENT, RESET } from "../constant/counterConst"

export const incrementCount    = ()=>{
    return {
        type: INCREMENT
    }
}

export const decrementCount = ()=>{
    return {
        type: DECREMENT
    }
}

export const reset = ()=>{
    return {
        type: RESET
    }
}