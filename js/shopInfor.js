// window.onload=$('.first-title').stop().animate({
//     top:0
// },2000)


var fadeEvent = (function () {
    // $love=$('.love')
    var $next = $('.next-btn')
    var $leftBox = $('.left-box')
    var $rightBox = $('.right-box')
    var $includeLeft = $('.include-left')
    var $includeCenter = $('.include-center')
    var $includeRight = $('.include-right')
    var $phoneLarge1 = $('.phone-large1')
    var $phoneLarge2 = $('.phone-large2')
    var $phoneLarge3 = $('.phone-large3')
    var $pagination = $('.pagination');
    var $newImg = $('.new-phone-img')
    var $last = $('.last-slide')
    var $price = $('.price')
    var $priceText = $('.price-text')
    var $carBtn = $('.car-btn')
    var obj = {
        type: {
            type1: 'iPhone xs',
            type2: 'iPhone Max'
        },
        color: {
            color1: '银色',
            color2: '深空灰色',
            color3: '金色'
        },
        large: {
            large1: '64GB',
            large2: '256GB',
            large3: '512GB'
        }
    }
    var type = obj.type;
    var color = obj.color;
    var large = obj.large;
    return {
        init() {
            this.event();

        },
        event() {
            var _this = this;
            //类型
            $leftBox.on('click', function () {
                _this.bulletsChange(0, type.type1)
            })
            $rightBox.on('click', function () {
                _this.bulletsChange(0, type.type2)
            })
            $includeLeft.on('click', function () {
                _this.bulletsChange(1, color.color1)
                console.log($newImg[0])
                $newImg[0].src = '../myImg/iphone-xs-silver-AV3.jpg'
            })
            //颜色
            $includeCenter.on('click', function () {
                _this.bulletsChange(1, color.color2)
                $newImg[0].src = '../myImg/iphone-xs-_AV3.jpg'
            })
            $includeRight.on('click', function () {
                _this.bulletsChange(1, color.color3)
                $newImg[0].src = '../myImg/iphone-xs-gold-AV3.jpg'
            })
            //大小
            $phoneLarge1.on('click', function () {
                _this.bulletsChange(2, large.large1)
                _this.getShopListData();
            })
            $phoneLarge2.on('click', function () {
                _this.bulletsChange(2, large.large2)
                _this.getShopListData();
            })
            $phoneLarge3.on('click', function () {
                _this.bulletsChange(2, large.large3)
                _this.getShopListData();
            })
            $carBtn.on('click', function () {
                debugger;
                var id = $price[0].id;
                var count = 1;
                _this.addCar(id,count);
                location.href = 'car.html'
            })

        },
        bulletsChange(i, type) {
            mySwiper.pagination.bullets[i].innerHTML = type;
            mySwiper.pagination.bullets[i].style.color = 'rgb(83, 134, 243)'
            mySwiper.pagination.bullets[i].style.width = '70px'
        },
        getShopListData: function () {
            // debugger
            var _this = this;
            var params = {
                success: function (data) {
                    data = JSON.parse(data);
                    _this.insertShopList(data.data);
                }
            }
            sendAjax('../json/shopList.json', params);
        },
        insertShopList: function (data) {
            for (var i = 0; i < data.length; i++) {
                if (mySwiper.pagination.bullets[0].innerHTML == data[i].name) {
                    if (mySwiper.pagination.bullets[2].innerHTML == data[i].large) {
                        $price[0].innerHTML = 'RMB ' + data[i].price
                        $price[0].setAttribute('id', data[i].id)
                    }
                }
            }
        },
        // 添加商品
        addCar(id, count) {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            for (var i = 0; i < shopList.length; i++) {
                if (shopList[i].id === id) {
                    // 商品已经存在
                    shopList[i].count = Number(shopList[i].count) + Number(count);
                    break;
                }
            }
            if (i === shopList.length) {
                // 商品不存在
                shopList.push({ id: id, count: count ,color:mySwiper.pagination.bullets[1].innerHTML});
            }
            console.log(shopList)
            localStorage.shopList = JSON.stringify(shopList);
        }
    }
}())


var shopInfor_fade = (function () {
    var $fade = $('.fade-box');
    var $mini = $('.mini-box');
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
            $(".include-left").mouseenter(function () {
                $('.to-left1').stop().animate({
                    left: '15%'
                }, 500)
                $('.to-right1').stop().animate({
                    left: '45%'
                }, 500)
            })
            $(".include-left").mouseleave(function () {
                $('.to-left1').stop().animate({
                    left: '20%'
                }, 500)
                $('.to-right1').stop().animate({
                    left: '40%'
                }, 500)
            })


            $(".include-center").mouseenter(function () {
                $('.to-left2').stop().animate({
                    left: '15%'
                }, 500)
                $('.to-right2').stop().animate({
                    left: '45%'
                }, 500)
            })
            $(".include-center").mouseleave(function () {
                $('.to-left2').stop().animate({
                    left: '20%'
                }, 500)
                $('.to-right2').stop().animate({
                    left: '40%'
                }, 500)
            })


            $(".include-right").mouseenter(function () {
                $('.to-left3').stop().animate({
                    left: '15%'
                }, 500)
                $('.to-right3').stop().animate({
                    left: '45%'
                }, 500)
            })
            $(".include-right").mouseleave(function () {
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
