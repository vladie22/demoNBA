const URL = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';


async function myCat () {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data)
    console.log(data.events[0].name)
    const img = document.querySelector('img');
    img.src = data[0].url;
    const h3 = document.querySelector("h3");
    h3.innerText = data[0].id;
}

const myButton = document.querySelector("button");
myButton.onclick = myCat;