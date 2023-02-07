var height = document.getElementById("height");
var weight = document.getElementById("weight");
var btn = document.getElementById("btn");
var result = document.getElementById("result");

//下面這個方法okiedokie，可是我在想能不能直接用document.write就好
//&能不能把bmi值變成變數讓它弄另一個eventlistner
//&設這個"result"變數的必要性?就是它的innerhtml是不是為了加``這兩個才寫ㄉ??

//註：也可放入<u></u>來在bmi值下加入底線
/*
btn.addEventListener("click", function(){
    result.innerHTML = ` <p>
    您的BMI值為：
    <u>${Math.round((weight.value/Math.pow((height.value/100),2))*10)/10}</u>
    。
    </p>
    `
    height.value="";
    weight.value="";
});
*/

//其實也可以向之前一樣就用innerText去改裡面的值就好，寫法就是如下，但缺點是沒辦法用html裡的標籤去調整底線或段落等等
//那為什麼不能跟之前一樣用document.write是因為這樣網頁就只會執行答案那段文字，會讓前面那邊所有設定好、既有的都直接消失
//就是說用result.去改變的話只會改變那個部分，不會影響所有東西都直接被覆寫掉

/*
btn.addEventListener("click", function(){
    result.innerText=
    "您的BMI值為：" + 
    Math.round((weight.value/Math.pow((height.value/100),2))*10)/10 +
    "。" ; 
    height.value="";
    weight.value="";
});
*/

//??為啥不能先設成變數再帶進去阿~~~
//殼已！！！但要把這個變數值設定在{}裡面，因為這樣才會是在有值之後才跑這個算式！！！
//&then要記得只有html的元素會卡在網頁上的位置壓，js這邊的變數不會(我也不知道要怎麼寫在原本的位置裡西西)
//所以可以先用個較大的容器包住內容再放id再取得，而計算的值則可再js這裡獨立出來

index = document.getElementById("index");

btn.addEventListener("click", function(){
    var indeex = Math.round((weight.value/Math.pow((height.value/100),2))*10)/10
    index.innerHTML =
    `
    <u>${indeex}</u>
    `;
    /*
    index.addEventListener("mouseover", function(){
        index.innerHTML =  
        `
        <u style="background-color: red">${indeex}</u>
        `;
    });
    index.addEventListener("mouseout", function(){
        index.innerHTML =  
        `
        <u>${indeex}</u>
        `;
    });
    result.addEventListener("click", function(){
        index.style.backgroundColor = "blue"
    });
    */
    height.value="";
    weight.value=""; 
});



//算惹，下面這個真的弄不出來嗚嗚
/*
index.addEventListener("click", function(){
    alert("很棒ㄟ。");
    });
index.addEventListener("mouseover", function(){
    this.src = "https://truth.bahamut.com.tw/s01/201907/edaa624f6882cdc725a9bca58659803b.JPG";
    });
result.addEventListener("mouseover", function(){
    this.src = "https://truth.bahamut.com.tw/s01/201907/edaa624f6882cdc725a9bca58659803b.JPG";
    });
*/

//@@目前做不到的：再js運算出來的值之後沒辦法做像原本取得html那樣可以編輯成動態、監聽等，
//只能改變css，而且好像只能用innerhtml的那個方法嗚嗚，不能直接用index.style.color = "red";這種方式555
//index.的只能這樣改，而且還要在js裡設置另一個變數indeex才可以讓後面的套回去一樣ok...
//result.的話alert有成功、改變成圖片用src還不行，可用style.color的方式(背景的話用backgroundColor!!!
