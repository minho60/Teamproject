
$(document).ready(function(){
  $('.tab-btn').click(function(){
    var tab = $(this).data('tab');

    // 버튼 active 처리
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    // 이벤트 카드 표시
    if(tab === 'all'){
      $('.event-card').show();
    } else {
      $('.event-card').hide();
      $('.event-card[data-tab="'+tab+'"]').show();
    }
  });
});
