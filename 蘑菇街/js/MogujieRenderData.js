window.onload = function () {

    //获取标签
    var oUl = document.querySelector(".daoUl");
    var oLi = oUl.children;
    var oDiv = document.querySelector(".box").children;
    var imgBox = document.querySelector("imgBox");
    var oImg = document.querySelector("img");
    var oMain = document.querySelector(".main");

    insetData(0);

    // 方案1 for循环遍历
    // for (var i = 0, len = oLi.length; i < len; i++) {
    //     oLi[i].index = i;
    //     oLi[i].onclick = function () {
    // // 导航排他处理
    // for (var j = 0, len = oLi.length; j < len; j++) {
    //     oLi[j].classList.remove("dao");
    // }
    // this.classList.add("dao");
    // //图片排他处理
    // for (var k = 0, len = oDiv.length; k < len; k++) {
    //     oDiv[k].classList.remove("nei");
    // }
    // oDiv[this.index].classList.add("nei");
    // // 点击图片切换
    // for (var m = 0, len = data.length; m < len; m++) {
    //     oImg.src = data[this.index].src;
    // }                
    // // 点击内容切换
    // for (var n = 0, len = shopData.length; n < len; n++) {
    //     insetData(this.index);
    // }
    //     }

    // }

    // 方案2 事件委托
    oUl.onclick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        var index = target.dataset.index;

        // 导航排他处理
        for (var i = 0, len = oLi.length; i < len; i++) {
            oLi[i].classList.remove("dao");
            oDiv[i].classList.remove("nei")
        }
        target.classList.add("dao");
        oDiv[index].classList.add("nei")

        // 点击图片切换
        for (var m = 0, len = data.length; m < len; m++) {
            oImg.src = data[index].src;
        }
        // 点击内容切换
        for (var n = 0, len = shopData.length; n < len; n++) {
            insetData(index); //调用函数
        }
    }

    // 实现数据渲染
    function insetData(num) {
        var html = shopData[num].map(function (item, index) {
            return `
            <li> 
               <p class="imgCon"><img src="${item.src}"/></p>
               <p class="name">${item.name}</p>
               <div class="price">
                  <span class="nowPrice">${item.nowPrice}</span> 
                  <span class="oldPrice"><s>${item.oldPrice}</s></span>
                  <span class="collectNum">${item.collect}</span>
                  <img src="../img/collect.png" class="collect"/>   
               <div>  
            </li>
        `
        }).join("");
        oMain.innerHTML = html;
        mouse();
    }

    //mouse()实现鼠标滑过事件
    function mouse() {
        var mainLi = document.querySelector(".main").children;

        for (var i = 0, len = mainLi.length; i < len; i++) {
            mainLi[i].onmouseenter = function () {
                this.style.border = "1px solid #f00";
            }
            mainLi[i].onmouseleave = function () {
                this.style.border = "1px solid #ccc";
            }
        }
    }

}


// 抓取数据
// var box = document.querySelector(".goods_list_mod").children;
// var arr = [];

// for (var i = 0, len = box.length; i < len; i++) {
//     var obj = {};

//     obj.src=box[i].querySelector(".J_dynamic_img").src;
//     obj.name = box[i].querySelector(".title")?box[i].querySelector(".title").innerText:"";
//     obj.nowPrice = box[i].querySelector(".price_info")?box[i].querySelector(".price_info").innerText:"";
//     obj.oldPrice = box[i].querySelector(".org_price")?box[i].querySelector(".org_price").innerText:"";
//     obj.collect = box[i].querySelector(".fav_num")?box[i].querySelector(".fav_num").innerText:"";

//     arr.push(obj);
// }
// JSON.stringify(arr);