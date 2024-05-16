import { Router } from 'express';
const router = Router();
import UtilisateurController from '../controllers/UtilisateurController.js';

const controller = new UtilisateurController();

// Créer un nouvel utilisateur
router.post('/', (req, res) => {
    new UtilisateurController().add(req, res);
});

// Récupérer tous les utilisateurs, et aussi un utilisateur par email
router.get('/',  (req, res) => {
    new UtilisateurController().getAll(req, res);
});

// Récupérer un utilisateur par son ID
router.get('/:id',  (req, res) => {
    new UtilisateurController().getById(req, res);
});

// Mettre à jour un utilisateur par son ID
router.put('/:id',  (req, res) => {
    new UtilisateurController().updateById(req, res);
});

// Supprimer un utilisateur par son ID
router.delete('/:id',  (req, res) => {
    new UtilisateurController().deleteById(req, res);
});

export default router;