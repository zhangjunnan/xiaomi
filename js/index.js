//购物车
~function () {
    var $shop = $(".h_right"), $shopDetail = $(".shopDetail");
    $shop.on("mouseover", function () {
        $(this).addClass("bg");
        $shopDetail.stop().slideDown(300);
    }).on("mouseout", function () {
        $(this).removeClass("bg");
        $shopDetail.stop().slideUp(300);
    });
}();
//导航
~function () {
    var $shop = $(".shop1"), $shopDetail = $(".shopshow1");
    $shop.on("mouseover", function () {
        $(this).parent().parent().parent().addClass("bg");
        $shopDetail.stop().slideDown(300);
    }).on("mouseout", function () {
        $(this).removeClass("bg");
        $shopDetail.stop().slideUp(300);
    });
}();
~function () {
    var $shop = $(".shop2"), $shopDetail = $(".shopshow2");
    $shop.on("mouseover", function () {
        $(this).parent().parent().parent().addClass("bg");
        $shopDetail.stop().slideDown(300);
    }).on("mouseout", function () {
        $(this).parent().parent().parent().removeClass("bg");
        $shopDetail.stop().slideUp(300);
    });
}();
~function () {
    var $shop = $(".shop3"), $shopDetail = $(".shopshow3");
    $shop.on("mouseover", function () {
        $(this).parent().parent().parent().addClass("bg");
        $shopDetail.stop().slideDown(300);
    }).on("mouseout", function () {
        $(this).parent().parent().parent().removeClass("bg");
        $shopDetail.stop().slideUp(300);
    });
}();
~function () {
    var $shop = $(".shop4"), $shopDetail = $(".shopshow4");
    $shop.on("mouseover", function () {
        $(this).parent().parent().parent().addClass("bg");
        $shopDetail.stop().slideDown(300);
    }).on("mouseout", function () {
        $(this).parent().parent().parent().removeClass("bg");
        $shopDetail.stop().slideUp(300);
    });
}();
~function () {
    var $shop = $(".shop5"), $shopDetail = $(".shopshow5");
    $shop.on("mouseover", function () {
        $(this).parent().parent().parent().addClass("bg");
        $shopDetail.stop().slideDown(300);
    }).on("mouseout", function () {
        $(this).parent().parent().parent().removeClass("bg");
        $shopDetail.stop().slideUp(300);
    });
}();
~function () {
    var $shop = $(".shop6"), $shopDetail = $(".shopshow6");
    $shop.on("mouseover", function () {
        $(this).parent().parent().parent().addClass("bg");
        $shopDetail.stop().slideDown(300);
    }).on("mouseout", function () {
        $(this).parent().parent().parent().removeClass("bg");
        $shopDetail.stop().slideUp(300);
    });
}();
~function () {
    var $shop = $(".shop7"), $shopDetail = $(".shopshow7");
    $shop.on("mouseover", function () {
        $(this).parent().parent().parent().addClass("bg");
        $shopDetail.stop().slideDown(300);
    }).on("mouseout", function () {
        $(this).parent().parent().parent().removeClass("bg");
        $shopDetail.stop().slideUp(300);
    });
}();

