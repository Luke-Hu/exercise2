function add(num1, num2) {
  // 实现该函数
  var strNum1 = String(num1);
  var strNum2 = String(num2);
  var arrNum1 = Array.from(strNum1);
  var arrNum2 = Array.from(strNum2);
  arrNum1.reverse();
  arrNum2.reverse();
  var arrTotal = [];
  var flag = 0;
  var len = Math.max(arrNum1.length, arrNum2.length);
  for(var i=0; i<len; i++){
    var tempVal = (+arrNum1[i] || 0)+ (+arrNum2[i] || 0) + flag;
    flag = 0;
    if(tempVal > 9){
      tempVal -= 10;
      flag = 1;
    }
    arrTotal.push(tempVal)

  } 
  if(flag === 1){
    arrTotal.push(flag)
  }
  // console.log('打印结果-----'+arrTotal.reverse().join(''));

  return arrTotal.reverse().join('');
}

module.exports = add
