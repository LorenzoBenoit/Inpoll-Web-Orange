document.getElementById('btn-insc').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;

    enregistreUtilisateur(prenom, nom, email, '').then(data => {
        if (data) {
            setUtilisateurLocal(data._id);
            window.location.href = "index.html";
        }
    })
})