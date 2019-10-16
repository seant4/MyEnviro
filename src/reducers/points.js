const pointsReducer = (state = 0, action) =>{
    switch(action.type){
        case "MOVEMENT":
            return state + 10;
            break;
        case "WASTE":
            return state + 5;
            break;
        case "POWER":
            return state + 2;
            break;
        case "NATURE":
            return state + 15;
            break;
        default: 
            return state;
    }
}

export default pointsReducer;