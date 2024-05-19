import ExpressModel from "../model/ExpressModel.js";
import ExpressServices from "../services/ExpressServices.js";
import BaseController from "./BaseController.js";

class ExpressController extends BaseController {
    constructor() {
        super(new ExpressServices(ExpressModel));
    }

    async getUtilisateur(req, res) {
          try {
            const user = await this.service.getByUtilisateur(req.params.id);
            res.status(200).json(user);
          } catch (err) {
            console.log(err);
            res.status(400).json({ error: err.message });
        }
    }
}

export default ExpressController;