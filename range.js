function range(start, end, step){
    let outcome = []
    if ((start !== undefined) && (end !== undefined) && (step !== undefined) && (start < end) && (step > 0)){
        let difference = end - start;
        let add = Math.floor(difference / step);
        for (let i = 0; i <= add; i++){
            outcome.push(start + step * i);
        }
        return outcome;
    } else {
        return outcome;
    }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));