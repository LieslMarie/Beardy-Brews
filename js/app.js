$(document).foundation()

//image carousel-->

$( function () {
  $(document).ready(function(){
    $('.carousel').slick({
      centerMode: true
    });
  });

    $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 6
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 6
        }
      }
    ]
  });

    //sticky footer-->

    var height_diff = $( window ).height() - $( 'body' ).height();
    if ( height_diff > 0 ) {
        $( '#footer' ).css( 'margin-top', height_diff + 50);
    }

});
