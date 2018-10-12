var shopInfor_fade = (function(){
    $fade = $('.fade-box');
    $mini = $('.mini-box');   
    var timer;
    var index=0;
    return {
        init(){
            this.events();
        },
        showImg(index){
            $mini.children().removeClass();
            $mini.children().eq(index).addClass('current');
            $fade.children('li').eq(index).fadeIn().siblings().fadeOut();
        },
        events(){
            var _this = this;
            $mini.find('li').on('click',function(){
                _this.showImg($(this).index());
            })
            $(window).scroll( function() { 
                if(document.documentElement.scrollTop>44){
                    $('.main-nav')[0].style.position='fixed';
                    $('.main-nav')[0].style.top='0';                
                }else{
                    $('.main-nav')[0].style.position='static';                
                }
            } );
        }
    }
})();


var nav=(function(){
    return {
        init(){
            this.events();
        },
        events(){

        }
    }
}) 
