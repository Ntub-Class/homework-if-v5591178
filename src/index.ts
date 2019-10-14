// 請介紹兩個字串方法跟數字方法
let arry1 = ['a','b','c'];
let arry2 = ['d','e','f'];
console.log(arry1.concat(arry2));

let str = "Runoob Google"
console.log(str.toLowerCase( ));

var num = new Number(177.1234);
console.log(num.toLocaleString());

var num = new Number(10);
console.log(num.valueOf());

// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

//if(money > 800000){
//    console.log('不可能');
//}else{
//    console.log('叫乾爹')
//}
if (money > 800000) {
    console.log('不可能')        
} else {
    console.log('叫乾爹')    
}

