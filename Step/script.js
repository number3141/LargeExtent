window.addEventListener('DOMContentLoaded', function(){

let fir = document.querySelector('.a'), 
sec = document.querySelector('.b'), 
mod = document.querySelector('.mod'),
ans = document.querySelector('.answer'),
btnNod = document.querySelector('.check');




btnNod.addEventListener('click', function calcNod(a, b, c){

  a = +fir.value;
  b = +sec.value;
  c = +mod.value;
  let index;

  let arr = [];

  for (let i = 10; i >= 0; i--) {
    if (b - Math.pow(2, i) >= 0) {
        prom = b - Math.pow(2, i);
        b = prom;
        arr[i] = Math.pow(2, i);
        if (b == 1 || b == 0) {
          index = 10 - i;
        }
    } else {
      arr[i] = 0;
    }
  }

  console.log(index);


  let arrAnswer = [];
  arrAnswer[0] = a;

  for(let i = 1; i <= index; i++) {
    if(arr[i] == 0) {
      arrAnswer[i] = Math.pow(a, 2);
      if (arrAnswer[i] > c) {
        arrAnswer[i] = arrAnswer[i] % c;
        a = arrAnswer[i];
      } 
      else {
        a = arrAnswer[i];
      }
    }
    else {
      arrAnswer[i] = Math.pow(a, 2);
      if (arrAnswer[i] > c) {
        arrAnswer[i] = arrAnswer[i] % c;
        a = arrAnswer[i];
      } 
      else {
        a = arrAnswer[i];
      }
    }
  }

  console.log(arrAnswer);

  let more = 1;


  for(let i = 0; i <= index; i++) {
    if(arr[i]==0){
      continue;
    }
    else {
      more *= arrAnswer[i];
    }
  }

  more = more % c;
  alert('Выполнено');
  ans.value = more;

});

});