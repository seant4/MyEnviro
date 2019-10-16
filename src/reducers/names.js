var today = new Date();
const nameReducer = (names = ["Nothing yet!"], action) =>{
    switch(action.type){
        case "CARPOOLN":
            return [...names, "Carpooled on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "WALKN":
            return [...names, "Walked on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "CARN":
            return [...names, "Invested in an electric car on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "LIGHTSN":
            return [...names, "I turned off the lights on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "ACN":
            return [...names, "I turned off the AC or Heating on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "SOLARN":
            return [...names, "I invested in solar technology on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "TRASHN":
            return [...names, "I picked up trash on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "METALN":
            return [...names, "I used metal straws on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "COMPOSTN":
            return [...names, "I invested in a compost bin on" + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "TREEN":
            return [...names, "I planted a tree on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "GARDENN":
            return [...names, "I started a garden on " +":"+ "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
            break;
        case "STRAWN":
            return [...names, "I used a metal straw on " + "   "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()];
        default: 
            return names;
    }
}

export default nameReducer;
