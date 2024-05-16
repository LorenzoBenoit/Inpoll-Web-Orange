import SondageModel from "../model/SondageModel.js";
import SondageServices from "../services/SondageServices.js";
import BaseController from "./BaseController.js";

class SondageController extends BaseController {
    constructor() {
        super(new SondageServices(SondageModel));
    }
}

export default SondageController;