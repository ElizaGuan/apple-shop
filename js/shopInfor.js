var shopInfor = (function(){
    $dotBox = $('#uu');
    $imgBox = $('#box');
    var timer;
    return {
        init(){
            this.events();
            this.autoPlay(0);
        },
        showImg(index){
            $dotBox.children().removeClass();
            $dotBox.children().eq(index).addClass('current');
            $imgBox.children('li').eq(index).fadeIn().siblings().fadeOut();
        },
        autoPlay(index){
            var _this = this;
            clearInterval(timer);
            timer = setInterval(function(){
                index++;
                if (index==$('#box li').length) {
                    index = 0;
                }
                _this.showImg(index);
            },1000);
        },
        events(){
            var _this = this;
            $dotBox.find('li').on('click',function(){
                _this.showImg($(this).index());
                _this.autoPlay($(this).index());
            });
        }
    }
})();
