//T給ㄉmission 4：設一個max_num的函式－＞讓我們輸入三個值，找出最大的
function max_num(num1, num2, num3){
    num1 = prompt("請輸入數字1");
    num2 = prompt("請輸入數字2");
    num3 = prompt("請輸入數字3");
    document.write(Math.max(num1, num2, num3));
}
max_num();

document.write("<br/>");
function max_num_T(num4,num5,num6){
    if (num4>=num5 && num4>=num6){
        return num4;
    }
    else if (num5>=num4 && num5>=num6){
        return num5
    }
    else{
        return num6
    }
};
document.write(max_num_T(3,9865,65));

document.write("<h3>2nd: Object物件</h3>");

var object = {
    //鍵: 值
    name: "stella",
    age: prompt("How old are you?"),
    is_male: false,
    //值也可以為函數
    print_name: function(){
        if (this.age ==22){
            document.write(this.name)
        }
        else {document.write("no one")}
    }
};
object.print_name();

//document.write(object.name)

document.write("<h3>3rd: 真實世界的物件(a kind of practice la)</h3>");

var movie = {
    title: "Me Before You",
    year: 2016,
    is_English: true,
    cast: [
        {name: "Emilia Clarke",
         age:36,
         is_male: false},
        {name: "Samuel George",
         age:36,
         is_male: true}
    ]
};


//寫出movie的標題
document.write(movie.title+inline_divider);
//寫出movie是不是英文
document.write(movie.is_English+inline_divider);
//寫出女主角(第一位cast裡的資料)的年紀
document.write(movie.cast[0].name,movie.cast[0].age,movie.cast[0].is_male);
