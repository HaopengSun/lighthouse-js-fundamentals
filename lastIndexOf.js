function lastIndexOf(elements, target){
    let last_position;
    if ( elements.length > 0){
        for (let i = 0; i < elements.length; i++){
            if (elements[i] === target){
                last_position = i;
            }
        }
        if (last_position !== undefined){
            return last_position;
        } else {
            return -1;
        }
    } else {
        return -1;
    }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);