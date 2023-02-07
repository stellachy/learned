//while迴圈
var i = 9; 
while(i>=7){
    document.write(i);
    document.write("<br/>");
    i--;
}

document.write("<h3>2nd: 密碼檢驗程式</h3>")
//密碼檢驗程式
var password = 0919;
var input;
var i = 1;

while(input!=password && i<=3){
input = prompt("Please type your password.");
i++;
}
if(input==password){
    alert("Login successfully!");
}
else{
    alert("It's wrong password. Who are you!");
}

document.write("<p>yeah yeah 我寄己寫出來怎麼樣限制三次了!!等等來對答案，但我想紀錄一下我思考的邏輯是這樣：因為要加次數，所以我在while迴圈的條件裡面多增加拿來計次的var i，就會意味著當次數大於3跟當密碼正確時，都會跳出迴圈，再接著用一個if else去判斷是因為password對了才跳出來還是不是(比讚)</p>");
