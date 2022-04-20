function bringShingara(taka){
    console.log("Shingarar jonno dise", taka);
    console.log("Shingara dibi kina bol");
    var shingaraPrice = 10;
    var shingaraQuantity = taka / shingaraPrice;
    return shingaraQuantity;
}
var totalMoney = 250;
var shingara = bringShingara(totalMoney);
console.log(shingara);