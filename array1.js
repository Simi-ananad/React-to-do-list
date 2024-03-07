//array declaration and initialization
let names = ['simi','hari','nithya','dinesh','rishi','sara'];
let i = 0;
names[4] = 'akshaya';
console.log(names[1]);

//array declaration
let arr = new Array();
//array initialization
arr[0] = 100;
arr[1] = 200;

console.log('\n array '+arr)

for(;i<names.length;i++){
    console.log(names[i]);
}

console.log('\n for with of \n')
for(let n of names){
    console.log(n)
}

names.push("ABC")
names.push("XYZ")

names.forEach((n) => console.log(n));

names.pop();
console.log('\n\n')
names.forEach((n) => console.log(n));
 
names.unshift("Neha");
console.log('\n\n');
names.forEach((s) => console.log(s));
console.log('\n after calls shift')
names.shift()

names.forEach((x) => console.log(x));

names.shift()
names.forEach((x) => console.log(x));

const prices = [20, 80, 50 , 160, 90];
console.log('\n');
//prices.forEach((p) => console.log(p));

const c_arr= names.concat(prices);
//c_arr.forEach((i) => console.log(i));

const res = c_arr.map((i) =>i +'$');
console.log(res + '\n')

/*for(let p of res){
    console.log(p)
} */

const newPrice = prices.filter((element) => element >= 90);
console.log('Price Greater than 90', newPrice);

const start_K = names.filter((element) => element.startsWith('k'));
console.log(start_K);

const end_a = names.find((item) =>item.endsWith('a'));
console.log(end_a);
console.log('\n')
const sorted = names.sort();
sorted.forEach((item) => console.log(item))

const lessPrice = prices.filter((item) => item < 90);
console.log('\n price less than 90');
lessPrice.forEach((item) => console.log(item));