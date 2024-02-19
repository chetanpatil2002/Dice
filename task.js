function Dice(limit) {
    //  2 step => create variable
    var digit = `123456`;
    let str = ``;
    for (let i = 0; i < limit; i++) {
     str += digit[Math.floor(Math.random() * 10)]
    }    
    return str     

}
console.log("Your Dice Number Is",Dice(1));