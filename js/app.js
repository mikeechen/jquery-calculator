
var audio = new Audio('JYH7-AND HIS NAME IS JOHN CENA.mp3');
var $iframe=$('<iframe>');
  $iframe.attr('src', 'https://giphy.com/embed/37PiwK6sNDyM');
  $iframe.attr('width', '600');
  $iframe.attr('height', '400');
  // $iframe.attr('align', 'middle');
var num='';
var firstnum='';
var ope='';
var result;

$('span').click(addnumber);
$('span.operator').click(operator);
$('span.operator#equals').click(evaluate);
$('#clear').click(clear);

function addnumber(event) {
  if ($(event.target).hasClass('operator') === false) {
    if (result !== '') {
      num='';
      result='';
    }
    num += $(event.target).text();
    $('#screen').text(num);
  }
}

function operator(event) {
  if ($(event.target).attr('id') !== 'equals') {
      if (result !== '') {
        firstnum = result;
        ope=$(event.target).text();
      } else if (firstnum !== ''){
        evaluate();
        firstnum=result;
        ope=$(event.target).text();
        console.log(result);
      } else {
        ope=$(event.target).text();
        firstnum=parseInt(num);
        num='';
        console.log(ope);
      }
  }
}

function evaluate() {
  if (ope === '+') {
    result = firstnum + parseInt(num);
  } else if (ope === 'x') {
    result = firstnum * parseInt(num);
  } else if (ope === '÷') {
    result = firstnum / parseInt(num);
  } else if (ope === '-') {
    result = firstnum - parseInt(num);
  }
  $('#screen').text(result);
  num='';
  firstnum='';
  $('body').css('background-image', 'url(john-cena.jpg)');
  audio.loop = true;
  audio.play();
  $('body').append($iframe);
}

function clear() {
  num='';
  firstnum='';
  ope='';
  result='';
  $('#screen').text('');
  $('body').css('background-image', 'none');
  audio.pause();
  audio.currentTime = 0;
  $('iframe').remove();
}
