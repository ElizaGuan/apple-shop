var car = (function () {
    var $welcome = $('.welcome');
    var $carNull = $('.car-null');
    var $carFull = $('.car-full');
    var $shopList = $('.shop-list')
    var $shopShop = $('.shop-shop')
    var $totalPrice = $('.phone-price')
    var $sureNull=$('.car-sure-null')
    var $pay=$('.pay')
    return {
        init() {
            this.event();
            this.display();
            this.getShopListData();
            if (localStorage.email != '') {
                this.success();
            }
        },
        event() {
            var _this = this;
        },
        success() {
            console.log($pay[0])
            $welcome[0].innerHTML = `欢迎 ${localStorage.email}`
            $sureNull[0].style.display='none'
            $pay[0].innerHTML='结账';
            $pay.css({"background":"#0094dd","color":"#fff","font-size":"16px"})
        },
        getShopListData: function () {
            var _this = this;
            var params = {
                success: function (data) {
                    data = JSON.parse(data);
                    _this.shopList = data.data;
                    _this.display();
                    _this.getCarList();
                    // $carNull[0].style.display = 'none';
                    // $carFull[0].style.display = 'block';
                }
            }
            sendAjax('../json/shopList.json', params);
        },
        countPrice: function (arr) {
            arr = arr.map(x => {
                return x.countPrice = x.price * x.count;
            })
        },
        getCarList: function () {
            // [{id: 1, count:2}, {id: 2, count: 10}]
            this.carList = JSON.parse(localStorage.shopList);
            for (var i = 0; i < this.shopList.length; i++) {
                for (var j = 0; j < this.carList.length; j++) {
                    if (this.shopList[i].id == this.carList[j].id) {
                        Object.assign(this.carList[j], this.shopList[i]);
                        break;
                    }
                }
            }
            console.log(typeof JSON.stringify(this.carList[0]));//{id,color,name,count,price}
            // console.log(localStorage.shopList);

            this.countPrice(this.carList);
            this.insertCarList(this.carList);
            this.totalPrice(JSON.stringify(this.carList))
        },
        insertCarList: function (data) {
            var _this = this;
            var arr = [];
            var shop;
            // debugger
            // console.log(this.shopList)
            for (var i = 0; i < data.length; i++) {
                arr.push(`
                
                        <div class="list-box">
                                <div class="phone-img">
                                    <img class="my-phone" src="" alt="">
                                </div>
                                <div class="phone-infor">
                                        <div class="phone-infor-top">
                                                <h6>
                                                        <b class="type">${data[i].name}</b>
                                                        <b class="large">${data[i].large}</b>
                                                        <b class="color">${data[i].color}</b>                                                                
                                                </h6>
                                                <i class="price">${data[i].price}</i>
                                                <input class="number" type="number" pattern="[0-9]*" min="0" max="10" value="${data[i].count}">
                                                <b class="price-add">${data[i].countPrice}</b>
                                        </div>
                                        <div class="phone-infor-bottom">
                                                <div class="date">送达日期:有现货</div>
                                                <button class="del-btn"  attr-index="${i}">删除</button>
                                        </div>
                                </div>
                        </div>
                
                `);

                $shopShop[0].innerHTML = arr.join('');
                var $listBox = $('.list-box')
                var $delBtn = $('.del-btn')
                var $number = $('.number');
                var $priceAdd = $('.price-add')
                // console.log($delBtn[i])

                var $price = $('.price')
                // $totalPrice[0].innerHTML = $priceAdd[0].innerHTML;

                for (let j = 0; j < $delBtn.length; j++) {
                    $delBtn[j].onclick = function () {
                        debugger
                        _this.totalPrice($priceAdd);                        
                        $shopList[0].removeChild($listBox[j])
                        var shopList = JSON.parse(localStorage.getItem('shopList'));
                        shopList.splice(j, 1);
                        localStorage.setItem('shopList', JSON.stringify(shopList))
                        if (j == $delBtn.length - 1) {
                            location.href = 'car.html';
                        }
                    }
                    this.display();
                    $number[j].onchange = function () {
                        $priceAdd[j].innerHTML = ($number[j].value) * ($price[j].innerHTML)
                        var shopList = JSON.parse(localStorage.getItem('shopList'))
                        for (var m = 0; m < shopList.length; m++) {
                            shopList[m].count = $number[j].value;
                        }
                        localStorage.setItem('shopList', JSON.stringify(shopList))
                        _this.totalPrice($priceAdd);
                        console.log(typeof $priceAdd)
                    }
                }

                var $color = $('.color')
                var $phoneImg = $('.my-phone')
                for (var j = 0; j < $listBox.length; j++) {
                    // console.log($number[j])

                    if($color[j].innerHTML=='银色'){
                        $phoneImg[j].src='../myImg/xs-silver.jpg'
                    }
                    if($color[j].innerHTML=='深空灰色'){
                        $phoneImg[j].src='../myImg/xs-gray.jpg'
                    }
                     if($color[j].innerHTML=='金色')
                     {
                        $phoneImg[j].src='../myImg/xs-gold.jpg'
                    }
                }
            }

        },
        display() {
            if (localStorage.shopList == '[]') {
                $carNull[0].style.display = 'block';
                $carFull[0].style.display = 'none';
                $pay[0].innerHTML='继续购物';
                $pay.on('click',function(){
                    location.href='shopInfor.html'
                })
            } else {
                $carNull[0].style.display = 'none';
            }
        },
        totalPrice(params) {
            var sum = 0;
            //用来检测传进来的实参类型
            if(typeof params =='object'){
                for (var k = 0; k < params.length; k++) {
                    sum += Number(params[k].innerHTML)
                    $totalPrice[0].innerHTML = sum
                }
            }else{
                params=JSON.parse(params)
                console.log(params)                                    
                // console.log(params[0].countPrice)
                for(var i = 0; i < params.length; i++){
                    sum += params[i].countPrice
                    console.log(sum)                    
                    $totalPrice[0].innerHTML = sum
                }
            }
        }
    }
}())