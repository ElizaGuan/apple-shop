var inProject = (function () {
    return {
        init(ele) {
            ele = this.ele;
            this.$nav = this.$('.down');
            this.$menu = this.$('.menu');
            this.$last = this.$nav.lastElementChild;
            console.log(this.$last)
            this.val = this.$menu.style.display;
            this.flag = true;
            this.event();
        },
        event() {
            var _this = this;
            this.$last.onclick = function (e) {
                e.stopPropagation();
                val = this.val;
                val = 'none';
                e = e || window.event;
                if (_this.flag) {
                    _this.$menu.style.display = 'block';
                    _this.flag = false;
                    this.flag = _this.flag;
                }
                else {
                    _this.$menu.style.display = 'none';
                    _this.flag = true;
                    this.flag = _this.flag;
                }
            }
            this.$menu.onclick=function(e){
                e.stopPropagation();
            }
            document.onclick = function (e) {
                e.stopPropagation();
                _this.$menu.style.display = 'none';
                _this.flag = true;
                this.flag = _this.flag;
            }
        },
        $(id) {
            return document.querySelector(id);
        }
    }
}())