var createID = (function () {
    return {
        init(ele) {
            this.$ele = this.$(ele);
            this.$head = this.$('.head');
            this.$born = this.$('.born');
            this.$email = this.$('.email');
            this.$emailError = this.$('.email-error');
            // this.data.msg='';
            this.$passli = this.$('.pass-ul').children;
            console.log(this.$passli[0])
            this.$password = this.$('.pass');
            this.$span = this.$('.pass-span');
            this.$passWarm = this.$('.passWarm');
            this.$strong = this.$('.strong-back');
            this.$surePass = this.$('.sure-pass');
            this.$createBtn = this.$('.create-btn');

            this.$passError = this.$('.passError');
            this.$sureError = this.$('.sure-error')
            this.$falsePass = this.$('.false-pass')
            this.event();
        },
        event() {
            var _this = this;
            this.$email.onchange = function () {
                var params = {
                    data: {
                        email: _this.$email.value
                    },
                    success: function (data) {
                        // _this.$emailError.style.display = 'none';
                        data = JSON.parse(data);
                        _this.checkID(data);
                    }
                }
                sendAjax('http://localhost:1234/apple-shop/php/checkEmail.php', params);
            }
            this.$password.oninput = function () {
                _this.checkPassword()
            }
            this.$password.onfocus = function () {
                _this.$passWarm.style.display = 'block';
            }
            this.$password.onblur = function () {
                _this.$passWarm.style.display = 'none';
            }
            this.$password.onchange = function () {
                _this.$passWarm.style.display = 'none'
                if (_this.$span.innerHTML == '弱' || _this.$span.innerHTML == '') {
                    _this.errorInput(_this.$password, _this.$falsePass, 'block', 'red', 'rgb(250, 223, 227)', '输入有效密码。');
                } else {
                    _this.errorInput(_this.$password, _this.$falsePass, 'none', '#d6d6d6', 'none');
                }
            }
            this.$surePass.onchange = function () {
                if (_this.$password.value !== _this.$surePass.value) {
                    _this.errorInput(_this.$surePass, _this.$sureError, 'block', 'red', 'rgb(250, 223, 227)', '您输入的密码不匹配。');
                } else {
                    _this.errorInput(_this.$surePass, _this.$sureError, 'none', '#d6d6d6', 'none');
                }
            }
            this.$createBtn.onclick = function () {
                _this.getElements();
                // debugger
                var params = {
                    method: 'post',
                    data: {
                        email: _this.$email.value,
                        password: _this.$password.value
                        // born: _this.$born.value
                    },
                    success: function (data) {
                        data = JSON.parse(data);
                        _this.createSuccess(data);
                    }
                }
                sendAjax('http://localhost:1234/apple-shop/php/createID.php', params);
            }
        },
        checkID(data) {
            var str = /[a-zA-Z_0-9]{2,17}@(qq|QQ|163|126|gmail|yahoo|sina).(cn|com)/
            var emailFlag = str.test(this.$email.value);
            if (emailFlag) {
                if (data.code == 200) {
                    //不存在
                    this.errorInput(this.$email, this.$emailError, 'none', '#d6d6d6', 'none');
                } else {
                    this.errorInput(this.$email, this.$emailError, 'block', 'red', 'rgb(250, 223, 227)', data.msg);
                }
            } else {
                this.errorInput(this.$email, this.$emailError, 'block', 'red', 'rgb(250, 223, 227)', '输入有效的电子邮件地址以用作您的 Apple ID。');
            }
        },
        errorInput(eleInp, eleError, display, borderColor, bg, inner) {
            eleError.style.display = display;
            eleInp.style.borderColor = borderColor;
            eleInp.style.background = bg;
            eleError.innerHTML = inner;
        },
        createSuccess(data) {
            if (data.code == 200) {
                location.href = 'inProject.html';
            } else {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                // alert(data.msg)
            }

        },
        $(id) {
            return document.querySelector(id)
        },
        checkPassword() {
            var val = this.$password.value
            //验证至少一个小写和一个大写
            var reg1 = /^.(?=.*[A-Z])(?=.*[a-z]).*$/
            var test1 = reg1.test(val)
            //验证至少一个数字            
            var reg2 = /^.(?=.*\d).*$/
            var test2 = reg2.test(val)
            //验证至少八位                     
            var reg3 = /^.*(?=.{8,}).*$/;
            var test3 = reg3.test(val)
            //验证是否有特殊字符           
            var reg4 = /^.*(?=.*[!@#$%^&*? ]).*$/
            var test4 = reg4.test(val)
            if (test1) {
                this.$passli[1].style.color = 'rgb(48, 209, 48)';
            } else {
                this.$passli[1].style.color = '#5f5f60';
            }
            if (test2) {
                this.$passli[2].style.color = 'rgb(48, 209, 48)';
            } else {
                this.$passli[2].style.color = '#5f5f60';
            }
            if (test3) {
                this.$passli[0].style.color = 'rgb(48, 209, 48)';
            } else {
                this.$passli[0].style.color = '#5f5f60';
            }
            if (test1 || test2 || test3) {
                this.listShow('33%', 'red', '弱');
            }
            if (test1 && test2 && test3) {
                this.listShow('66%', 'orange', '中等');
                if (test4) {
                    this.listShow('100%', 'rgb(48, 209, 48)', '强');
                }
            }
        },
        listShow: function (width, back, inner) {
            this.$strong.style.width = width;
            this.$strong.style.background = back;
            this.$span.innerHTML = inner;
        },
        getElements() {
            var x = document.getElementsByTagName("input");
            for (var i = 0; i < x.length - 2; i++) {
                if (x[i].value == "") {
                    console.log(11)
                    x[i].nextElementSibling.style.display = 'block';
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    return false;// 有空值
                } else {
                    x[i].nextElementSibling.style.display = 'none';
                }
            }
        }
    }
}())