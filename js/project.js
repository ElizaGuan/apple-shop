var inProject = (function () {
    return {
        init(ele) {
            ele = this.ele;
            this.$nav = this.$('.down');
            this.$menu = this.$('.menu');
            this.$first = this.$nav.firstElementChild;
            // console.log(this.$('.down'))
            this.$last = this.$nav.lastElementChild;
            this.val = this.$menu.style.display;
            this.flag = true;
            this.$success = this.$('.success'); 
            this.event();
            // this.url = location.search.slice(1);
            if (localStorage.email!= '') {
                this.success();
            }
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
            this.$success.onclick=function(){
                localStorage.setItem('email','');
                localStorage.setItem('shopList','[]');
            }
            this.$first.onclick = function () {
                location.href = 'index.html'
            }
            this.$menu.onclick = function (e) {
                e.stopPropagation();
            }
            document.onclick = function (e) {
                // e.stopPropagation();
                _this.$menu.style.display = 'none';
                _this.flag = true;
                this.flag = _this.flag;
            }
        },
        $(id) {
            return document.querySelector(id);
        },
        success(){           
            this.$success.innerHTML = `注销 ${localStorage.email}`
        }
        // success() {
        //     this.url = this.getParams(this.url);
        //     var email = this.url.email;
        //     var $success = document.querySelector('.success');
        //     var $welcome = document.querySelector('.welcome');            
        //     console.log($success);
        //     $welcome.innerHTML = `欢迎 ${localStorage.email}`            
        //     $success.innerHTML = `注销 ${localStorage.email}`
        // },
        // getParams(url) {
        //     var obj = {};
        //     url = url.split('&');
        //     for (var i = 0; i < url.length; i++) {
        //         var str = url[i].split('=');
        //         obj[str[0]] = str[1];
        //     }
        //     return obj;
        // }
        
    }
}())