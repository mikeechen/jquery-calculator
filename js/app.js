var audio = new Audio('JYH7-AND HIS NAME IS JOHN CENA.mp3');
var nyan = new Audio('Nyan-Cat.mp3');
var $iframe=$('<iframe>');
  $iframe.attr('src', 'https://giphy.com/embed/37PiwK6sNDyM');
  $iframe.attr('width', '600');
  $iframe.attr('height', '400');
  // $iframe.attr('align', 'middle');
var $gifdiv=$('<div class="johncena">');
  $gifdiv.append($iframe);
  $gifdiv.css('text-align', 'center');

var $textdiv=$('<div id="texts">');
var num='';
var firstnum='';
var ope='';
var result;
var interval;
var timeoutID;

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
      } else if (firstnum !== '' && num !== '') {
        evaluate();
        firstnum=result;
        ope=$(event.target).text();
        // console.log(result);
      } else if (firstnum !== '') {
        ope=$(event.target).text();
      } else {
        ope=$(event.target).text();
        firstnum=num;
        num='';
      }
  }
}

function evaluate() {
  if (result !== '') {
    result=result;
  } else {
    if (ope === '+') {
      result = parseInt(firstnum) + parseInt(num);
    } else if (ope === 'x') {
      result = parseInt(firstnum) * parseInt(num);
    } else if (ope === '÷') {
      result = parseInt(firstnum) / parseInt(num);
    } else if (ope === '-') {
      result = parseInt(firstnum) - parseInt(num);
    }
    num='';
    firstnum='';
  }

  if (interval !== undefined) {
    clearInterval(interval);
  }

  var funtext;
  if (result === Infinity || result === NaN) {
    funtext = 'NYANNYANNYAN';
    $('body').css('background-image', 'url(http://24.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gif)');
    $('body').css('background-color', 'black');
    result = funtext;
    nyan.loop = true;
    nyan.play();
  } else {
    funtext = 'JOHN CENA!!!';
    $('body').css('background-image', 'url(john-cena.jpg)');
    audio.loop = true;
    audio.play();
    $('body').append($gifdiv);
  }
  // $('#screen').text(result);
  //Troll text
  $textdiv.text(funtext);
  $('#screen').text('');
  $('#screen').append($textdiv);
  var tx = document.getElementById('texts');
  interval=setInterval(function() {
    tx.style.display = (tx.style.display == 'none' ? '' : 'none');
  }, 500);
  timeoutID=window.setTimeout(function(){
    $('#screen').text(result);
  }, 5000);
}

function clear() {
  num='';
  firstnum='';
  ope='';
  result='';
  $('#screen').text('');
  $('body').css('background-image', 'none');
  $('body').css('background', '#71B66F');
  audio.pause();
  audio.currentTime = 0;
  nyan.pause();
  nyan.currentTime = 0;
  $gifdiv.remove();
  clearInterval(interval);
  window.clearTimeout(timeoutID);
}
