 //页面加载完毕后执行
 window.onload = function () {
    var objDemo = document.getElementById("demo");
    var objSmallBox = document.getElementById("small-box");
    var objMark = document.getElementById("mark");
    var objFloatBox = document.getElementById("float-box");
    var objBigBox = document.getElementById("big-box");
    var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];
    //鼠标一如事件
    objMark.onmouseover = function () {
        objFloatBox.style.display = "block"
        objBigBox.style.display = "block"
    }
    //鼠标移出事件
    objMark.onmouseout = function () {
        objFloatBox.style.display = "none"
        objBigBox.style.display = "none"
    }
    //鼠标移动事件
    objMark.onmousemove = function (e) {
        var event = e || window.event;  //兼容多个浏览器的event参数模式
        //鼠标相对于图片的left值和top值
        var left = event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
    
    
        var top = event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;
        if (left < 0) {//当放大镜移动到左边尽头
            left = 0;
            
        } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
            //当放大镜移动到右边尽头
            left = objMark.offsetWidth - objFloatBox.offsetWidth;
            
        }
        if (top < 0) {
            top = 0;
        } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
            top = objMark.offsetHeight - objFloatBox.offsetHeight;
        }
        objFloatBox.style.left = left + "px"; 
        objFloatBox.style.top = top + "px";
        //大图偏移量 = (大图-大图显示区)*(遮罩层偏移量/(小图-遮罩层))
        var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
        var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);
        objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
        objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
    }
}