import UtilisateurModel from "../model/UtilisateurModel.js";
import UtilisateurService from "../services/UtilisateurService.js";
import BaseController from "./BaseController.js";

class BlocageController extends BaseController {
    constructor() {
        super(new UtilisateurService(UtilisateurModel));
    }


    async getUtilisateursBloques(req, res) {
        try {
            const list = await this.service.getUtilisateursBloques();
            res.status(200).json(list);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: err.message });
        }
    }
}
export default BlocageController;