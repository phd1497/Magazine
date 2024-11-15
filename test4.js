// var namee = "Cody";
// var age = 28;
// var isStudent = true;
// var info ={
//     street: "Portage Eve",
//     city: "Winnipeg",
//     zipcode:"R3B 2X1"
// };
// console.log(namee);
// console.log(age);
// console.log(isStudent);
// console.log(info);

// namee = "Hoang Dat";
// age +=1;
// isStudent = false;
// info.city = "Vietnam";

// console.log(namee);
// console.log(age);
// console.log(isStudent);
// console.log(info);
// //test case

// {
// let a = 5;
// let b = --a;

// console.log("a=", a);
// console.log("b=", b);
// }

// {
// let a = 5;
// let b = a--;

// console.log("a=", a);
// console.log("b=", b);
// }

// {
// let a = 5;
// let b = ++a;

// console.log("a=", a);
// console.log("b=", b);
// }

// {
// let a = 5;
// let b = a++;

// console.log("a=", a);
// console.log("b=", b);
// }

// let num1 = 10;
// let num2 = 3;
// console.log("result=", num1+num2);
// console.log("result=", num1-num2);
// console.log("result=", num1*num2);
// console.log("result=", num1/num2);
// console.log("result=", num1%num2);
// console.log("result=", num1**num2);


// console.log("result=", num1 == num2);
// console.log("result=", num1 === num2);
// console.log("result=", num1 != num2);
// console.log("result=", num1 !== num2);
// console.log("result=", num1 > num2);
// console.log("result=", num1 < num2);
// console.log("result=", num1 >= num2);
// console.log("result=", num1 <= num2);

// var text1 = "1497";
// var text2 = 1497;
// var text3 = "Cody";


// console.log("kq=",text1 == text2);
// console.log("kq=",text1 == text3);
// console.log("kq=",(text1 == text2) && text3);
// console.log("kq=",text1 != text3);
// console.log("kq=",(text1 == text2) || !text3);


// var odd = 2;
// var even = 10;


// if(even%odd == 0){
//     console.log("true");
// }

// let num4 = 18;

// switch (num4) {
//     case 19:
//             console.log("cc");
//     break;

//         case 18:
//             console.log("<3");
//         break;

//     default:
//         break;
// }


// for(let num3 =0; num3 <10; num3++){
//     console.log(num3);
// }


const food_arr = ['Cheese','Ice cream', 'bread'];
const food_arr2 = ["Cheese","Ice cream", "bread"];
const full_nm ={
    firstname: 'Hoang Dat',
    lastname: 'Phan',
    age:'28'
};

food_arr.copyWithin(1,0,1);

const full_nm2 = 'Hoang Dat Phan';

for(let x in full_nm){
    console.log('name = ',full_nm[x]);
}

var testLowercase = 'hoang dat phan';
console.log(testLowercase.toUpperCase());
console.log(testLowercase.substring(7));


let numbers = [5, 14, 15, 17];
let found = numbers.find(index => index > 9);
console.log(found);

const quote = ['You will rich in future', 
    'You will become a boss in future', 
    'You have to buy a milk tee for Dat'];

let listcus = ['Long', ' Dat'];
document.getElementById("list-guys").innerHTML = listcus;
function pickRandomName() {
    // const randomIndex = Math.floor(Math.random() * names.length);
    // const randomName  = names[randomIndex];
     const randompick  = Math.floor(Math.random() * quote.length);
     const pickquote   = quote[randompick];


    // document.getElementById("result").innerText = `Name: ${randomName}`;
    // let rd_age = Math.floor((Math.random() * 20)+1);
    // document.getElementById("result-age").innerText = `Age: ${rd_age}`;


    debugger
    const info_customer = {
        Name: document.getElementById("first-nm").value +" "+ document.getElementById("last-nm").value,
        Age: document.getElementById("age-cus").value
    };

    document.getElementById("result-quote").innerHTML = 
    `Name: ` + info_customer.Name + `<br>Age: ` + info_customer.Age + `<br>Prediction: ${pickquote}` ;
}

function Addcus(){
    
    let takenm = document.getElementById("first-nm").value;

    listcus.push(takenm);
    document.getElementById("list-guys").innerHTML = listcus
}

function Delcus(){

    let takedelnm = document.getElementById("nm-del").value;
    
    listcus = listcus.filter(item => item.toUpperCase() !== takedelnm.toUpperCase());

    document.getElementById("list-guys").innerHTML = listcus.join(', ');
    console.log(listcus);
}

