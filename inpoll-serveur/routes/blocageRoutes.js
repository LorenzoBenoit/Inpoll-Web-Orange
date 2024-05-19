import { Router } from 'express';
const router = Router();
import BlocageController from '../controllers/BlocageController.js';

const controller = new BlocageController();

router.get('/', (req, res) => {
    new UtilisateurController().getUtilisateursBloques(req, res);
});

export default router;