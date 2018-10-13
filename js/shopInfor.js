// window.onload=$('.first-title').stop().animate({
//     top:0
// },2000)


var mySwiper = new Swiper('#gallery', {
    speed: 1500,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.next-btn'
    },
    pagination: {
        el: '.pagination',
        // clickable: true,
        noSwiping : true,//无法拖动        
        bulletActiveClass: 'my-bullet-active',
        bulletClass: 'my-bullet',//如果没有加这个,字体颜色将无法改变
        renderBullet: function (index, className) {
            switch (index) {
                case 0: text = '机型'; break;
                case 1: text = '外观'; break;
                case 2: text = '容量'; break;
                case 3: text = ''; break;                
            }
            return '<span class="' + className + '">' + text + '</span>';
        },
    },

})
var swiperV = new Swiper('#include-fade', {
    speed: 2000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
      el: '.include-fade-pagination',
      clickable: true,
      noSwiping : true,//无法拖动
      bulletClass: 'include-bullet',//如果没有加这个,字体颜色将无法改变      
      bulletActiveClass: 'include-bullet-active',      
      renderBullet: function (index, className) {
          switch (index) {
              case 0: text = '查看正面'; break;
              case 1: text = '查看背面'; break;
          }
          return '<span class="' + className + '">' + text + '</span>';
      },
    },
  });
// console.log(swiperV.clickable)



var shopInfor_fade = (function () {
    $fade = $('.fade-box');
    $mini = $('.mini-box');
    var timer;
    var index = 0;
    return {
        init() {
            this.events();
        },
        showImg(index) {
            $mini.children().removeClass();
            $mini.children().eq(index).addClass('current');
            $fade.children('li').eq(index).fadeIn().siblings().fadeOut();
        },
        events() {
            var _this = this;
            $mini.find('li').on('click', function () {
                _this.showImg($(this).index());
            })
            $(window).scroll(function () {
                if (document.documentElement.scrollTop > 44) {
                    $('.main-nav')[0].style.position = 'fixed';
                    $('.main-nav')[0].style.top = '0';
                } else {
                    $('.main-nav')[0].style.position = 'static';
                }
            });
            $(document).ready(function () {
                $('.left-choose-img').stop().animate({
                    left: -20
                }, 1000)
                $('.center-choose-img').stop().animate({
                    left: 30
                }, 1000)
                $('.right-choose-img').stop().animate({
                    left: 90,
                }, 1000)
                $('.first-title').stop().animate({
                    top: 0,
                    // opacity:0
                }, 2600, function () {
                    $(this).css("background", "#eeecec")
                })
            });
            $(".include-left").mouseenter(function(){
                $('.to-left1').stop().animate({
                    left: '15%'
                }, 500) 
                $('.to-right1').stop().animate({
                    left: '45%'
                }, 500)
            })  
            $(".include-left").mouseleave(function(){
                $('.to-left1').stop().animate({
                    left: '20%'
                }, 500)
                $('.to-right1').stop().animate({
                    left: '40%'
                }, 500)
            })   


            $(".include-center").mouseenter(function(){
                $('.to-left2').stop().animate({
                    left: '15%'
                }, 500) 
                $('.to-right2').stop().animate({
                    left: '45%'
                }, 500)
            })  
            $(".include-center").mouseleave(function(){
                $('.to-left2').stop().animate({
                    left: '20%'
                }, 500)
                $('.to-right2').stop().animate({
                    left: '40%'
                }, 500)
            })   


            $(".include-right").mouseenter(function(){
                $('.to-left3').stop().animate({
                    left: '15%'
                }, 500) 
                $('.to-right3').stop().animate({
                    left: '45%'
                }, 500)
            })  
            $(".include-center").mouseleave(function(){
                $('.to-left3').stop().animate({
                    left: '20%'
                }, 500)
                $('.to-right3').stop().animate({
                    left: '40%'
                }, 500)
            })  
               
        }
    }
})();