~function () {
    var shop1 = utils.getElementsByClass("shop1")[0];
    shop1.onmouseover = function () {
        this.style.color = "red";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    };
    shop1.onmouseout = function () {
        this.style.color = "black";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    }
}();
~function () {
    var shop2 = utils.getElementsByClass("shop2")[0];
    shop2.onmouseover = function () {
        this.style.color = "red";
        this.style.cursor = "pointer";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    };
    shop2.onmouseout = function () {
        this.style.color = "black";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    }
}();
~function () {
    var shop3 = utils.getElementsByClass("shop3")[0];
    shop3.onmouseover = function () {
        this.style.color = "red";
        this.style.cursor = "pointer";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    };
    shop3.onmouseout = function () {
        this.style.color = "black";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    }
}();
~function () {
    var shop4 = utils.getElementsByClass("shop4")[0];
    shop4.onmouseover = function () {
        this.style.color = "red";
        this.style.cursor = "pointer";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    };
    shop4.onmouseout = function () {
        this.style.color = "black";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    }
}();
~function () {
    var shop5 = utils.getElementsByClass("shop5")[0];
    shop5.onmouseover = function () {
        this.style.color = "red";
        this.style.cursor = "pointer";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    };
    shop5.onmouseout = function () {
        this.style.color = "black";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    }
}();
~function () {
    var shop6 = utils.getElementsByClass("shop6")[0];
    shop6.onmouseover = function () {
        this.style.color = "red";
        this.style.cursor = "pointer";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    };
    shop6.onmouseout = function () {
        this.style.color = "black";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    }
}();
~function () {
    var shop7 = utils.getElementsByClass("shop7")[0];
    shop7.onmouseover = function () {
        this.style.color = "red";
        this.style.cursor = "pointer";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    };
    shop7.onmouseout = function () {
        this.style.color = "black";
        var cur = utils.children(this, "div")[0];
        cur.style.color = "black";
    }
}();
~function () {
    var shop8 = utils.getElementsByClass("shop8")[0];
    shop8.onmouseover = function () {
        this.style.color = "red";
        this.style.cursor = "pointer";
    };
    shop8.onmouseout = function () {
        this.style.color = "black";
    }
}();
~function () {
    var shop9 = utils.getElementsByClass("shop9")[0];
    shop9.onmouseover = function () {
        this.style.cursor = "pointer";
        this.style.color = "red";
    };
    shop9.onmouseout = function () {
        this.style.color = "black";
    }
}();

//左边导航
~function () {
    var $oLis = $(".na>li");
    $oLis.each(function (index, item) {
        var $itemDel = $(item).children(".navLiDetail");
        $itemDel.css("top", -(20 + index * 42));
    });

    $oLis.on("mouseover", function () {
        $(this).addClass("bg").children(".navLiDetail").stop().show();

    }).on("mouseout", function () {
        $(this).removeClass("bg").children(".navLiDetail").stop().hide();

    });
}();

//明星单品部分左右切换按钮
~function () {
    var zhan = document.getElementById("zhan");
    var zhanshibox = utils.children(zhan, "div")[0];
    var oA = utils.children(zhan, "a");
    var bleft = oA[0];
    var bright = oA[1];
    var step = 0;
    bright.onclick = function () {
        if (step >= 1) {
            step = 0;
        }
        step++;
        zhufengAnimate(zhanshibox, {left: -step * 1226}, 1000)
    };
    bleft.onclick = function () {
        if (step <= 0) {
            step = 1;
        }
        step--;
        zhufengAnimate(zhanshibox, {left: -step * 1226}, 1000)
    }
}();

