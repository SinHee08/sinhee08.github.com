// document.write("<h1>信熙好帅</h1>");

/*====================基本资料形态 & 变数======================*/
// 打字
"hello world"

// 数字
123

// 布林值
true
false

// 只能是英文大小写或是数字或是$或是_的组合
// 开头不能是数字
// var my_name = "isaac";
// var my_age = 24;
// var is_male = true;
 
// document.write("有一个人叫 " + my_name);
// document.write("<br/>");
// document.write(my_name + " is " + my_age);
// document.write("<br/>");
// document.write(my_name +" is 5ft7 tall");
// document.write("<br/>");
// document.write(my_name +" hate to be 24");

/*====================制作一个基本计算机======================*/
//prompt默认打字而已
// var num_1 = prompt("pls insert num 1");
// var num_2 = prompt("pls insert num 2");

//parseInt可以把string改去正数
// num_1 = parseInt(num_1)
// num_2 = parseInt(num_2)

//parseFloat可以把string改去小数点
// num_1 = parseFloat(num_1)
// num_2 = parseFloat(num_2)
// document.write(num_1 + num_2);.

/*====================阵列 array======================*/
// var scores = [80,60,20,30,50];
// var friends = ["Ben","Alson","Dickson"]
// scores[0] = 20;
// var score1 = 80;
// var score2 = 60;
// var score3 = 20;
// var score4 = 30;
// var score5 = 50;
// document.write(scores[0]);
// document.write(friends[0]);
// document.write(friends.length);

/*====================函式 function======================*/
// function hello(name,age){
//     document.write("你好" + name + "你今年" + age + "岁");
// }

// /*呼叫function写法*/
// hello("isaac","24");

// function add(num_1,num_2){
//     document.write(num_1 + num_2);
//     document.write("<br/>");
//     return 10;
// }

// value = add (5,8)
// document.write(value);

/*====================判断 if======================*/
/* 1.
如果 你考100分
    我给你1000元
或是如果 你考80分
    我给你500元
或是如果 你考60分
    我给你100元
否则
    你给我300元
*/

// var score = 0;
// if (score == 100){
//     document.write("我给你1000元")
// } 
// else if (score >= 80){
//     document.write("我给你500元")
// }
// else if (score >= 60){
//     document.write("我给你100元")
// }
// else {
//     document.write("你给我300元")
// }

/* 2. 
如果 你考100分 且 今天下雨
    我给你1000元
否则
    你给我100元
*/

// var score = 100;
// var rainy = false;
// if (score == 100 && rainy == true){
//     document.write("我给你1000元")
// }
// else{
//     document.write("你给我100元")
// }

/* 3. 
如果 你考100分 或 今天下雨
    我给你1000元
否则
    你给我100元
*/

// var score = 100;
// var rainy = false;
// if (score == 100 || rainy == true){
//     document.write("我给你1000元")
// }
// else{
//     document.write("你给我100元")
// }

/* 4. 
如果 你考100分 或 今天没下雨
    我给你1000元
否则
    你给我100元
*/

// var score = 10;
// var rainy = true;
// if (score == 100 || !rainy){
//     document.write("我给你1000元")
// }
// else{
//     document.write("你给我100元")
// }

// function max_num(num_1,num_2,num_3){
//     if (num_1 >= num_2 && num_1 >= num_3){
//         document.write(num_1 + "is the biggest number");
//     }
//     else if (num_2 >= num_1 && num_2 >= num_3){
//         document.write(num_2 + "is the biggest number");
//     }
//     else{
//         document.write(num_3 + "is the biggest number");
//     }
// }

// max_num(7,8,9);

/*====================物件 object======================*/
// key   value
//  键     值

// var person = {
//     name:"isaac",
//     age:24,
//     is_male:true,
//     print_name:function(){
//         document.write(this.name);
//     }
// };

// person.print_name();

var movie = {
    title:"Spider-Man 2",
    maker:"Sony Pictures Releasing",
    duration:127,
    actors:[
        {
            name:"Tobey Maguire",
            age:48,
            is_male:true        
        },
        {
            name:"Kirsten Dunst",
            age:41,
            is_male:false        
        }
    ]
};

document.write(movie.actors[0].name);
document.write(movie.actors[1].name);