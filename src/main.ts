import './style.scss'

let icons = document.querySelectorAll(".summary img");
let category = document.querySelectorAll(".summary span");
let score = document.querySelectorAll(".summary .result");


fetch('data.json')
.then(response => response.json())
.then(data=> showInfo(data));

function showInfo(data: any ) {
    console.log(data);

    icons.forEach((element, i) =>{
        element.innerHTML = data[i].icon
    })

    category.forEach((element, i) =>{
        element.innerHTML = data[i].category
    })

    score.forEach((element, i) =>{
        element.innerHTML = data[i].score
    })


    data.forEach((e :any,i: any)=>{
        console.log(i);
        console.log(e.category);
        console.log(e.icon);
        console.log(e.score);
    })
}

