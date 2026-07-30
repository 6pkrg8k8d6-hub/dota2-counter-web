function analyzeDraft(){


    let input = document
    .getElementById("enemyPick")
    .value
    .trim()
    .toLowerCase();



    let result =
    document.getElementById("result");



    if(!input){

        result.innerHTML =
        "Введите героя врага";

        return;

    }



    let enemy =
    heroes.find(hero=>

        hero.name
        .toLowerCase()
        .includes(input)

    );



    if(!enemy){

        result.innerHTML =
        "Герой не найден";

        return;

    }



    let recommendations=[];



    heroes.forEach(hero=>{


        let data =
        counters[hero.name];


        if(!data) return;



        if(
        data.strongAgainst
        .includes(enemy.name)
        ){

            recommendations.push(hero.name);

        }


    });



    if(recommendations.length){


        result.innerHTML=`

        <h3>
        Лучшие контрпики против ${enemy.name}
        </h3>

        <p>
        🟢 ${recommendations.join(", ")}
        </p>

        `;


    }

    else{


        result.innerHTML=

        "Нет данных по контрпику";


    }



}
