const heroesContainer = document.getElementById("graph");
const search = document.getElementById("search");


function renderHeroes(list){


    heroesContainer.innerHTML="";


    list.forEach((hero,index)=>{


        let div=document.createElement("div");

        div.className="hero";


        div.style.position="absolute";


        let angle=(index/list.length)*Math.PI*2;


        div.style.left =
        (50 + Math.cos(angle)*35)+"%";


        div.style.top =
        (50 + Math.sin(angle)*35)+"%";


        div.style.transform =
        "translate(-50%,-50%)";


        div.innerHTML=`

        <img src="${hero.image}"
        title="${hero.name}">

        `;


        div.onclick=()=>selectHero(hero);


        heroesContainer.appendChild(div);


    });


}



search.addEventListener("input",()=>{


let value =
search.value.toLowerCase();



let result =
heroes.filter(hero=>

hero.name.toLowerCase()
.includes(value)

);



renderHeroes(result);



});



renderHeroes(heroes);
