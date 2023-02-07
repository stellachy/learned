// Event Listener 
/* A html+js：這是第一種不會對原本的東西做修改的
function clicked(){
    alert("叫你按就按?");
}
*/
/* A html+js：這是第二種，需在前面的html裡寫出在函式的()中寫出this，
才會讓那個標籤直接成為一個變數，到js這邊就可以設定自己喜歡的var名稱，在如同之前一樣進行修改。（.innerText拉之類的）
function clicked(btn){
    btn.innerText = "按您娘？";
}
*/ 

//B 直接用javaScript
/* 不改內文的用法
var btn = document.getElementById("btn");
btn.addEventListener("click", function clicked(){
    alert("叫你按就按啊?");
});
*/
var btn = document.getElementById("btn");
btn.addEventListener("click", function clicked(){
    this.innerText = "按您娘?";
    this.style.color = "indianred";
});
//注意此時function後面就不用再加一個名字了（但我猜是可加可不加la），然後這邊{}內的變數直接改用"this"即可哦！（雖然用原本的變數名稱也是ookk）

var img = document.getElementById("jspractice");
img.addEventListener("mouseover", function change(){
    img.src = "https://truth.bahamut.com.tw/s01/201907/edaa624f6882cdc725a9bca58659803b.JPG";
});
img.addEventListener("mouseout", function change(){
    img.src = "mypic_prac.jpg";
});

//內個，src的部分到底要顛倒打錯幾次才會記得ㄋ^_^????
//&這裡的函式好像建或不建都可以~重複名字也沒怎樣，反正它就是follow下面這個{}內的指令來去變化~
//&也可以改變成檔案外的連結內的圖片~
//&記住如果要再偵測一個事件，是再add一個eventlistener哦哦哦！