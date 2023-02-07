//數字 & 數字用法
var number = 919

document.write("基本運算：");
document.write(1+number+" | ");
document.write(1-number+" | ");
document.write(1*number+" | ");
document.write(1/number+" | ");
document.write(19%9);
document.write("<br/>");

var inline_divider = " | "
document.write("其他特殊用法：");
document.write(Math.abs(-50)+inline_divider);
document.write(Math.max(-50, 100, 98, number)+inline_divider);
document.write(Math.min(-50, 100, 98, number)+inline_divider);
document.write(Math.round(0.156)+inline_divider);
document.write(Math.pow(2,3)+inline_divider);
document.write(Math.sqrt(16)+inline_divider);
document.write(Math.random()+inline_divider);
document.write(Math.round(Math.random() * 10));

document.write("<h3>2nd: 製作基礎BMI計算機</h3>")
var user_height = prompt("Your height is ... (cm)");
prompt("if you see this, just skip.")
var user_weight = prompt("Your weight is ... (kg)");
user_height = parseFloat(user_height);
user_weight = parseFloat(user_weight);
var user_bmi =(Math.round((user_weight/(Math.pow((user_height/100),2))) * 10 ) /10 );
document.write("你身高"+user_height+"公分，體重"+user_weight+"公斤。");
document.write("<br/>"+"你的BMI值為"+user_bmi+"。");
document.write("<p>為什麼第二個prompt就是跑不出來…，such a pain ....，anyways...let's move on!(XDDD)</p>");

document.write("<h3>3rd: Array陣列</h3>");
var array = [2, 4, 6, "Really?", true];
document.write(array);
document.write(inline_divider+array[3]);
document.write(inline_divider+array.length);

document.write("<h3>4th: Function函式</h3>");
function add(num1, num2){
    document.write("兩數相加等於");
    document.write( num1 + num2);
    //不知為何如果直接用num1+num2是可以直接得到相加值的，但是如果想在同一個括弧用+會讓數字也變得直接往旁邊排列。（？？？
    //不過如果分成兩行寫，就沒有剛剛辣個困擾了 
    document.write(inline_divider);
    return 919
    document.write("這一行不會出現哦，寫心酸ㄉ");
    }
//way1
document.write(add(2,3));

document.write("<br/>");
//way2
var aggre =add(2,3);
document.write(aggre);
//ps. 我也不知道老師位什麼不用上面那隔就好?，可能因為這樣之後又會很不方便運算（ㄇ？）