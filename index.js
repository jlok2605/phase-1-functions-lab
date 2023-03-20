function distanceFromHqInBlocks(loc){
       return Math.abs (loc-42)
}

function distanceFromHqInFeet(loc){
    return  distanceFromHqInBlocks(loc)*264
}

function  distanceTravelledInFeet (start,end){
    return Math.abs(start-end)*264
}

function calculatesFarePrice (start,end){
    const distance = distanceTravelledInFeet(start,end)

    if(distance <= 400) return 0
    else if (distance > 400 && distance <= 2000) return (distance - 400) * .02
    else if (distance > 2000 && distance <= 2500) return 25 
    else return 'cannot travel that far'
}

console.log(calculatesFarePrice(48,42))