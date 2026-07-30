const list=document.getElementById("heroes");
const info=document.getElementById("info");
const search=document.getElementById("search");


function showHeroes(array){


list.innerHTML="";


array.forEach(hero=>{


let div=document.createElement("div");


div.className="hero";

div.innerHTML=hero.name;


div.onclick=()=>{


info.innerHTML=`

<h2>${hero.name}</h2>

<h3>🟢 Силен против:</h3>

<p>${hero.counter.join(", ")}</p>


<h3>🔴 Слаб против:</h3>

<p>${hero.countered.join(", ")}</p>


<h3>Позиция:</h3>

<p>${hero.role}</p>

`;

};


list.appendChild(div);


});


}


showHeroes(heroes);



search.oninput=()=>{


let value=search.value.toLowerCase();


let result=heroes.filter(hero=>

hero.name.toLowerCase().includes(value)

);


showHeroes(result);


};
