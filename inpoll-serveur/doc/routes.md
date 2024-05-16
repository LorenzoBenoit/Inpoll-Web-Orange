GET /utilisateurs
renvoie la liste des utilisateurs au format JSON

GET /utilisateurs/:id
renvoie l'utilisateur d'identifiant passé en paramètre

GET /utilisateurs/action=getbyemail&email=toto
renvoie l'utilisateur par son email

GET /utilisateurs/action=restore&email=toto
envoie un email à l'utilisateur avec un code de vérification

GET /utilisateurs/action=check&email=toto&code=1111
vérifie si le code fourni est bien celui envoyé précedemment,
renvoie true ou false