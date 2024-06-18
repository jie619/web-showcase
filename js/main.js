$(document).ready(function() {

  //百貨圖片
  $('.photo .carousel').slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 2000,
    fade: true,
    cssEase: 'linear'
  });

  //樓層產品
  $('.product-block .commodity .slick-block').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="images/left.png"></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="images/right.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });

  //scroll按下會移到DM同步
  $('.scroll').click(function() {
    $('body,html').animate({scrollTop: $('#dm').position().top},1000);
  });

  //點選熱門品牌TAG移到對應位置
  $('.search .tag span').click(function() {
    var tag = $(this).attr('data-id');
    $('body,html').animate({scrollTop: $('#' + tag).offset().top},1000);
  });

  //搜尋TAG按下搜尋按鈕
  $('.search-button').click(function() {
    var inputValue, dataIndex;
    inputValue = $('.search-input').val();
    $('.spacer').each(function() {
      dataIndex = $(this).attr('data-index');
      if (dataIndex.search(inputValue.toLowerCase()) != -1 && inputValue != "") {
        $('body,html').animate({scrollTop: $(this).offset().top},1000);
      }
    });
  });

  //搜尋TAG按下Enter
  $('.search-input').on('keyup',function(e){
    if(e. keyCode === 13){
      var inputValue, dataIndex;
      inputValue = $('.search-input').val();
      $('.spacer').each(function() {
        dataIndex = $(this).attr('data-index');
        if (dataIndex.search(inputValue.toLowerCase()) != -1 && inputValue != "") {
          $('body,html').animate({scrollTop: $(this).offset().top},1000);
        }
      });
    }
  });

  //手機選單打開按鈕
  $('.nav-button').click(function() {
    $('.nav').removeClass('phone-nav-close');
    $('.nav').addClass('phone-nav-open');
  });

  //手機選單關閉按鈕
  $('.close').click(function() {
    $('.nav').removeClass('phone-nav-open');
    $('.nav').addClass('phone-nav-close');
  });

  //品牌一覽按鈕
  $('.brand-list').click(function() {
    $('.modal').hide();
    $(this).next().show();
  });

  //品牌一覽關閉
  $('.remove').click(function() {
    $(this).parent().hide();
  });

  //回到最上層
  $('.js-top').click(function() {
    $('body,html').animate({scrollTop:0},1000);
  });

  //左側選單按下移到對應位置
  $('.floor-button').click(function() {
    var href = $(this).attr('data-href');
    var anchor = $('#' + href).position().top;
    $('body,html').animate({scrollTop: anchor},1000);
    if($(window).width()<=975){
      $('.nav').removeClass('phone-nav-open');
      $('.nav').addClass('phone-nav-close');
    }
  });

  $(window).scroll(function(){
    var scroll = $(this).scrollTop();

    if($(window).width()>975){
      //左側選單超過位置跑出來
      if(scroll>300){
        $('.nav').addClass('nav-active');
      } else {
        $('.nav').removeClass('nav-active');
      }

      //滾輪位置到達選單相對應位置選單改變樣式
      //DM同步
      if(scroll >= $('#dm').position().top - 200 && scroll < $('.photo').position().top - 200){
        $('.floor-button').removeClass('active');
        $('.floor-dm').addClass('active');
      }
      //樓層1
      else if(scroll >= $('#makeup').position().top - 200 && scroll < $('#fashions').position().top - 200){
        $('.floor-button').removeClass('active');
        $('.floor-makeup').addClass('active');
      }
      //樓層2
      else if(scroll >= $('#fashions').position().top - 200 && scroll < $('#clothing').position().top - 200){
        $('.floor-button').removeClass('active');
        $('.floor-fashions').addClass('active');
      }
      //樓層3
      else if(scroll >= $('#clothing').position().top - 200 && scroll < $('#sport').position().top - 200){
        $('.floor-button').removeClass('active');
        $('.floor-clothing').addClass('active');
      }
      //樓層4
      else if(scroll >= $('#sport').position().top - 200 && scroll < $('#kids').position().top - 200){
        $('.floor-button').removeClass('active');
        $('.floor-sport').addClass('active');
      }
      //樓層5
      else if(scroll >= $('#kids').position().top - 200 && scroll < $('#homeneeds').position().top - 200){
        $('.floor-button').removeClass('active');
        $('.floor-kids').addClass('active');
      }
      //樓層6
      else if(scroll >= $('#homeneeds').position().top - 200 && scroll < $('#food').position().top - 200){
        $('.floor-button').removeClass('active');
        $('.floor-homeneeds').addClass('active');
      }
      //樓層7
      else if(scroll >= $('#food').position().top - 200){
        $('.floor-button').removeClass('active');
        $('.floor-food').addClass('active');
      }
      else{
        $('.floor-button').removeClass('active');
      }
    }

    if($(window).width()<=975){
      //header到search上面一些出現
      if(scroll>=$('.search').position().top - 50){
        $('.header').addClass('header-open');
        $('.header').css({'visibility': 'visible'});
      }else{
        $('.header').removeClass('header-open');
      }

      //超過位置選單按鈕浮動
      if(scroll>$('.all').position().top){
        $('.float').addClass('float-button');
      } else {
        $('.float').removeClass('float-button');
      }

      var docViewBottom = scroll + $(window).height(),
          pxspeed = docViewBottom;
      
      //手機樓層形象圖
      //樓層1
      if(docViewBottom > $('.floor1-image').position().top && scroll < $('#makeup').position().top){
        pxspeed = (pxspeed - $('#makeup').position().top) * 0.03;
        $('.floor1-image').css({'transform': 'translate(0%,' + pxspeed + '%)'});
        $('.floor1-image').parent().next().next().css({'transform': 'translate(0%,-' + pxspeed * 0.1 + '%)'});
      }
      //樓層2
      else if(docViewBottom > $('.floor2-image').position().top && scroll < $('#fashions').position().top){
        pxspeed = (pxspeed - $('#fashions').position().top) * 0.03;
        $('.floor2-image').css({'transform': 'translate(0%,' + pxspeed + '%)'});
        $('.floor2-image').parent().next().next().css({'transform': 'translate(0%,-' + pxspeed * 0.1 + '%)'});
      }
      //樓層3
      else if(docViewBottom > $('.floor3-image').position().top && scroll < $('#clothing').position().top){
        pxspeed = (pxspeed - $('#clothing').position().top) * 0.03;
        $('.floor3-image').css({'transform': 'translate(0%,' + pxspeed + '%)'});
        $('.floor3-image').parent().next().next().css({'transform': 'translate(0%,-' + pxspeed * 0.1 + '%)'});
      }
      //樓層4
      else if(docViewBottom > $('.floor4-image').position().top && scroll < $('#sport').position().top){
        pxspeed = (pxspeed - $('#sport').position().top) * 0.03;
        $('.floor4-image').css({'transform': 'translate(0%,' + pxspeed + '%)'});
        $('.floor4-image').parent().next().next().css({'transform': 'translate(0%,-' + pxspeed * 0.1 + '%)'});
      }
      //樓層5
      else if(docViewBottom > $('.floor5-image').position().top && scroll < $('#kids').position().top){
        pxspeed = (pxspeed - $('#kids').position().top) * 0.03;
        $('.floor5-image').css({'transform': 'translate(0%,' + pxspeed + '%)'});
        $('.floor5-image').parent().next().next().css({'transform': 'translate(0%,-' + pxspeed * 0.1 + '%)'});
      }
      //樓層6
      else if(docViewBottom > $('.floor6-image').position().top && scroll < $('#homeneeds').position().top){
        pxspeed = (pxspeed - $('#homeneeds').position().top) * 0.03;
        $('.floor6-image').css({'transform': 'translate(0%,' + pxspeed + '%)'});
        $('.floor6-image').parent().next().next().css({'transform': 'translate(0%,-' + pxspeed * 0.1 + '%)'});
      }
      //樓層7
      else if(docViewBottom > $('.floor7-image').position().top && scroll < $('#food').position().top){
        pxspeed = (pxspeed - $('#food').position().top) * 0.03;
        $('.floor7-image').css({'transform': 'translate(0%,' + pxspeed + '%)'});
        $('.floor7-image').parent().next().next().css({'transform': 'translate(0%,-' + pxspeed * 0.1 + '%)'});
      }
    }
  });

  //Loading讀取
  var beforeload = (new Date()).getTime();
  window.onload = getPageLoadTime();
  var seconds;

  //取得讀取時間 
  function getPageLoadTime(){
    var afterload = (new Date()).getTime();
    seconds = (afterload-beforeload) ;
    LoadPop(seconds);
  }

  function openWindow(seconds){  
    //讀取時間過後讓畫面出來
    setTimeout(display, seconds + 500); 

    //動畫時間結束後讀取畫面消失
    setTimeout(disappear, seconds + 4000); 
    
    function display(){
      $('.internal').css({"display": "block"});
    }
  }  

  function GetCookie(name){  
      var search = name + "=";  
      var returnvalue = "";  
      var offset , end;  
      if(document.cookie.length>0)  
      {  
          offset = document.cookie.indexOf(search);  
          if(offset != -1)  
          {  
              offset += search.length;  
              end = document.cookie.indexOf(";",offset);  
              if(end == -1)  
                  end = document.cookie.length;  
              returnvalue = unescape(document.cookie.substring(offset,end));  
          }  
      }  
      return returnvalue;  
  }  

  function LoadPop(seconds){  
    if(GetCookie("pop")=="")  
    {  
      //第一次進來cookie不在時執行
      openWindow(seconds); 
      // disappear(); 
      var today = new Date();  
      var time = today.getYear()+1+"13:20:00 GMC";  
      document.cookie = "pop=yes;expires="+time;  
    }else{
      //重新整理cookie還在時執行
      disappear();
    }
  }

  function disappear(){
    //卷軸滾動時的效果
    new WOW().init();

    $('.all').addClass('display');

    $('.loading').css({"display": "none"});

    //Banner效果
    $('.banner .carousel').slick({
      dots: true,
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      initialSlide: 0,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 500,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            initialSlide: 0,
          }
        },
      ]
    });
  }

});