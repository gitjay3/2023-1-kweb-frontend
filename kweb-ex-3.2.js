function getDivisors(x){
    const list = [];
    for (let i=1; i <= Math.sqrt(x); i++){
        if (i*i===x) list.push(i);
        else if (x % i === 0) list.push(i, x/i);
    };
    return list.sort((first, second) => first - second);
};