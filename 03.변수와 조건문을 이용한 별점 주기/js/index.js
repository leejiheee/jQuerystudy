// 사용 js
// addClass, removeClass, prevAll, nextAll, index, if, var, text, html

$('.stars .fa-solid').click(function(){
  $(this).addClass('active')
  // 눌린 애를 기준으로 이전에 있는 애도 addClass 해줌
  // prev()는 하나만, prevAll()은 모두/next()는 하나, nextAll()은 모두
  $(this).prevAll().addClass('active')
  $(this).nextAll().removeClass('active')

  var num = $(this).index()
  var starRate = num + 1
  if(starRate == 1) {
    $('.print').html('<img src="./images/star-lv1.png">' + '별로에요')
  }else if(starRate == 2) {
    $('.print').html('<img src="./images/star-lv2.png">' + '보통 이에요')
  }else if(starRate == 3) {
    $('.print').html('<img src="./images/star-lv3.png">' + '그냥 그래요')
  }else if(starRate == 4) {
    $('.print').html('<img src="./images/star-lv4.png">' + '맘에 들어요')
  }else if(starRate == 5) {
    $('.print').html('<img src="./images/star-lv5.png">' + '아주 좋아요')
  }
})
