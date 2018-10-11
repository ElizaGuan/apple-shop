var login = (function () {
    return {
        init(ele) {
            this.ele = ele;
            this.$btn = this.$('.login-btn');
            this.$email = this.$('.email');
            this.$password = this.$('.password');
            this.$inp = this.$('.inp');
            this.$warn = this.$('.warm')
            this.$inpWarn = document.createElement('p');
            this.$inp.insertBefore(this.$inpWarn, this.$email);
            this.event();
        },
        event() {
            var _this = this;
            this.$email.oninput=function(){
                debugger
                if(_this.$email.value==''){
                    console.log(11)
                    _this.$email.style.background='rgb(253, 253, 170)'
                    _this.$email.style.color='red';
                }else{
                    _this.$email.style.background='none'
                    _this.$email.style.color='black';
                }
            }
            this.$password.oninput=function(){
                debugger
                if(_this.$password.value==''){
                    console.log(11)
                    _this.$password.style.background='rgb(253, 253, 170)'
                    _this.$password.style.color='red';
                }else{
                    _this.$password.style.background='none'
                    _this.$password.style.color='black';
                }
            }
            this.$btn.onclick = function () {
                var params = {
                    method: 'post',
                    data: {
                        email: _this.$email.value,
                        password: _this.$password.value
                    },
                    success: function (data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost:1234/10_1/apple-shop/php/login.php', params)
            }
        },
        $(id) {
            return document.querySelector(id);
        },
        loginSuccess: function (data) {
            if (data.code == 200) {
                document.cookie = "user-id=" + data.data.id;
                document.cookie = "token=" + data.data.token;
                localStorage.userImg = data.data.ataver;
                //跳到成功登录的界面
                location.href = `car.html?email=${this.$email.value}`;
                localStorage.email=this.$email.value;
            } else {
                this.$inpWarn.innerHTML = data.msg1;
                this.$warn.style.marginTop = '48px';
                this.$inpWarn.className = 'inpWarn';
            }
        }
    }
}
())