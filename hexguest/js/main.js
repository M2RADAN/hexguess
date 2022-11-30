var submit = document.getElementById('submit');
var square = document.getElementById('square');
var answerText = document.getElementById('answer');
var msgl = document.getElementById('msgl');
var msgr = document.getElementById('msgr');
var value, hvalue, result, r,g,b, ar,ag,ab, color, colorH, hvanswer, answer;
generate();


var form = document.getElementById('form');

form.addEventListener('submit',function(event){
  event.preventDefault()
  value = document.getElementById('input').value
  hvalue = parseInt(value, 16)
  calculate()
  msgl.style.display = ''
  msgr.style.display = ''

  msgl.innerHTML = result + "%"
  msgr.innerHTML = result + "%"
  if (result > 90) {
    msgl.innerHTML = msgl.innerHTML + "!!!"
    msgr.innerHTML = msgr.innerHTML + "!!!"
  }
  document.getElementById('input').value = ""
  answerText.style.display = ''
  document.getElementById('input').blur()
})


function hsplit(){
  if(parseInt(value.substr(0, 2), 16) > 0) {
    ar = parseInt(value.substr(0, 2), 16);
  } else {
    ar = 1;
  }
  if(parseInt(value.substr(2, 2), 16) > 0) {
    ag = parseInt(value.substr(2, 2), 16);
  } else {
    ag = 1;
  }

  if(parseInt(value.substr(4, 2), 16) > 0) {
    ab = parseInt(value.substr(4, 2), 16);
  } else {
    ab = 1;
  }
}

answerText.onclick = ()=> {
  generate();
}
function calculate() {
  hsplit();
  result = round((Math.min(r, ar)/Math.max(r, ar)*100 + Math.min(g, ag)/Math.max(g, ag)*100 + Math.min(b, ab)/Math.max(b, ab)*100) / 3);

};

function round(number){
  return +number.toFixed(2);
}
function generate() {
  r = Math.floor(Math.random() * (256)),
  g = Math.floor(Math.random() * (256)),
  b = Math.floor(Math.random() * (256)),
  colorH = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  answer = r.toString(16) + g.toString(16) + b.toString(16);
  hvanswer = parseInt(answer, 16);
  msgl.style.display = 'none'
  msgr.style.display = 'none'
  answerText.style.display = 'none'
  if (answer.length < 6) {
    generate();
  } else {
    square.style.background = colorH;
    answerText.innerHTML = colorH;
  }
}