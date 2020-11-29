function range(start, end, step){
    let outcome = []
    if (!start && !end && !step & (start > end) & (step > 0)){
        let difference = end - start;
        console.log(difference)
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