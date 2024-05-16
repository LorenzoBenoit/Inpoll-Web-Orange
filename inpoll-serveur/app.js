import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import utilisateurRouter from "./routes/utilisateurRoutes.js";
import sondageRouter from "./routes/sondageRouter.js";
import connection from "./tools/connection.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour analyser les données JSON
app.use(bodyParser.json());

// Middleware CORS pour autoriser les requêtes depuis toutes les origines (à ajuster selon vos besoins)
app.use(cors());

connection()
  .then(() => {
    console.log("Connexion à MongoDB établie.");

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    // Routes pour les sondages
    app.use("/sondages", sondageRouter);

    // Routes pour les utilisateurs
    app.use("/utilisateurs", utilisateurRouter);

    // Gestion des erreurs 404 (route non trouvée)
    app.use((req, res) => {
      res.status(404).json({ message: "Route non trouvée" });
    });

    // Gestion des erreurs globales
    app.use((err, req, res, next) => {
      console.error("Erreur globale :", err);
      res.status(500).json({ error: "Erreur interne du serveur" });
    });

    // Démarrage du serveur
    app.listen(port, () => {
      console.log(`Serveur en écoute sur le port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB :", err);
    process.exit(1);
  });