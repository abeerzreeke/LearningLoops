// //////////////////////////////////////////////////////////

// // store input numbers
// // let age = parseInt(prompt('Enter Your age'));

// // //add two numbers

// // // display the sum
// // if (age < 18){
// //     alert("Sorry, you are too young to drive this car. Powering off")
// // }
// // else if (age == 18){
// //     alert("Congratulations on your first year of driving. Enjoy the ride!")
// // }
// // else{
// //     alert("Powering On. Enjoy the ride!")
// // }

// // let a = 2 + 2;

// // switch (a) {
// //   case 3:
// //     alert( 'Too small' );
// //     break;
// //   case 4:
// //     alert( 'Exactly!' );
// //     break;
// //   case 5:
// //     alert( 'Too large' );
// //     break;
// //   default:
// //     alert( "I don't know such values" );
// // }

// let admin = {
//     userName: "Abeer",
//     password: "1234"
// }

// let database = [admin];

// let newsfeed=[
//     admin1 = {
//         userName: "Meme",
//         timeline: "12.4"

//     },
//     admin2 = {
//         userName: "Mrmr",
//         timeline: "8"
//     },
//     admin3 = {
//         userName: "Tote",
//         timeline: "4"
//     }
// ]

// console.log(admin1.userName);

// for (let i = 0; i <= 15; i++) {
//     if (i%2 == 0)
//         console.log(i + ' is even')
//     else
//     console.log(i + ' is odd');
// }

// let person = {fname:"John", lname:"Doe", age:25};
// for (let x in person) {
//   console.log(x) //fname lname age
//   console.log(person[x]) // John Doe 25
// }
///Loops//
// let names= ["john", "sarah", 23, "Rudolf",34];

// for (let i of names)
// { 
//     if(typeof(i) != 'string')
//         continue;
//     if(i[0] == i[0].toUpperCase())
//         console.log(i)   
//     else{
//         console.log(i.charAt(0).toUpperCase() + i.slice(1));
//     }     
// }
//Exercise 1 : Your Favorite Colors

// let myColors = ['red','blue','yellow']

// myColors.forEach(element => console.log(element));
////////////////////////////////////////////////////////////////////////////
//Exercise 2 : Secret Group

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let ssma = "";

// for (let i of names){
//     ssma += i[0]
// }
// console.log(`The secret society is  ${ssma.split('').sort().join('')}`)
//////////////////////////////////////////////////////////////////////////////
//Exercise 3 : Repeat The Question
// var age = parseInt(prompt('Enter num'));

// do {
//     var age = parseInt(prompt('Enter new num'));
// }
// while (age < 10 );
//////////////////////////////////////////////
//Exercise 4 : List Of People

// let people = ["Greg", "Mary", "Devon", "James"]

// for (let i in people) {
//     console.log(people[i]) 
//  }

//  const index = people.indexOf("Greg");
//  if (index > -1) {
//    people.splice(index, 1);
//  }
//  console.log(people); 

//  const index1 = people.indexOf("James");
//  people[index1] = "Jason"
//  console.log(people); 

//  people.push('Abeer')
//  console.log(people);

//  const ind = people.indexOf("Jason");
//  for(let i=0; i<=ind; i++){
//      console.log(people[i]);
// }

// var citrus = people.slice(0, people.length-1);
// console.log(citrus)
/////////////////////////////////////////////////////////////////////////
//Exercise 5 : Attendance

// let guestList = {
//     Randy: "Germany",
//     Karla: "France",
//     Wendy: "Japan",
//     Norman: "England",
//     Sam: "Argentina"
// }


// let name = prompt('Enter Your Name');
// for(let x in guestList){
//     if(`${name}` == x){
//         console.log(`Hi! I'm ${name}, and I'm from` + ' ' + guestList[name])
//     }
//     else{
//         console.log("Hi! I'm a guest.")
//     }

// }
///////////////////////////////////////////////////////////////
//Exercise 1 : Building Management

// let building = {
//     number_levels : 4,
//     number_of_apt_by_level : {
//         "1": 3,
//         "2": 4,
//         "3": 9,
//         "4": 2,
//     },
//     name_of_tenants : ["Sarah", "Dan", "David"],
//     number_of_rooms_and_rent:  {
//         "Sarah": [3, 990],
//         "Dan":  [4, 1000],
//         "David": [1, 500],
//     },
// }

// console.log(building.number_levels)
// console.log(building.number_of_apt_by_level[1],building.number_of_apt_by_level[3])
// console.log(building.name_of_tenants[1],building.number_of_rooms_and_rent.Dan)
// let sum=(building.number_of_rooms_and_rent.Sarah[1] + building.number_of_rooms_and_rent.David[1])
// if (sum > building.number_of_rooms_and_rent.Dan[1]){
//     var Dan_rent = prompt('Please increase Dan rent')
// }
// building.number_of_rooms_and_rent.Dan[1] = (`${Dan_rent}`)
// console.log(`${Dan_rent}`)

// for (let x in building) {
//     console.log(x) //fname lname age
//     console.log(building[x]) // John Doe 25
// }

///////////////////////////////////////////////////////////////////
//Exercise 1 : Grade Average

var average = 0;
var course = {

    mater: [],
    grade: [],
    coefficien: []
};
var user = prompt('Enter Your Name')

var numberOfCourses = parseInt(prompt('Enter The Number Of Courses You Have'))
console.log(numberOfCourses)
myGradeChart(numberOfCourses)

function myGradeChart(numberOfCourses){

    for(let i=0; i<numberOfCourses;i++){

        var mater = prompt('Enter The Name Of The Corse')
        course.mater.push(`${mater}`);

        var grade = prompt(`give you the grade that he thinks you will get for this ${mater} course`)
        course.grade.push(parseInt(`${grade}`))

        var coefficien = prompt(`give you the coefficien of ${mater} course`)
        course.coefficien.push(parseInt(`${coefficien}`))
    
    }
}
if (confirm('You wants to continue ?')) {
    var plusCourses = parseInt(prompt('How many courses you want to add'))
    myGradeChart(plusCourses)
    myAverag();
  } 
  else{
    myAverag();
}

function myAverag(){
    var multGradeCoe = 0;
    var sumCoefficien = 0;
    var gradeCoe; 
    for(i = 0; i < course.mater.length; i++){
        gradeCoe = course.grade[i] * course.coefficien[i];
        multGradeCoe += gradeCoe;
        sumCoefficien += course.coefficien[i];

    }
    average = (multGradeCoe/sumCoefficien).toFixed(2)
    alert(`${user} You'r Average in this semester is: ${average} `)
   
}

