function detectPrime(num) {
    var TO = Math.sqrt(num);
    for(var i = 2;i<=TO;i++)
        if(num % i === 0)
            return i;
    return -1;
}
function GCD(nums){
    var res,i;
    i = 2;
    res = GCDTwoNum(nums[0],nums[1]);
    for(;i<nums.length; i++){
        res = GCDTwoNum(nums[i],res);
    }
    return res;
}
function factorize(number){
    var a = parseInt(number);
    var b;
    var iv = [];
    for (b = 2; a > 1; b++)
        while (a % b === 0)
        {
            a /= b;
            iv.push(b);
        }
    return iv;
}
function GCDTwoNum(a, b){
    return b == 0 ? a : GCDTwoNum(b, a % b);
}