import { Router } from 'express';
const router = Router();
import ExpressController from '../controllers/ExpressController.js';

const controller = new ExpressController();

router.get('/',  (req, res) => {
    new ExpressController().getAll(req, res);
});

router.get('/:id',  (req, res) => {
    new ExpressController().getUtilisateur(req, res);
});

router.put('/:id',  (req, res) => {
    new ExpressController().updateById(req, res);
});

export default router;