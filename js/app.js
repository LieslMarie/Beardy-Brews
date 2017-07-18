$(document).foundation()

//sticky footer-->

$(window).bind("load", function () {
   var footer = $("#footer");
   var pos = footer.position();
   var height = $(window).height();
   height = height - pos.top;
   height = height - footer.height();
   if (height > 0) {
       footer.css({
           'margin-top': height + 'px'
       });
   }
});


function myfunction(){
  alert("We will be in touch shortly!")
};

$(document).ready(function(){
  $('li').mouseover(function(){
    $(this).addClass('hover');
  });
    $('li').mouseout(function(){
      $(this).removeClass('hover');
  });
});
