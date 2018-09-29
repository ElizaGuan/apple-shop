var inProject = (function () {
    return {
        init(ele) {
            ele = this.ele;
            this.$nav = this.$('.down');
            this.$menu = this.$('.menu');
            this.val=this.$menu.style.display;
            this.event();
        },
        event() {
            var _this = this;
            this.$nav.onclick = function (e) {
                val=this.val;
                val='none';
                console.log(111)
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'LI' && target.className === 'iconfont icon-gouwudai last_nav') {
                    // _this.val=this.val;
                    // val = 'block';
                    _this.$menu.style.display='block';
                }
            }
            document.onmouseup = function () {
                _this.$menu.style.display='none';                                
            }
        },
        $(id) {
            return document.querySelector(id);
        }
    }
}())