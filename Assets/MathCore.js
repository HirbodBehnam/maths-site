function detectPrime(num) {
    if(num === 2 || num === 3 || num === 5 || num === 7)
        return -1;
    if(num % 2 === 0)
        return 2;
    if(num % 3 === 0)
        return 3;
    var TO = Math.sqrt(num);
    for(var i = 5;i<=TO;i+=6){
        if(num % i === 0)
            return i;
        if(num % (i + 2) === 0)
            return i + 2;
    }
    return -1;
}
function GCD(nums){
    var res = GCDTwoNum(nums[0],nums[1]);
    for(var i = 2;i<nums.length; i++){
        res = GCDTwoNum(nums[i],res);
    }
    return res;
}
function factorize(number){
    var a = parseInt(number);
    var b;
    var iv = [];
    while(a % 2 === 0)
    {
        a /= 2;
        iv.push(2);
    }
    while(a % 3 === 0)
    {
        a /= 3;
        iv.push(3);
    }
    for (b = 5; a > 1; b+= 4)
    {
        while (a % b === 0)
        {
            a /= b;
            iv.push(b);
        }
        b+=2;
        while (a % b === 0)
        {
            a /= b;
            iv.push(b);
        }
    }
    return iv;
}
function GCDTwoNum(a, b){
    return b == 0 ? a : GCDTwoNum(b, a % b);
}