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


//alert popup-->

function myfunction(){
  alert("We will get back to you soon. Cheers!")
};

//mouseover for navigation bar-->

$(document).ready(function(){
  $('li').mouseover(function(){
    $(this).addClass('hover');
  });
    $('li').mouseout(function(){
      $(this).removeClass('hover');
  });
});
//form validation-->

$(document).ready(function () {

    $('.myForm').validate({
        rules: {
            name: {
                required: true,
                  minLength: 5
            },
            email: {
                required: true,
                email: true
              },
              subject: {
                  required: true,
                  minLength: 5
                },
                message: {
                    required: true,
                    maxWords: 150
                  }
                }
              })
            });
