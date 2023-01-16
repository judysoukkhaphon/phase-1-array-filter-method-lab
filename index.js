// Code your solution here
function findMatching(drivers, string) {
    let names=[];
    let decasedString = string.toLowerCase();
    for (let i = 0; i < drivers.length; i++){
        let decasedName = drivers[i].toLowerCase();
        if (decasedName == decasedString){
            names.push(drivers[i]);
        }
    }
    return names;
}

function fuzzyMatch(drivers, string) {
    const names = [];
    const strlen = string.length;
    let match = false;
    for (let i = 0; i < drivers.length; i++){
        for (let s = 0; s < strlen; s++){
            if (drivers[i].charAt(s) === string.charAt(s)){
                match = true;
            }
            else{
                match = false;
            }
        }
        if (match == true){
            names.push(drivers[i]);
        }
    }
    return names;
}

function matchName(driverInfo, string) {
    const driversList = [];
    for(let i = 0; i < driverInfo.length; i++){
           let driverName = driverInfo[i].name;
            if (driverName === string){
                driversList.push(driverInfo[i]);
            }
        
    }
    return driversList;

}