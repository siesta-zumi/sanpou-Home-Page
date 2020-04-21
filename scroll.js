$(function() {
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop': position},800);
  });
}
);

$(function() {
  $('.items li').hover(
    function() {
      
    $(this).find(".item-info").addClass("active");
    
  },function() {
    $(this).find(".item-info").removeClass("active");
  }
  );
}
);

