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
      
        let para = ele.querySelector('p');
        
        let isOpen = para.style.display === 'block';
        document.querySelectorAll('.faqDiv').forEach(faqDiv => {
            faqDiv.style.borderTop = 'none';
            faqDiv.querySelector('.numEle').style.color='gray';
            faqDiv.querySelector('p').style.display='none';
            faqDiv.querySelector('.sign').innerText = '+';
        });
       
        if(isOpen){
            
            return para.style.display="none";
        }
        ele.style.borderTop = '5px solid green';
        ele.querySelector('.numEle').style.color = 'green';
        para.style.display="block";
        ele.querySelector('.sign').innerText = '-';
        
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
    if(itemsInput.value==''){
        return;
    }
    let itemsList=document.getElementById('itemsList');
    let wrap=document.createElement('p');
    wrap.classList.add('todoP');
    let check=document.createElement('input');
    check.type='checkbox';
    check.classList.add('check');
    check.onclick=CheckFun;
    let div=document.createElement('div');
    div.classList.add("notesDiv");
    let remove =document.createElement('h6');
    let items=document.createElement('h6');
    let noItems=document.createElement('h6');
    remove.innerText='X';
    remove.classList.add('remove');
    
    remove.addEventListener('click',()=>{
        RemoveItems(div)
    })
    
    items.innerText= itemsInput.value;
    noItems.innerText=dropDown.value;
    div.appendChild(check);
    wrap.appendChild(noItems);
    wrap.appendChild(items);
    div.appendChild(wrap);
    div.appendChild(remove);
    itemsList.appendChild(div);
    itemsInput.value='';

    CheckFun();
    Strike();
}
   
let RemoveItems=(div)=>{
   
    div.remove();
}
let ClearList=()=>{
    let allNotesDiv=document.querySelectorAll('.notesDiv');
    allNotesDiv.forEach(notesDiv=>notesDiv.remove());
}


let SortList=()=>{
    
    const sortOption = document.getElementById('sortMenu').value;
    const itemsList = document.querySelector('#itemsList');
    const rows = Array.from(itemsList.querySelectorAll('div'));
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

    rows.forEach(row => itemsList.appendChild(row));

}
document.getElementById('sortMenu').addEventListener('change',SortList);

let CheckFun=()=>{
 let farAwayTxt=document.getElementById('farAwayTxt');
let Allcheck=document.querySelectorAll('.check');
let packed=0; let count=0;
Allcheck.forEach(check=>{
    count++;
 if(check.checked){
    packed++;
 }
});
farAwayTxt.innerText=`You have ${count} items on your list, and you already packed ${packed} (${(packed *100)/count}%)`
}

let Strike=()=>{
    let notesDivv=document.querySelectorAll('.notesDiv');
notesDivv.forEach(div=>{
    div.addEventListener('click',()=>{
        
       let p= div.querySelector('p');
       let check=div.querySelector('.check');
       if(check.checked){
        p.innerHTML=`<s>${p.innerText}</s>`;
       }else{
        p.innerHTML=p.innerText;
       }
       
     
       
    })
})
}

// Task 5 cards 
const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];

  let cards=document.getElementById('cards');
  for(let i=0;i<questions.length;i++){
    
    let div=document.createElement('div');
    div.classList.add('card','white');
    div.setAttribute("id",`${questions[i].id}` );

    div.innerText=questions[i].question;
   
    cards.appendChild(div);
    
  }

let allCard=document.querySelectorAll('.card');

let allCardFun=()=>{
    let allCardd=document.querySelectorAll('.card');
    for(let i=0;i<questions.length;i++){
        allCardd[i].style.backgroundColor="white";
        allCard[i].textContent=questions[i].question;
        
        
    }
}
allCard.forEach(card=>{
    
    card.addEventListener('click',(e)=>{
        
        let isOpen = card.style.backgroundColor === 'pink';
        allCardFun();
        let id=e.target.id;
        let ques=questions.find(q=>q.id==id);
   
        if(ques && card.style.backgroundColor=='white'){
            card.textContent=ques.answer
            card.style.backgroundColor="pink";  
        }
        if(isOpen){
            card.textContent=ques.question;
            card.style.backgroundColor="white";
        }
    });
})

// Task 6 Bill
let menu=document.getElementById('menuu');
let frdMenu=document.getElementById('frdMenu');
let total=document.getElementById('total');

let BillCal=()=>{
    let avg=(parseInt(frdMenu.value) + parseInt(menu.value))/2;
    let tip=(avg * parseInt(bill.value))/100;
    total.innerText=`You Pay $ ${parseInt(bill.value) + tip} ($ ${parseInt(bill.value)} + $ ${tip} tip)`
}
let bill =document.getElementById('bill');

frdMenu.addEventListener('change',BillCal);


let ResetCal=()=>{

bill.value="";
menu.value='0';
frdMenu.value='0';
total.innerText='';
}

