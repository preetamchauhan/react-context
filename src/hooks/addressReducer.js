export default function AddressReducer(address, action){
    const {city, country} = action;
    switch (action.type){
        case "add":
        return [...address, {city: city, country: country}];
        case "delete":
            return address.filter(a=> a.city!== city || a.country!==country);
        default:
            return []; 
    }
}