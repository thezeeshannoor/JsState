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
    ApiFun();
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

//Task 3 Faqs
const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  
  for(let i=0;i<faqs.length;i++){
    let mainDiv=document.createElement("div");
    mainDiv.classList.add('faqDiv');
     
    let headDiv=document.createElement("div");
    headDiv.classList.add('headDiv');
    let numEle=document.createElement("h2");
    numEle.innerText=`0${i+1}`;
    numEle.classList.add("numEle");
    numEle.style.color="gray";
    let headEle=document.createElement("h3");
    headEle.innerText=faqs[i].title;
    let sign=document.createElement('h2');
    sign.classList.add('sign');
    sign.innerText="+";
    headDiv.appendChild(numEle);
    headDiv.appendChild(headEle);
    headDiv.appendChild(sign);
  
  
    let paraEle=document.createElement("p");
    paraEle.innerText=faqs[i].text;
    paraEle.style.display="none";
  
    mainDiv.appendChild(headDiv);
    mainDiv.appendChild(paraEle);
    document.getElementById('faqs').appendChild(mainDiv);
  };
  let faqDiv=document.querySelectorAll('.faqDiv');
  let toggle=true;
  faqDiv.forEach(ele=>{
 
    ele.addEventListener('click',()=>{
      
     
        const allParas = document.querySelectorAll('#faqs p');
        allParas.forEach(p => p.style.display = 'none');
        let para = ele.querySelector('p');

        const allMainDiv=document.querySelectorAll(".faqDiv");
        allMainDiv.forEach(mainDiv=>mainDiv.style.borderTop="none");
        ele.style.borderTop='5px solid green';

        const allNumEle=document.querySelectorAll('.numEle');
        allNumEle.forEach(numEle=>numEle.style.color="gray");

        let selectNumEle=ele.querySelector('.numEle');
        selectNumEle.style.color="green";

        const allSign=document.querySelectorAll('.sign');
        allSign.forEach(sign=>sign.innerText='+');

        let selectSign=ele.querySelector('.sign');
        selectSign.innerText="-";
        if(para.style.display=="block" ){
            para.style.display="none"
            toggle=true;
            
        }else{
            para.style.display="block";
            toggle=false;
        }
     
    });
    
  })
