$(function(){
    var str = '1len'; //increment by 1 up to 1-nelemnts
    $(document).ready(function(){
      var i, stop;
      i = 1;
      stop = 4; //num elements
      setInterval(function(){
        if (i > stop){
          return;
        }
        $('1len'+(i++)).toggleClass('bounce');
      }, 500)
    });
  });