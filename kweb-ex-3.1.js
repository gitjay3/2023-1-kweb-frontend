function isValidNumber(x){
    const result = parseInt(x);
    if(!isFinite(result)) return false;
    if(result != x) return false;
    if(result>=1 && result<=9) return true;
    else return false;
};
