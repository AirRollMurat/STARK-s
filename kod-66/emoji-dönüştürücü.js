client.sayiemo = function emojiyeDönüştür(sayı) {
var a = new RegExp(1, "g"); 
var b = new RegExp(2, "g"); 
var c = new RegExp(3, "g"); 
var d = new RegExp(4, "g"); 
var e = new RegExp(5, "g"); 
var f = new RegExp(6, "g"); 
var g = new RegExp(7, "g"); 
var h = new RegExp(8, "g"); 
var j = new RegExp(9, "g"); 
var k = new RegExp(0, "g"); 


let stark;
stark = sayı.toString()
stark = stark.replace(a, "1️⃣").replace(b, "2️⃣").replace(c, "3️⃣").replace(d, "4️⃣").replace(e, "5️⃣").replace(f, "6️⃣").replace(g,"7️⃣").replace(h, "8️⃣").replace(j, "9️⃣").replace(k, "0️⃣");
return stark; 
}
