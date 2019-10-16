var today = new Date();

const nameReducer = (names = ["Nothing yet!"], action) =>{
    switch(action.type){
        case "NAMEMOVEMENT":
            return [...names, "Movement" +":"+ "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "NAMEWASTE":
            return [...names, "Waste" +":"+ "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "NAMEPOWER":
            return [...names, "Power" +":"+ "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "NAMENATURE":
            return [...names, "Nature"+":"+ "   " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()]
            break;
        case "REMOVE":
            
        default: 
            return names;
    }
}

export default nameReducer;