// 사용 js
// addClass(), siblings(), removeClass(), attr(), 사용자정의속성 data-alt


$('.testimonial-pic img').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')

  $('.testimonial .content').removeClass('active')
  $('#' + $(this).attr('data-alt')).addClass('active')

  // tab1 == $(this).attr('data-alt')
})

