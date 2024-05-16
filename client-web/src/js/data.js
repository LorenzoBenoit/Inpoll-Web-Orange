const LS_CLE_ID = 'id-util';
const URL_SERVEUR = 'https://inpoll-wplaquet.azurewebsites.net';
const URL_UTILISATEURS = `${URL_SERVEUR}/utilisateurs`;

/**
 * Retourne les informations d'un utilisateur à partir de son identifiant
 * @param {*} idUser
 */
async function getUtilisateur(idUtilisateur) {
    const res = await fetch(`${URL_UTILISATEURS}/${idUtilisateur}`);
    if (res.ok) {
        return await res.json();
    }
    else return null;
}

/**
 * Vérifie si cet email est enregistré pour un utilisateur
 * @param {*} email 
 */
function verifEmail(email) {
    if (email === UTIL.email) {
        return true;
    }
    return false;
}

/**
 * Vérifie si le code passé en paramètre est bien celui attendu pour cet email
 * @param {*} email 
 * @param {*} code 
 * @return {String} retourne un objet utilisateur si le code est validé, retourne null sinon
 */
function verifCodeEmail(email, code) {
    if (code === '1111' && email === UTIL.email) {
        return UTIL
    }
    return null;
}

/**
 * Enregistre un utilisateur
 * @param {*} prenom
 * @param {*} nom
 * @param {*} email
 * @returns renvoi l'identifiant du nouvel utilisateur
 */
async function enregistreUtilisateur(prenom, nom, email, restoreCode) {
    const util = {
        prenom,
        nom,
        email,
        restoreCode,
        profil: 'utilisateur',
    }

    console.log(JSON.stringify(util));
    const res = await fetch(URL_UTILISATEURS, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(util)
    });
    
    if (res.ok) {
        return await res.json();
    }
    
    else {
        return null;
    }
}

/**
 * Renvoi l'identifiant de l'utilisateur enregistré localement
 * @returns identifiant
 */
function getUtilisateurLocal() {
    //return localStorage.getItem(LS_CLE_ID);
    return localStorage.getItem(LS_CLE_ID);
}

/**
 * Enregistre l'identifiant de l'utilisateur localement
 */
function setUtilisateurLocal(idUtilisateur) {
    localStorage.setItem(LS_CLE_ID, idUtilisateur);
}