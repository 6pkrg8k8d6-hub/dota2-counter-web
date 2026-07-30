let heroes = [];

async function loadHeroes() {

    const response = await fetch(
        "https://raw.githubusercontent.com/odota/dotaconstants/master/build/heroes.json"
    );

    const data = await response.json();


    heroes = Object.values(data)
    .filter(hero => hero.localized_name)
    .map(hero => ({

        name: hero.localized_name,

        id: hero.id,

        image:
        `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace("npc_dota_hero_","")}.png`,


        role: hero.primary_attr,


        counters: {
            strong: [],
            weak: []
        }

    }));


    console.log(
        "Героев загружено:",
        heroes.length
    );


    renderHeroes(heroes);

}
