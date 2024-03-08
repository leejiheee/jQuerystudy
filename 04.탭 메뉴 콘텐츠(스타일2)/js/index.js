//사용 js
//addClass, siblings, removeClass, attr, 사용자정의속성 data-alt, var

$('.btn li').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')

  var tab = $(this).attr('data-alt')
  $('#' + tab).addClass('active')
  $('#' + tab).siblings().removeClass('active')
  // 또는 $('.tabs div').removeClass('active')를 먼저 해주고 
  // $('#' + tab).addClass('active')를 뒤에 붙여준다.
})