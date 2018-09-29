var inProject = (function () {
    return {
        init(ele) {
            ele = this.ele;
            this.$nav = this.$('.down');
            this.$menu = this.$('.menu');
            this.$last=this.$nav.lastElementChild;
            console.log(this.$last)
            this.val=this.$menu.style.display;
            this.flag=true;
            this.event();
        },
        event() {
            var _this = this;
            this.$nav.onclick = function (e) {
                val=this.val;
                val='none';
                // console.log(111)
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'LI' && target.className === 'iconfont icon-gouwudai last_nav') {
                    if(_this.flag){
                        _this.$menu.style.display='block';
                        _this.flag=false;
                    }
                    else{
                        _this.$menu.style.display='none';  
                        _this.flag=true;                              
                    }
                }
            }
        },
        $(id) {
            return document.querySelector(id);
        }
    }
}())