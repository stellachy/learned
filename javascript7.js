//巧連智（老師出的）：寫出陣列裡所有數值！(用巢狀迴圈)

//二維維陣列如下
var number = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
    ];
/*這是巢狀迴圈(for me as an indication!)
for(i=0; i<4; i++){
for(j=0; j<4; j++){
    document.write("i:" + i+ "j:" + j);
    document.write("<br/>");
}
}
*/

document.write("<h4>巧連智：巢狀迴圈寫出陣列的所有數值</h4>");
for(i=0; i<number.length; i++){
    for(j=0; j<number[i].length; j++)
    {
        document.write(number[i][j]);
    }
    document.write("<br/>");
}

//幾乎快要跟老師的一樣惹，但他的換行是等到寫完一行陣列才換，所以是放在大的迴圈底下，而不是小的迴圈！

document.write("<h3>2nd: Class</h3>")
//Class (就像物件的模板一樣) **注意class的名字通常字首為大寫！**
class Phone{
    constructor(number, year, is_waterproof){
    this.number=number;
    this.year=year;
    this.is_waterproof=is_waterproof;
    }
    phone_age = function(){
        return 2023 - this.year;
    }
}

var phone1 = new Phone ("123", 2021, true);
document.write(phone1.phone_age());

//函式的{內}要加"return"，函式設定可用上面或同老師的直接用phone_age(){return 2023 - this.year}
/*原本的話，我們會這樣建立一個一個的物件：
var phone1 = {
            number: "123",
            year: 2021,
            is_waterproof: true,
            phone_age: function(){
                return 2023 - this.year;
            }
    }
var phone2 ...
***然後記得物件{}內用,隔開阿阿阿阿阿要中風哦天****
*/