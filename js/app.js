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

$('#myForm')
  .on('invalid.fndtn.abide', function () {
    var invalid_fields = $(this).find('[data-invalid]');
    console.log(invalid_fields);
  })
  .on('valid.fndtn.abide', function () {
    console.log('valid!');
  });

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
