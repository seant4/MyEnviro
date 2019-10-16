const pointsReducer = (state = 0, action) =>{
    switch(action.type){
        case "CARPOOL":
            return state + 5;
            break;
        case "WALK":
            return state + 10;
            break;
        case "CAR":
            return state + 5;
            break;
        case "STRAW":
            return state + 5;
            break;
        case "ELECTRICCAR":
            return state + 25;
            break;
        case "LIGHTS":
            return state + 2;
            break;
        case "AC":
            return state + 3;
            break;
        case "SOLAR":
            return state + 25;
            break;
        case "TRASH":
            return state + 5;
            break;
        case "METAL":
            return state + 5;
            break;
        case "COMPOST":
            return state + 15;
            break;
        case "TREE":
            return state + 25;
            break;
        case "GARDEN":
            return state + 25;
            break;
        default: 
            return state;
    }
}

export default pointsReducer;