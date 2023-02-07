//for 迴圈：基本上跟while相似，只是寫法不太同

var friends = ["Amy", "Barbie", "Cathy", "Diana", "Ella"];
for(i=0; i<friends.length; i++){
    document.write(friends[i]);
    if(i!=friends.length-1){
    document.write(" | ");
    }
}

// 注意　document.write(friends.length);　是等於5 但是用順序來說是從[0]~[4]
//所以當我用i!=friends.length的時候，全部都不等於阿XDDD (因為會寫出的i最大就是4而已!!!)

document.write("<h3>2nd: 問答程式</h3>");

questions = [
    {
        prompt: "作者的英文名字是什麼？\n a) Ella \n b) Della \n c) Stella",
        answer: "c"
    },
    {
        prompt: "她現在透過哪個平台在學習coding？ \n a) YouTube \n b) Edex \n c) OpenEdu",
        answer: "a"
    },
    {
        prompt: "她跟著哪位老師在學習？\n a) 小黑 \n b) 小白 \n c) 小灰",
        answer: "b"
    }
];

var score = 0;

for(i=0; i<questions.length; i++){
    var input = prompt(questions[i].prompt);
    if(input==questions[i].answer){
        score++;
        alert("答對惹ya!");
    }
    else{
        alert("答錯嗚嗚!");
    }
}

alert("測驗結束，總共答對" + score + "題！");

//上面寫物件內的prompt只是自己去定義ㄉ而已，不是一個函式的解法　＆　要保留input就是說設一個變數是input等於prompt就好ㄌ 
// & 要注意if內的判斷程式要==哦！！！！ （但我不知道為什麼for, while迴圈好像就迷關係捏???）
// & 記得陣列[]與物件{}中要相隔的是用","！！！！

document.write("<h3>3rd: 二維陣列、巢狀迴圈</h3>");
document.write("<h4>3-1: 二維陣列</h4>");
var number = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [0]
        ];
document.write(number[0][0]);
//number後的第一個值是第x+1行、的第y+1個數(也就是第y+1列)

document.write("<h4>3-1: 巢狀迴圈</h4>");
for(i=0; i<4; i++){
    for(j=0; j<4; j++){
        document.write("i:" + i+ "j:" + j);
        document.write("<br/>");
    }
}

//巧連智（老師出的）：寫出陣列裡所有數值！(用巢狀迴圈)
