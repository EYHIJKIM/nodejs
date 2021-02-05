
var args = process.argv;

console.log(args[2]);
console.log('A');
console.log('B');

if(args[2] === '1'){ //input에 1을 입력시 실행됨
  console.log('C1');
} else {             //1이 아닌 다른 값 입력시 실행
  console.log('C2');
}
console.log('D');
