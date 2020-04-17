'use strict';
const ul = document.querySelector('ul');
const  getTvSerie = async (haku)=>{
    try {

        const vastaus = await fetch("http://api.tvmaze.com/search/shows?q=" + haku);
        if (!vastaus.ok) throw new Error('jokin meni pieleen');
        const programs = await vastaus.json();
        console.log(programs);

        programs.forEach((serie) => {

            ul.innerHTML += `
        <li><h2>${serie.show.name}</h2>
        <a href="${serie.show.officialSite == null ? 
                serie.show.url : 
                serie.show.officialSite}" >Link to Site</a>
        <img src="${serie.show.image === null ? 
                'http://placekitten.com/320/200':
                serie.show.image.medium}" alt="${serie.show.name}">
        <p>${serie.show.summary}</p>
         </li>
        `;
        });
    }

    catch(error) {
        console.log(error)
    }
};
function getAndSearch(){
    document.getElementById("seriesList").innerHTML = ""
let paramText = document.getElementById("hakuteksti").value;
getTvSerie(paramText)

}
