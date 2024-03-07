// 사용 js
// var, if, val(), alert()

$('.login button').click(function(){
  // id 가 id 인 요소의 value 값
  var num = $('#id').val()
  if(num == '') {
    alert('나이를 입력하세요')
  }else if(num < 20) {
    alert('미성년자입니다.')
  }else if(num >= 20) {
    alert('성인입니다.')
  }else {
    alert('숫자로 입력해주세요.')
  }
})