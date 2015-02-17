

$(document).ready(function() {

  var navbar = $('nav');

  $('#modal .content a').click(function() {
    $('#modal').css({'display': 'none'});
  });

  $('.season').click(function(e) {

    var id = e.target.parentElement.id
    switch(e.target.parentElement.id) {
      case 'season-one':
        $('#modal .content p').text('Season One');
        $('#modal .content .image').css({"background-image": 'url(../assets/seasonone.jpg)'});
        break;
      case 'season-two':
        $('#modal .content p').text('Season Two');
        $('#modal .content .image').css({"background-image": 'url(../assets/seasontwo.jpg)'});
        break;
      case 'season-three':
        $('#modal .content p').text('Season Three');
        $('#modal .content .image').css({"background-image": 'url(../assets/seasonthree.jpg)'});
        break;

      case 'season-four':
        $('#modal .content p').text('Season Four');
        $('#modal .content .image').css({"background-image": 'url(../assets/seasonfour.jpg)'});
        break;

      case 'season-five':
        $('#modal .content p').text('Season Five');
        $('#modal .content .image').css({"background-image": 'url(../assets/seasonfive.jpg)'});
        break;

      case 'season-six':
        $('#modal .content p').text('Season Six');
        $('#modal .content .image').css({"background-image": 'url(../assets/seasonsix.jpg)'});
        break;
    }

    $('#modal').css({'display': 'block'});
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 200) {
      navbar.addClass('nav-small')
    }
    else {
      navbar.removeClass('nav-small');
    }

    $('nav ul li a').css({'border-bottom': 'none'});
    var offsetCharacters = $('#characters').offset().top - 51;
    var offsetSeasons = $('#seasons').offset().top - 51;
    var offsetSocial = $('#social').offset().top - 51;
    var activeTab = {"border-bottom": '2px solid white'};
    if(scroll < offsetCharacters && scroll > offsetSeasons) {
      $('#a-seasons').css(activeTab);
    }
    if(scroll < offsetSocial && scroll > offsetCharacters) {
      $('#a-characters').css(activeTab);
    }
    if(scroll >= offsetSocial) {
      $('#a-social').css(activeTab);
    }
  });

  $('nav ul li a').click(function( e ){
    e.preventDefault();
    var targetId = $(this).attr("href");
    var top = $(targetId).offset().top - 50;
    $('html, body').animate({scrollTop: top}, 500);
  });

  var slides = $('.carousel').find('.character');
  var active = 0;
  slides.first().addClass('active');
  slides.eq(active + 1).addClass('next');
  slides.eq(active + 1).css({'left': '100%', 'display': 'none'});
  slides.eq(slides.length - 1).addClass('prev').css({'left': '-100%'});

  var slidable = true;

  $('#carousel-left').click(function(e) {
    e.preventDefault();

    if(slidable) {
      slidable = false;

      var next = active + 1;
      if(next === slides.length) next = 0;
      var prev = active - 1;
      if(prev < 0) prev = slides.length - 1;

      slides.eq(next).css({'display':'block'});
      slides.eq(active).animate({'left': '-=100%'}, 700);
      slides.eq(next).animate({'left': '0%'}, 700, function () {

        slides.eq(prev).removeClass('prev');
        slides.eq(active).removeClass('active').addClass('prev');
        slides.eq(next).removeClass('next').addClass('active');

        active = next;
        next = active + 1;
        if(next === slides.length) next = 0;

        slides.eq(next).css({'left': '100%', 'display': 'none'}).addClass('next');
        slidable = true;
      });
    }
    else {
      $(this).clearQueue();
    }
  });

  $('#carousel-right').click(function(e) {
    e.preventDefault();

    if(slidable) {
      var next = active + 1;
      if(next === slides.length) next = 0;
      var prev = active - 1;
      if(prev < 0) prev = slides.length - 1;

      slides.eq(prev).animate({'left': '0%'}, 700);
      slides.eq(active).animate({'left': '100%'}, 700, function () {

        slides.eq(next).removeClass('next');
        slides.eq(active).removeClass('active').addClass('next');
        slides.eq(prev).removeClass('prev').addClass('active');

        active = prev;
        prev = active - 1;
        if(prev < 0) prev = slides.length - 1;

        slides.eq(prev).css({'left': '-100%'}).addClass('prev');

        slidable = true;
      });
    }
    else {
      $(this).clearQueue();
    }
  });

});
