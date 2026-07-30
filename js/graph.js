const graph = document.getElementById("graph");


function createHeroNodes(){

    graph.innerHTML = "";


    heroes.forEach((hero,index)=>{


        let div = document.createElement("div");

        div.className = "hero";


        let angle = (index / heroes.length) * Math.PI * 2;


        let x = 50 + Math.cos(angle) * 35;
        let y = 50 + Math.sin(angle) * 35;


        div.style.position="absolute";

        div.style.left = x + "%";
        div.style.top = y + "%";

        div.style.transform="translate(-50%,-50%)";


        div.innerHTML = `

        <img src="${hero.image}" 
        alt="${hero.name}">

        `;


        div.onclick = ()=>selectHero(hero);


        graph.appendChild(div);


    });


}



function selectHero(hero){


let info=document.getElementById("heroInfo");


let data=counters[hero.name];


info.innerHTML=`

<h2>${hero.name}</h2>

<p>
<b>Позиция:</b> ${hero.role}
</p>


<h3 style="color:#65ff65">
🟢 Контрит:
</h3>

<p>
${data?.strongAgainst.join(", ") || "Нет данных"}
</p>


<h3 style="color:red">
🔴 Контрят:
</h3>

<p>
${data?.weakAgainst.join(", ") || "Нет данных"}
</p>

`;



drawLines(hero);


}



function drawLines(hero){


let old=document.querySelectorAll(".line");

old.forEach(e=>e.remove());



let center=document.querySelector(".hero");


if(!center) return;


let data=counters[hero.name];


if(!data)return;



data.strongAgainst.forEach(name=>{


let target=[...document.querySelectorAll(".hero")]

.find(x=>x.innerText===name);


if(target){

createLine(center,target,"green");

}


});


}



function createLine(a,b,color){


let line=document.createElement("div");


line.className="line";


line.style.position="absolute";

line.style.height="3px";

line.style.background=color;


graph.appendChild(line);


}
