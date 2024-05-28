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
    let headEle=document.createElement("h6");
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
 
  faqDiv.forEach(ele=>{
 
    ele.addEventListener('click', () => {
      
        document.querySelectorAll('.faqDiv').forEach(div => div.style.borderTop = 'none');
        document.querySelectorAll('.numEle').forEach(num => num.style.color = 'gray');
      
    
        ele.style.borderTop = '5px solid green';
        ele.querySelector('.numEle').style.color = 'green';
       
    
        let para = ele.querySelector('p');
        if(para.style.display=="block"){
            para.style.display="none";
            ele.querySelector('.sign').innerText = '+';

        }else{
            para.style.display="block";
            ele.querySelector('.sign').innerText = '-';
        }
        
    });
    
    
  });

//   Task 4;
let dropDown=document.getElementById("dropDown");
for(let i=1;i<=10;i++){
    let option=document.createElement("option");
    option.innerText=i;
    option.value=i;
    dropDown.appendChild(option);
}
let AddItems=()=>{
   
    let itemsInput = document.getElementById('itemsInput');
    let tableBody=document.getElementById('tableBody');
    let tr=document.createElement('tr');
    tr.classList.add("notesDiv");
    let remove =document.createElement('td');
    let items=document.createElement('td');
    let noItems=document.createElement('td');
    remove.innerText='X';
    remove.classList.add('remove');
    remove.onclick=RemoveItems;
    items.innerText= itemsInput.value;
    noItems.innerText=dropDown.value;
    tr.appendChild(noItems);
    tr.appendChild(items);
    tr.appendChild(remove);
    tableBody.appendChild(tr);
    itemsInput.value='';

}
    
let RemoveItems=()=>{
   
    let allNotesDiv=document.querySelectorAll('.notesDiv');
    allNotesDiv.forEach(notesDiv=>{
        notesDiv.addEventListener('click',()=>{
            notesDiv.remove();
        })
    })
}
let ClearList=()=>{
    let allNotesDiv=document.querySelectorAll('.notesDiv');
    allNotesDiv.forEach(notesDiv=>notesDiv.remove());
}

const list=[];
let SortList=()=>{
    
    const sortOption = document.getElementById('sortMenu').value;
    const tbody = document.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
     console.log(rows);
    rows.sort((a, b) => {
        const itemA = a.children[1].textContent.toLowerCase();
        const itemB = b.children[1].textContent.toLowerCase();

        if (sortOption === 'az') {
            return itemA.localeCompare(itemB);
        } else if (sortOption === 'za') {
            return itemB.localeCompare(itemA);
        } else {
            return 0;
        }
    });

    rows.forEach(row => tbody.appendChild(row));

}
document.getElementById('sortMenu').addEventListener('change',SortList);