//智能硬件
~function () {
    var cright = document.getElementById("cright");
    var oDiv = utils.children(cright, "div");
    for (var i = 0; i < oDiv.length; i++) {
        var cur = oDiv[i];
        ~function (i) {
            cur.onmouseover = function () {
                utils.addClass(this, "bg");
            };
            cur.onmouseout = function () {
                utils.removeClass(this, "bg");
            }
        }(i)
    }
}();
//搭配、配件部分
~function () {
    var allTabBox = utils.getElementsByClass("tabBox");
    for (var i = 0; i < allTabBox.length; i++) {
        tabChange(allTabBox[i]);
    }

    function tabChange(tabBox) {
        var tabBoxUL = utils.firstChild(tabBox);
        var oLis = utils.children(tabBoxUL, "li");
        var divList = utils.children(tabBox, "div");
        for (var i = 0; i < oLis.length; i++) {
            var curLi = oLis[i];
            curLi.index = i;
            curLi.onclick = function () {
                utils.addClass(this, "bg");
                var curLiSibling = utils.siblings(this);
                for (var k = 0; k < curLiSibling.length; k++) {
                    utils.removeClass(curLiSibling[k], "bg");
                }
                for (k = 0; k < divList.length; k++) {
                    k === this.index ? utils.addClass(divList[k], "bg") : utils.removeClass(divList[k], "bg");
                }
            }
        }
    }
}();
~function () {
    var bb = document.getElementById("bb");
    var oDi = utils.children(bb, "div");
    for (var i = 0; i < oDi.length; i++) {
        ~function (i) {
            var cur = oDi[i];
            var curr = utils.children(cur, "h1")[0];
            cur.onmouseover = function () {
                zhufengAnimate(curr, {bottom: 0}, 200)
            };
            cur.onmouseout = function () {
                zhufengAnimate(curr, {bottom: -70}, 200)
            }
        }(i)
    }
}();
~function () {
    var bbbb = document.getElementById("bbbb");
    var oDi = utils.children(bbbb, "div");
    for (var i = 0; i < oDi.length; i++) {
        ~function (i) {
            var cur = oDi[i];
            var curr = utils.children(cur, "h1")[0];
            cur.onmouseover = function () {
                zhufengAnimate(curr, {bottom: 0}, 200)
            };
            cur.onmouseout = function () {
                zhufengAnimate(curr, {bottom: -70}, 200)
            }
        }(i)
    }
}();
~function () {
    var ccc = document.getElementById("ccc");
    var oDi = utils.children(ccc, "div");
    for (var i = 0; i < oDi.length; i++) {
        ~function (i) {
            var cur = oDi[i];
            var curr = utils.children(cur, "h1")[0];
            cur.onmouseover = function () {
                zhufengAnimate(curr, {bottom: 0}, 200)
            };
            cur.onmouseout = function () {
                zhufengAnimate(curr, {bottom: -70}, 200)
            }
        }(i)
    }
}();
~function () {
    var cc = document.getElementById("cc");
    var oDi = utils.children(cc, "div");
    for (var i = 0; i < oDi.length; i++) {
        ~function (i) {
            var cur = oDi[i];
            var curr = utils.children(cur, "h1")[0];
            cur.onmouseover = function () {
                zhufengAnimate(curr, {bottom: 0}, 200)
            };
            cur.onmouseout = function () {
                zhufengAnimate(curr, {bottom: -70}, 200)
            }
        }(i)
    }
}();
~function () {
    var ff = document.getElementById("ff");
    var oDi = utils.children(ff, "div");
    for (var i = 0; i < oDi.length; i++) {
        ~function (i) {
            var cur = oDi[i];
            var curr = utils.children(cur, "h1")[0];
            cur.onmouseover = function () {
                zhufengAnimate(curr, {bottom: 0}, 200)
            };
            cur.onmouseout = function () {
                zhufengAnimate(curr, {bottom: -70}, 200)
            }
        }(i)
    }
}();
~function () {
    var fff = document.getElementById("fff");
    var oDi = utils.children(fff, "div");
    for (var i = 0; i < oDi.length; i++) {
        ~function (i) {
            var cur = oDi[i];
            var curr = utils.children(cur, "h1")[0];
            cur.onmouseover = function () {
                zhufengAnimate(curr, {bottom: 0}, 200)
            }
            cur.onmouseout = function () {
                zhufengAnimate(curr, {bottom: -70}, 200)
            }
        }(i)
    }
}();
~function () {
    var ffff = document.getElementById("ffff");
    var oDi = utils.children(ffff, "div");
    for (var i = 0; i < oDi.length; i++) {
        ~function (i) {
            var cur = oDi[i];
            var curr = utils.children(cur, "h1")[0];
            cur.onmouseover = function () {
                zhufengAnimate(curr, {bottom: 0}, 200)
            }
            cur.onmouseout = function () {
                zhufengAnimate(curr, {bottom: -70}, 200)
            }
        }(i)
    }
}();
~function () {
    var fffff = document.getElementById("fffff");
    var oDi = utils.children(fffff, "div");
    for (var i = 0; i < oDi.length; i++) {
        ~function (i) {
            var cur = oDi[i];
            var curr = utils.children(cur, "h1")[0];
            cur.onmouseover = function () {
                zhufengAnimate(curr, {bottom: 0}, 200)
            }
            cur.onmouseout = function () {
                zhufengAnimate(curr, {bottom: -70}, 200)
            }
        }(i)
    }
}();
//热评产品部分
~function () {
    var dahezi = document.getElementById("dahezi");
    var oDiv = utils.children(dahezi, "div");
    for (var i = 0; i < oDiv.length; i++) {
        var cur = oDiv[i];
        ~function (i) {
            cur.onmouseover = function () {
                utils.addClass(this, "bg");
            };
            cur.onmouseout = function () {
                utils.removeClass(this, "bg");
            }
        }(i)
    }
}();
//内容部分轮播图
~function(){
    var bannn = document.getElementById("bannn");
    var bannnInner = utils.firstChild(bannn),
        bannnLink = utils.children(bannn, "a"),
        bannnLeft = bannnLink[0],
        bannnRight = bannnLink[1];
    var divList = bannnInner.getElementsByTagName("div"),
        imgList = bannnInner.getElementsByTagName("img");
    window.setTimeout(lazyImg, 500);
    function lazyImg() {
        for (var i = 0, len = imgList.length; i < len; i++) {
            ~function (i) {
                var curImg = imgList[i];
                var oImg = new Image;
                oImg.src = curImg.getAttribute("shiweiImg");
                oImg.onload = function () {
                    curImg.src = this.src;
                    curImg.style.display = "block";
                    if (i === 0) {
                        var curDiv = curImg.parentNode;
                        curDiv.style.zIndex = 1;
                        zhufengAnimate(curDiv, {opacity: 1}, 200);
                    }
                    oImg = null;
                }
            }(i);
        }
    }

    var interval = 2000, autoTimer = null, step = 0;
    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        if (step === (imgList.length - 1)) {
            step = -1;
        }
        step++;
        setBanner();
    }

    function setBanner() {
        for (var i = 0, len = divList.length; i < len; i++) {
            var curDiv = divList[i];
            if (i === step) {
                utils.css(curDiv, "zIndex", 1);
                zhufengAnimate(curDiv, {opacity: 1}, 200, function () {
                    var curDivSib = utils.siblings(this);
                    for (var k = 0, len = curDivSib.length; k < len; k++) {
                        utils.css(curDivSib[k], "opacity", 0);
                    }
                });
                continue;
            }
            utils.css(curDiv, "zIndex", 0);
        }

    }

    bannn.onmouseover = function () {
        window.clearInterval(autoTimer);
        bannnLeft.style.display = bannnRight.style.display = "block";
    };
    bannn.onmouseout = function () {
        autoTimer = window.setInterval(autoMove, interval);
        bannnLeft.style.display = bannnRight.style.display = "none";
    };
    bannnRight.onclick = autoMove;
    bannnLeft.onclick = function () {
        if (step === 0) {
            step = imgList.length;
        }
        step--;
        setBanner();
    };


}();
~function () {
    var ban = document.getElementById("ban");
    var banInner = utils.firstChild(ban),
        banLink = utils.children(ban, "a"),
        banLeft = banLink[0],
        banRight = banLink[1];
    var divList = banInner.getElementsByTagName("div"),
        imgList = banInner.getElementsByTagName("img");
    window.setTimeout(lazyImg, 500);
    function lazyImg() {
        for (var i = 0, len = imgList.length; i < len; i++) {
            ~function (i) {
                var curImg = imgList[i];
                var oImg = new Image;
                oImg.src = curImg.getAttribute("shiweiImg");
                oImg.onload = function () {
                    curImg.src = this.src;
                    curImg.style.display = "block";
                    if (i === 0) {
                        var curDiv = curImg.parentNode;
                        curDiv.style.zIndex = 1;
                        zhufengAnimate(curDiv, {opacity: 1}, 200);
                    }
                    oImg = null;
                }
            }(i);
        }
    }

    var interval = 2000, autoTimer = null, step = 0;
    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        if (step === (imgList.length - 1)) {
            step = -1;
        }
        step++;
        setBanner();
    }

    function setBanner() {
        for (var i = 0, len = divList.length; i < len; i++) {
            var curDiv = divList[i];
            if (i === step) {
                utils.css(curDiv, "zIndex", 1);
                zhufengAnimate(curDiv, {opacity: 1}, 200, function () {
                    var curDivSib = utils.siblings(this);
                    for (var k = 0, len = curDivSib.length; k < len; k++) {
                        utils.css(curDivSib[k], "opacity", 0);
                    }
                });
                continue;
            }
            utils.css(curDiv, "zIndex", 0);
        }

    }

    ban.onmouseover = function () {
        window.clearInterval(autoTimer);
        banLeft.style.display = banRight.style.display = "block";
    };
    ban.onmouseout = function () {
        autoTimer = window.setInterval(autoMove, interval);
        banLeft.style.display = banRight.style.display = "none";
    };
    banRight.onclick = autoMove;
    banLeft.onclick = function () {
        if (step === 0) {
            step = imgList.length;
        }
        step--;
        setBanner();
    };


}();
~function () {
    var ba = document.getElementById("ba");
    var baInner = utils.firstChild(ba),
        baLink = utils.children(ba, "a"),
        baLeft = baLink[0],
        baRight = baLink[1];
    var divList = baInner.getElementsByTagName("div"),
        imgList = baInner.getElementsByTagName("img");
    window.setTimeout(lazyImg, 500);
    function lazyImg() {
        for (var i = 0, len = imgList.length; i < len; i++) {
            ~function (i) {
                var curImg = imgList[i];
                var oImg = new Image;
                oImg.src = curImg.getAttribute("shiweiImg");
                oImg.onload = function () {
                    curImg.src = this.src;
                    curImg.style.display = "block";
                    if (i === 0) {
                        var curDiv = curImg.parentNode;
                        curDiv.style.zIndex = 1;
                        zhufengAnimate(curDiv, {opacity: 1}, 200);
                    }
                    oImg = null;
                }
            }(i);
        }
    }

    var interval = 1000, autoTimer = null, step = 0;
    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        if (step === (imgList.length - 1)) {
            step = -1;
        }
        step++;
        setBanner();
    }

    function setBanner() {
        for (var i = 0, len = divList.length; i < len; i++) {
            var curDiv = divList[i];
            if (i === step) {
                utils.css(curDiv, "zIndex", 1);
                zhufengAnimate(curDiv, {opacity: 1}, 200, function () {
                    var curDivSib = utils.siblings(this);
                    for (var k = 0, len = curDivSib.length; k < len; k++) {
                        utils.css(curDivSib[k], "opacity", 0);
                    }
                });
                continue;
            }
            utils.css(curDiv, "zIndex", 0);
        }

    }

    ba.onmouseover = function () {
        window.clearInterval(autoTimer);
        baLeft.style.display = baRight.style.display = "block";
    };
    ba.onmouseout = function () {
        autoTimer = window.setInterval(autoMove, interval);
        baLeft.style.display = baRight.style.display = "none";
    };
    baRight.onclick = autoMove;
    baLeft.onclick = function () {
        if (step === 0) {
            step = imgList.length;
        }
        step--;
        setBanner();
    };


}();
~function () {
    var ba = document.getElementById("bn");
    var baInner = utils.firstChild(ba),
        baLink = utils.children(ba, "a"),
        baLeft = baLink[0],
        baRight = baLink[1];
    var divList = baInner.getElementsByTagName("div"),
        imgList = baInner.getElementsByTagName("img");
    window.setTimeout(lazyImg, 500);
    function lazyImg() {
        for (var i = 0, len = imgList.length; i < len; i++) {
            ~function (i) {
                var curImg = imgList[i];
                var oImg = new Image;
                oImg.src = curImg.getAttribute("shiweiImg");
                oImg.onload = function () {
                    curImg.src = this.src;
                    curImg.style.display = "block";
                    if (i === 0) {
                        var curDiv = curImg.parentNode;
                        curDiv.style.zIndex = 1;
                        zhufengAnimate(curDiv, {opacity: 1}, 200);
                    }
                    oImg = null;
                }
            }(i);
        }
    }

    var interval = 3000, autoTimer = null, step = 0;
    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        if (step === (imgList.length - 1)) {
            step = -1;
        }
        step++;
        setBanner();
    }

    function setBanner() {
        for (var i = 0, len = divList.length; i < len; i++) {
            var curDiv = divList[i];
            if (i === step) {
                utils.css(curDiv, "zIndex", 1);
                zhufengAnimate(curDiv, {opacity: 1}, 200, function () {
                    var curDivSib = utils.siblings(this);
                    for (var k = 0, len = curDivSib.length; k < len; k++) {
                        utils.css(curDivSib[k], "opacity", 0);
                    }
                });
                continue;
            }
            utils.css(curDiv, "zIndex", 0);
        }

    }

    ba.onmouseover = function () {
        window.clearInterval(autoTimer);
        baLeft.style.display = baRight.style.display = "block";
    };
    ba.onmouseout = function () {
        autoTimer = window.setInterval(autoMove, interval);
        baLeft.style.display = baRight.style.display = "none";
    };
    baRight.onclick = autoMove;
    baLeft.onclick = function () {
        if (step === 0) {
            step = imgList.length;
        }
        step--;
        setBanner();
    };
}();