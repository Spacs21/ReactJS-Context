export const initialState = {
    count: 0,
    theme: false
}
export const reducer = (state, action) => {
    let offest = 1
    switch(action.type){
        case "INC":
            return {...state, count: state.count + offest}
        case "DEC":
            return {...state, count: state.count >= 1 ? state.count - 1 : 0}
        case "CLR":
            return {...state, theme: !state.theme }
        default:
            return state
    }
}