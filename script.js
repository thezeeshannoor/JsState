const messages = [
    "Step 1: Learn React ⚛️",
    "Step 2: Apply for jobs 💼",
    "Step 3: Invest your new income 🤑",
];
let txt = document.getElementById("txt");
txt.innerText = messages[0];

let menuFun = () => {
    let menu = document.getElementById("menu");
    menu.classList.toggle('d-none');
}

let counter = 0;
let num = document.getElementsByClassName("num");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let Next = () => {
    if (counter == messages.length - 1) {
        counter = counter;
        next.style.backgroundColor = "gray";
    } else {
        counter++;
        prev.style.backgroundColor = "rgb(99, 14, 179)";
    }

    BgNum();
    txt.innerText = messages[counter];
}

let Prev = () => {
    if (counter == 0) {
        counter = counter;
        prev.style.backgroundColor = "gray";
    } else {
        counter--;
        next.style.backgroundColor = "rgb(99, 14, 179)";
    }
    BgNum();
    txt.innerText = messages[counter];
}

let Reset = () => {
    counter = 0;
    BgNum();
    txt.innerText = messages[counter];
    next.style.backgroundColor = "rgb(99, 14, 179)";
    prev.style.backgroundColor = "rgb(99, 14, 179)";
}
let BgNum = () => {

    for (let i = 0; i < messages.length; i++) {
        if (num[i] == num[counter]) {
            num[counter].classList.add('bgNum');
        } else {
            num[i].classList.remove('bgNum');
        }
    }
}
BgNum();

//second task js code

// for step increment
let conStep=1;
let stepCount=document.getElementById("stepCount");
let SubStep=()=>{
    if(conStep==1)conStep=1;
    else conStep--;
stepCount.innerText=conStep;
}
let AddStep=()=>{
    conStep++;
    stepCount.innerText=conStep;
}

//for count increment js
let con=0;
let conInc=document.getElementById("conInc");
let SubCount=()=>{
    if(con==0)con=0;
    else con--;
    conInc.innerText=con;
    let pro=con*conStep;
    date(pro)
}

let AddCount=()=>{
    con++;
    conInc.innerText=con;
    let pro=con*conStep;
    date(pro)
    ApiFun();
}

//date
let date=(con)=>{
    const currentDate = new Date();  
if(con){
    currentDate.setDate(currentDate.getDate() + con)
}

const dateString = currentDate.toDateString();

console.log(`Current date: ${dateString}`);
let dateTxt=document.getElementById("dateTxt");
dateTxt.innerText=dateString;
}
date();

///fetch api
let ApiFun=()=>{
    let adviceTxt=document.getElementById("adviceTxt");
fetch('https://api.adviceslip.com/advice').then((data)=>{
    // console.log(data.json());
    return data.json();
}).then((dataJson)=>{
    adviceTxt.innerText= dataJson.slip.advice;
}).catch((err)=>{
    console.log(err);
});
}
ApiFun();

