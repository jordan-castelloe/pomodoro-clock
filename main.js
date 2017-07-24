$(document).ready(function() {

var seconds = 60;
var minutes = 24;
var countdown = null;
var alarm = new Audio("meadowlark.wav");



function timer(minutes) {

  seconds -= 1; // decrease the number of seconds by one

  if (seconds < 10){
    seconds = "0" + seconds; // add a zero in front of single digit numbers
  }

  if (seconds == 0){ // when seconds counter gets to zero
    seconds = 60; // start second counter over
    minutes -= 1; // subtract a minute
  }

  if (minutes < 0){  // when the minute counter gets to zero,stop the timer and play the alarm
     clearInterval(countdown);
     alarm.play();
     setTimeout(function(){
            alarm.pause()}, 6000)}

    $('#seconds').text(seconds); // write out the number of seconds
    $('#minutes').text(minutes); // write out the number of minutes

}

// start 25 minute timer when you click on "start work"
$('#start-work').click(function(){
    clearInterval(countdown);
    countdown = setInterval(function(){timer(24)}, 1000);
  });

// pause timer when you click "pause"
  $('#pause').click(function(){
    clearInterval(countdown);
  });

// start 5 minute timer when you click on "start break"
$('#start-break').click(function(){
  clearInterval(countdown);
  countdown = setInterval(function(){timer(4)}, 1000);
});

  // bold buttons when mouse hovers over them
$('#start-work, #pause, #start-break').mouseenter(function(){
	$(this).css("font-weight", "bold");
});

//unbold buttons when mouse leaves
$('#start-work, #pause, #start-break').mouseleave(function(){
	$(this).css("font-weight", "normal");
});

});
