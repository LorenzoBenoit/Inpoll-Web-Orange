import SondageModel from "../model/SondageModel.js";
import SondageServices from "../services/SondageServices.js";
import BaseController from "./BaseController.js";

class SondageController extends BaseController {
    constructor() {
        super(new SondageServices(SondageModel));
    }

    // The async keyword should be here, outside the function
    async getExpressById(req, res) {
        try {
            const entity = await this.service.getByUser(req.params.id);
            if (!entity) {
                return res.status(404).json({ message: 'Entité non trouvée' });
            }
            res.status(200).json(entity);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

export default SondageController;
