jQuery(function() {
  var home = $('#home_btn');
  var about = $('#about_btn');
  var works = $('#works_btn');
  var recruit = $('#recruit_btn');
  var contact = $('#contact_btn');
  home.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });

  about.click(function () {
    $('body,html').animate({
        scrollTop: 800
    }, 500);
    return false;
  });

  works.click(function () {
    $('body,html').animate({
        scrollTop: 1500
    }, 500);
    return false;
  });
  
  recruit.click(function () {
    $('body,html').animate({
        scrollTop: 3000
    }, 500);
    return false;
  });
  
  contact.click(function () {
    $('body,html').animate({
        scrollTop: 5200
    }, 500);
    return false;
  });
});