import { Router } from 'express';
const router = Router();
import SondageController from '../controllers/SondageController.js';

const controller = new SondageController();

// Créer un nouveeau Sondage
router.post('/', (req, res) => {
    new SondageController().add(req, res);
});

// Récupérer tous les Sondages, et aussi un Sondage par email
router.get('/',  (req, res) => {
    new SondageController().getAll(req, res);
});

// Récupérer un Sondage par son ID
router.get('/:id',  (req, res) => {
    new SondageController().getById(req, res);
});

// Mettre à jour un Sondage par son ID
router.put('/:id',  (req, res) => {
    new SondageController().updateById(req, res);
});

// Supprimer un Sondage par son ID
router.delete('/:id',  (req, res) => {
    new SondageController().deleteById(req, res);
});

export default router;