async function fetchSondage() {
    const recupSondage = await fetch("https://inpoll-wplaquet.azurewebsites.net/sondages");
    if (recupSondage.ok) {
        return await recupSondage.json()
    }
}

function recupSondage() {
    const element = document.getElementById("contSond");
    fetchSondage().then(data => {
        data.forEach((d) => {
            element.innerHTML += 
            "<div class='description'>"+
                `<h2>${d.titre}</h2>`+
                "<div class='reponse'>"+
                    `<p>${d.description}</p>`+
                    "<textarea id='reponse' rows='5' maxlength='300' placeholder='Veuillez saisir votre réponse (300 caractères maximum)'></textarea>"+
                "</div>"+
                "<div class='options'>"+
                    "<button class='send' id='more'>Valider votre réponse</button>"+
                    "<div>"+
                        "<button class='like' id='like'><i class='fa-regular fa-thumbs-up'></i></button>"+
                        "<button class='dislike' id='dislike'><i class='fa-regular fa-thumbs-down'></i></button>"+
                    "</div>"+
                "</div>"+
            "</div>"
        })
    })
}

recupSondage()