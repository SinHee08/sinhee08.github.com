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

// var movie = {
//     title:"Spider-Man 2",
//     maker:"Sony Pictures Releasing",
//     duration:127,
//     actors:[
//         {
//             name:"Tobey Maguire",
//             age:48,
//             is_male:true        
//         },
//         {
//             name:"Kirsten Dunst",
//             age:41,
//             is_male:false        
//         }
//     ]
// };

// document.write(movie.actors[0].name);
// document.write(movie.actors[1].name);

/*==================== while 回圈 ======================*/
// var i = 1;

// // 先判断 后执行
// while (i <= 6){
//     document.write(i);
//     document.write("<br/>");
//     i++;
// }

// // 先执行 后判断
// do{
//     document.write(i);
//     document.write("<br/>");
//     i++;
// }while (i <= 3)

/*==================== while 回圈 (密码检验程式) ======================*/
// var password = 123456;
// var input;
// var entry_count = 1;
// var entry_limit = 3;
// var out_of_limit = false;
// while (password!=input && !out_of_limit){
//     if (entry_count <= entry_limit){
//         input = prompt ("pls insert your password");
//         entry_count ++;
//     }
//     else{
//         out_of_limit = true;
//     }
// }

// if (out_of_limit){
//     alert("log in unsucessfully");
// }
// else {
//     alert("log in sucessfully");
// }

/*==================== for 回圈 ======================*/
// for(var i = 0 ; i <=10 ; i ++){
//     document.write(i);
//     document.write("<br/>");
// }

// friends = ["dickson","alson","wilson"];
// for (var i = 0; i<friends.length; i++){
//     document.write(friends[i]);
//     document.write("<br/>");
// }

/*==================== for 回圈 (问答程式)======================*/
// var questions = [
//     {
//         prompt:"香蕉是什么颜色？\n(a)红色\n(b)绿色\n(c)黄色",
//         answer: "c"
//     },
//     {
//         prompt:"草莓是什么颜色？\n(a)红色\n(b)绿色\n(c)黄色",
//         answer: "a"
//     },
//     {
//         prompt:"1公尺等于多少公分？\n(a)1\n(b)10\n(c)100",
//         answer: "c"
//     }
// ]
//  var score = 0;
//  for(var i=0; i<questions.length; i++){
//      var input = prompt((questions[i].prompt));
//      if(input == questions[i].answer){
//         alert("correct");
//         score ++;
//      }
//      else{
//         alert("wrong! answer is " + questions[i].answer);
//      }
//  }

//  alert("Total correct " + score );

/*==================== 2维阵列 ，巢状回圈======================*/

// var number = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [0]
// ];

// for(var i=0; i<number.length; i++){
//     for(var j=0; j<number[i].length; j++){
//         document.write(number[i][j]);
//     }
//     document.write("<br/>");
// }

/*==================== class ======================*/

class Phone {
    constructor(number, year, is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof
    }
    phone_age(){
        return 2024 - this.year;
    }
}

var phone1 = new Phone("123",2018,false);
var phone2 = new Phone("456",2022,false);
var phone3 = new Phone("789",2020,true);
document.write(phone2.is_waterproof);

// var phone1 = {
//     number:"123",
//     year:2020,
//     is_waterproof:false,
//     phone_age:function(){
//         return 2024 - this.year;
//     }
// }
// var phone2 = {
//     number:"456",
//     year:2018,
//     is_waterproof:false,
//     phone_age:function(){
//         return 2024 - this.year;
//     }
// }
// var phone3 = {
//     number:"789",
//     year:2022,
//     is_waterproof:true,
//     phone_age:function(){
//         return 2024 - this.year;
//     }
// }