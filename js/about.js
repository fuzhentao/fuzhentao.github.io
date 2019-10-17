var aboutPos = $('#about').position();
var skillPos = $("#superskilltag").position();
$(window).scroll(function() {

  if ($(window).scrollTop() >= aboutPos.top - 500) {
    showResume()
  };
    if ($(window).scrollTop() >= skillPos.top + 400) {
        $('#superskilltag div').addClass('animated fadeInLeftBig')
    };
    if ($(window).scrollTop() >= skillPos.top + 650) {
        $('#skill').addClass('animated bounceIn');
        $('#skill').css('opacity', '1')
    };
  });
  
  function showResume() {
  $itemsToTop = 0;
  $('#timeline .item_content').each(function(index) {
    $(this).parents('.item').find('.item_connection_line').css('top', $(this).height() / 2);
    $(this).parents('.item').find('.item_icon').css({
      'top': ($(this).height() / 2) - 25
    });
    $(this).parents('.item').css('top', $(this).parents('.item').prev().height() + $itemsToTop - 25);
    $itemsToTop += $(this).height() - 25
  });
  $('#timeline .timeline_line').css('height', $itemsToTop + 150);
  $('#timeline, #timeline .items').css('height', $itemsToTop + 30);
  var iDelay = 1000;
  $('.item .rotate').each(function(index) {
    var oItem = $(this);
    window.setTimeout(function() {
      try {
        oItem.parent().addClass('item_checked');
        oItem.parent().css('opacity', 1);
        oItem.parent().find('.item_icon').addClass('animated swing');
        oItem.addClass('rotated')
      } catch (Err) {
        console.log('ERROR: ' + Err)
      }
    }, (iDelay * (index)))
  })
};