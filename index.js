$(document).ready(function() {
  // open a new page
  $('a').attr('target', '_blank');
  // select to add
  // 更新地方!!
  let date = [
    '公差列表',
    '20180917',
    '20180918',
    '20180920',
    '20180927',
    '20181003',
    '20181005',
    '20181008',
    '20181009',
    '20181014',
    '20181020',
    '20181021',
    '20181105',
    '20181109',
    '20181114',
    '20181203'
  ];
  // latest date is on the top
  date.reverse();

  for (let index = 0, len = date.length; index < len; index++) {
    $('#filterDate').append(
      $('<option></option>')
        .attr('value', date[index])
        .text(date[index])
    );
  }
  // to filter article
  $('#filterDate').on('change', function() {
    const duration = 800;
    let selectDate = $(this)
      .find(':selected')
      .val();
    if (selectDate === 'all') {
      // 全部顯示
      $('section').slideDown(duration);
    } else if (selectDate === '公差列表') {
      $('section').hide(0);
      $('.tolerance').slideDown(duration);
    } else {
      $('section').hide(0);
      $('.' + selectDate).slideDown(duration);
    }
  });

  // add 讚
  $('article').append(
    '<div class="thumb"><img class="site-logo" src="http://www.clker.com/cliparts/R/U/Y/u/I/M/thumbs-up-icon-blue-hi.png"> 讚</div>'
  );
  $('.thumb').click(function() {
    $(this)
      .find('.site-logo')
      .addClass('animate');
  });
  $('.thumb').on('animationend', function() {
    $(this)
      .find('.site-logo')
      .removeClass('animate');
  });

  // back to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.bkTop').fadeIn(200);
    } else {
      $('.bkTop').fadeOut(200);
    }
  });
  $('.bkTop').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
  // time
  function startTime() {
    const today = new Date();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    const hourstring = hour < 10 ? '0' + hour : '' + hour;
    const minstring = min < 10 ? '0' + min : '' + min;
    const secstring = sec < 10 ? '0' + sec : '' + sec;

    $('#time').text(hourstring + ':' + minstring + ':' + secstring);
  }
  setInterval(startTime, 1000);

  // nav
  $('nav').on('click', function() {
    $('#bg').fadeToggle(300);
    $('.nav-toggle').toggleClass('active');
    return false;
  });

  // table hover
  $('td').hover(
    function() {
      $(this)
        .parent()
        .addClass('target');
    },
    function() {
      $('.target').removeClass('target');
    }
  );

  // flip animation function
  let flip = (el, delay = '', time = 2000) => {
    $(el).addClass('flip ' + delay);
    setTimeout(() => {
      $(el).removeClass('flip ' + delay);
    }, time);
  };

  // when load doing one time animation
  flip('.logo img','delay',3000)

  // click img let it flip
  $('.logo img').on('click', function() {
    flip(this);
  });  
});
