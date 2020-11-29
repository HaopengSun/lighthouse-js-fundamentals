const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves){
    let originalPosition = [0, 0];
    for (const move of moves){
        if (move === 'north'){
            originalPosition[1] += 1;
        } else if (move === 'south'){
            originalPosition[1] -= 1;
        } else if (move === 'west'){
            originalPosition[0] -= 1;
        } else if (move === 'east'){
            originalPosition[0] += 1;
        }
    }
    return originalPosition
}

console.log(finalPosition(moves));