// Task 7 profile card
const profileData = [
    {
      id: 1,
      name: "Jonas Schmedtmann",
      intro:
        "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
      image: "images/1.jpg",
      skills: [
        {
          name: "React",
          color: "lightblue",
          level: "Intermediate",
        },
        {
          name: "HTML+CSS",
          color: "blue",
          level: "Advanced",
        },
        {
          name: "JavaScript",
          color: "yellow",
          level: "Intermediate",
        },
        {
          name: "Svelte",
          color: "orangered",
          level: "Beginner",
        },
      ],
    },
    {
      id: 2,
      name: "Sara Vieira",
      intro:
        "Developer Advocate at YLD and Speaker. I enjoy coding, traveling, and sharing knowledge with the community.",
      image: "images/2.jpg",
      skills: [
        {
          name: "React",
          color: "lightblue",
          level: "Intermediate",
        },
        {
          name: "JavaScript",
          color: "yellow",
          level: "Intermediate",
        },
        {
          name: "GraphQL",
          color: "purple",
          level: "Advanced",
        },
        {
          name: "Node.js",
          color: "green",
          level: "Intermediate",
        },
      ],
    },
    {
      id: 3,
      name: "Chris Coyier",
      intro:
        "Web Developer, Writer, and Speaker. I love building things for the web and sharing what I learn through my blog and talks.",
      image: "images/3.jpg",
      skills: [
        {
          name: "HTML+CSS",
          color: "blue",
          level: "Advanced",
        },
        {
          name: "JavaScript",
          color: "yellow",
          level: "Intermediate",
        },
        {
          name: "SVG",
          color: "orange",
          level: "Intermediate",
        },
        {
          name: "WordPress",
          color: "blue",
          level: "Intermediate",
        },
      ],
    },
    {
      id: 4,
      name: "Ari Lerner",
      intro:
        "Software Engineer, Author, and Speaker. I specialize in building scalable web applications and teaching others how to do the same.",
      image: "images/4.jpg",
      skills: [
        {
          name: "Angular",
          color: "red",
          level: "Intermediate",
        },
        {
          name: "Node.js",
          color: "green",
          level: "Advanced",
        },
        {
          name: "TypeScript",
          color: "blue",
          level: "Intermediate",
        },
        {
          name: "Docker",
          color: "blue",
          level: "Intermediate",
        },
      ],
    },
    {
      id: 5,
      name: "Ali Spittel",
      intro:
        "Senior Developer Advocate at AWS and Blogger. I'm passionate about education, accessibility, and building inclusive communities in tech.",
      image: "images/5.jpg",
      skills: [
        {
          name: "Python",
          color: "blue",
          level: "Intermediate",
        },
        {
          name: "JavaScript",
          color: "yellow",
          level: "Intermediate",
        },
        {
          name: "React",
          color: "lightblue",
          level: "Intermediate",
        },
        {
          name: "AWS",
          color: "orange",
          level: "Advanced",
        },
      ],
    },
  ];
  
 let profileCardSec=document.getElementById('profileCardSec');
for(let i=0;i<profileData.length;i++){
    let div=document.createElement('div');
    div.classList.add('profileCard');
    let img=document.createElement('img');
    img.src=profileData[i].image;
    let name=document.createElement('h5');
    name.classList.add('name');
    name.innerText=profileData[i].name;
    let intro=document.createElement('p');
    intro.innerText=profileData[i].intro;

    let skills=document.createElement('div');
    skills.classList.add('skills');
    for(let j=0;j<profileData[i].skills.length;j++){
        let skill=document.createElement('div');
        skill.innerText=profileData[i].skills[j].name;
        skill.style.backgroundColor=profileData[i].skills[j].color;
        
        skills.appendChild(skill);
    }

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(intro);
    div.appendChild(skills);

    profileCardSec.appendChild(div)

}


// Task 8 
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "images/6.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "images/7.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "images/8.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "images/9.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "images/10.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "images/6.jpg",
      soldOut: false,
    },
  ];
  
let pizzaDataDiv=document.getElementById('pizzaData');
for(let i=0;i<pizzaData.length;i++){
 let div=document.createElement('div');
 div.classList.add('pizzaChild');
 let img=document.createElement('img');
 img.src=pizzaData[i].photoName;

 let txt=document.createElement('div');
 let head=document.createElement('h4');
 head.innerText=pizzaData[i].name;
 let desc=document.createElement('p');
 desc.innerText=pizzaData[i].ingredients;
 let price=document.createElement('b');
 price.innerText=pizzaData[i].price;

 if(pizzaData[i].soldOut==true){
    price.innerHTML="<b>SOLD OUT</b>";
    div.style.color="gray";
    div.style.filter="grayscale(100%)";
 }

 txt.appendChild(head);
 txt.appendChild(desc);
 txt.appendChild(price);

 div.appendChild(img);
 div.appendChild(txt);

 pizzaDataDiv.appendChild(div);
}
  