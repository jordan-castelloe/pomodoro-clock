$(document).ready(function() {

var seconds = 60;
var minutes = 24;


function timer(minutes) {

setInterval(function(){
  seconds -= 1; // decrease the number of seconds by one

  if (seconds < 10){
    seconds = "0" + seconds; // add a zero in front of single digit numbers
  }

  if (seconds == 0){ // when seconds counter gets to zero
    seconds = 59; // start second counter over
    minutes -= 1; // subtract a minute
  }

  if (minutes < 0){  // when the minute counter gets to zero,stop the timer
     clearInterval(countdown);
  }

  $('#pause').click(function(){
    clearInterval(countdown);
  });


    $('#seconds').text(seconds); // write out the number of seconds
    $('#minutes').text(minutes); // write out the number of minutes
}, 1000);

}

$('#start-work').click(function(){
      timer(24);
  });



$('#start-break').click(function(){
  timer(4);
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
