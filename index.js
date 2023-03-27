import { employeeInfo } from "./data.js";

var displayArea= document.getElementsByClassName('cardsDisplay')[0];
const curr_date=new Date();
var emp_data=[];

const getData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(employeeInfo)
    },1500)
});
getData.then((data)=>{
    emp_data=data;
    var min_age=60;
    var max_salary=0;
    emp_data.map((item)=>{
        item.age=Math.floor((curr_date - new Date(item.dob))/31557600000);
        if(item.age<min_age){
            min_age=item.age
        }
        if(item.salary>max_salary){
            max_salary=item.salary
        }
        if(item.role=="Level 1"){
            item.bonus=10;
        }
        else if(item.role=="Level 2"){
            item.bonus=15;
        }
        else{
            item.bonus=20;
        }

    })
    emp_data.find((item)=>item.age==min_age).youngest=true;
    emp_data.find((item)=>item.salary==max_salary).richest=true;
    console.log(emp_data);
}).then(()=>{
    emp_data.map((item)=>{
        var cardData='';
        var card=document.createElement('div')
        card.className='card'
        var flag=document.createElement('p');
        flag.className='flag';
        card.addEventListener('click',function(){
            console.log('being clicked');
            var fullData=`<p>${item.dob}</p><p>${item.role}</p><p>${item.salary}</p><p>Expected bonus is <storng>${(item.salary)*(item.bonus)/100}</storng></p>`;
            if(item.youngest==true){
                console.log("young");
                flag.innerHTML=`${item.fname} is the youngest employee.`;

            }
            if(item.richest==true){
                flag.innerHTML=`${item.fname} is the highest paid employee.`;
                
            }
            
            card.innerHTML=cardData+fullData;
            card.appendChild(flag);
        });
        console.log(item);
        cardData=`<h2>${item.fname} ${item.lname}</h2><h3>${item.companyName}</h3><span>${item.id}</span>`
        
        card.className='card';
        card.innerHTML=cardData;
        displayArea.appendChild(card);
    })
})




