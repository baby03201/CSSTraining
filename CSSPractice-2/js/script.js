$(document).ready(function(){
  $("#slider").easySlider();
  
  $('#tabs div').hide();
  $('#tabs div:first').show();
  $('#tabs ul li:first').addClass('active');
  $('#tabs ul li a').click(function(){
    $('#tabs ul li').removeClass('active');
    $(this).parent().addClass('active');
    $('#tabs div').hide();
    var currentTab = $(this).attr('href');
    $(currentTab).show();
    return false;
  });
});