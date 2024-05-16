let modalInsc;
let utilisateur = null;

document.addEventListener('DOMContentLoaded', () => {
    modalInsc = new bootstrap.Modal('#modal-insc');
    
    hide('bloc-insc');
    hide('bloc-connexion');
    hide('mess-erreur-code');
    hide('mess-code-ok');

    document.getElementById('frm-insc').addEventListener('submit', () => {
        if (isShown('bloc-email')) {    
            stepCheckEmail();
        }
        else if (isShown('bloc-insc')) {
            stepInsc();
        }

        else if (isShown('bloc-connexion')) {
            stepConnexion();
        }
    })

    const idUtil = getUtilisateurLocal();
    if (!idUtil) {
        modalInsc.show();
    }

    else {
        utilisateur = getUtilisateur(idUtil);
        if (utilisateur) afficheId();
    }
});

function stepCheckEmail() {
    const email = document.getElementById('txt-email').value;
    if (verifEmail(email)) {
        show('bloc-connexion');
    }

    else {
        show('bloc-insc');
    }

    hide('bloc-email');
}

function stepInsc() {
    const email = document.getElementById('txt-email').value;
    const prenom = document.getElementById('txt-prenom').value;
    const nom = document.getElementById('txt-nom').value;
    utilisateur = enregistreUtilisateur(prenom, nom, email);
    modalInsc.hide();
    afficheId();
    console.log(`Bienvenue ${utilisateur.idUtilisateur}`);
}

function stepConnexion() {
    const email = document.getElementById('txt-email').value;
    const code = document.getElementById('txt-code-verif').value;
    utilisateur = verifCodeEmail(email, code);
    if (utilisateur) {
        document.getElementById('mess-code-ok').textContent = `Bienvenue ${utilisateur.prenom} !`;
        show('mess-code-ok');
        setTimeout(() => {
            modalInsc.hide();
            afficheId();
        }, 2000);
        console.log(`Content de vous revoir ${utilisateur.idUtil}`);
    }

    else {
        show('mess-erreur-code');
        setTimeout(() => {
            hide('mess-erreur-code')
        }, 2000);
    }
}

function autoId() {
    const idUtilisateur = getUtilisateurLocal();
    if (idUtilisateur) {
        getUtilisateur(idUtilisateur).then(data => {
            if (data) {
                utilisateur = data;
                afficheId();
            } else {
                window.location.href = "inscription.html";
            }
        })
    }

    else {
        window.location.href = "inscription.html";
    }
}

function afficheId() {
    if (utilisateur) {
        document.getElementById('loginUtilisateurNom').textContent = `${utilisateur.prenom}`;
        document.getElementById('loginUtilisateurPrenom').textContent =  `${utilisateur.nom}`;
    }

    else {
        document.getElementById('loginUtilisateurNom').textContent = '';
        document.getElementById('loginUtilisateurPrenom').textContent =  '';
    }
}

autoId();

