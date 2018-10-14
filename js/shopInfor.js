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
        clickable: true,
        noSwiping : true,//无法拖动        
        bulletActiveClass: 'my-bullet-active',
        bulletClass: 'my-bullet',//如果没有加这个,字体颜色将无法改变
        renderBullet: function (index, className) {
            switch (index) {
                case 0: text = '机型'; break;
                case 1: text = '外观'; break;
                case 2: text = '容量'; break;
                case 3: text = '手机'; break;                
            }
            return '<span><li class="' + className + '">' + text + '</li></span>';
        },
    },

})
console.log(mySwiper.pagination.renderBullet)
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



// for(i=0;i<mySwiper.pagination.bullets.length;i++){
//     mySwiper.pagination.bullets[i].index=i
//     mySwiper.pagination.bullets[i].onmouseover=function(){
//       mySwiper.slideTo(this.index);
//     };
//   }

var fadeEvent = (function () {
    $next=$('.next-btn')
    $leftBox=$('.left-box')
    $rightBox=$('.right-box') 
    $includeLeft=$('.include-left')
    $includeCenter=$('.include-center') 
    $includeRight=$('.include-right') 
    $phoneLarge1 =$('.phone-large1')   
    $phoneLarge2 =$('.phone-large2')   
    $phoneLarge3 =$('.phone-large3')   
    $pagination=$('.pagination');
    var  obj={
        type:{
            type1:'iPhone xs',
            type2:'iPhone Max'
        },
        color:{
            color1:'银色',
            color2:'深空灰色',
            color3:'金色'
        },
        large:{
            large1:'64GB',
            large2:'256GB',
            large3:'512GB'
        }
    }
    var type =obj.type;
    var color =obj.color;
    var large=obj.large;
    var bullet1=mySwiper.pagination.bullets[0].parentNode;
    var bullet2=mySwiper.pagination.bullets[1].parentNode;
    var bullet3=mySwiper.pagination.bullets[2].parentNode;
    return {
        init() {
            this.event();
            this.getShopListData();
        },
        event() {
            var _this=this;
            // $pagination.on('click',function(){
            //     var first=mySwiper.pagination.$el[0].children[0].children[0]
            //     // $('.box').toggleClass('move');
            //     // $('.box').toggleClass('active');
            //     first.innerHTML='<button class="my-bullet pre-bullet" tabindex="0" role="button"   aria-label="Go to slide 1">类型</button>';
            //     // first.className='.my-bullet-active'
            //     var second=mySwiper.pagination.$el[0].children[1].children[0]
            //     console.log(mySwiper.pagination.$el[0].children[1].children[0])
            //     second.innerHTML='<button class="my-bullet pre-bullet" tabindex="0" role="button"   aria-label="Go to slide 1">外观</button>';
                                
            // })
            //类型
            $leftBox.on('click',function(){
                _this.bulletsChange(0,type.type1)
            })
            $rightBox.on('click',function(){
                _this.bulletsChange(0,type.type2)
            })
            $includeLeft.on('click',function(){
                _this.bulletsChange(1,color.color1)
            })
            //颜色
            $includeCenter.on('click',function(){
                _this.bulletsChange(1,color.color2)
            })
            $includeRight.on('click',function(){
                _this.bulletsChange(1,color.color3)
            })
            //大小
            $phoneLarge1.on('click',function(){
                _this.bulletsChange(2,large.large1)
            })
            $phoneLarge2.on('click',function(){
                _this.bulletsChange(2,large.large2)
            })
            $phoneLarge3.on('click',function(){
                _this.bulletsChange(2,large.large3)
            })
            
            
        },
        bulletsChange(i,type){
            mySwiper.pagination.bullets[i].parentNode.innerHTML=`<button class="my-bullet pre-bullet" tabindex="0" role="button"   aria-label="Go to slide 1">${type}</button>`
        },
        getShopListData: function(){
            debugger
            var _this = this;
            var params = {
                success: function(data) {
                    console.log(data)
                    data = JSON.parse(data);
                    _this.insertShopList(data.data);
                }
            }
            sendAjax('../json/jsonList.json', params);
        },
    }
}())


