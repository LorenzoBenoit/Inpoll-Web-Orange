import BaseService from "./BaseService.js";

class ExpressServices extends BaseService {
    constructor(model) {
        super(model);
    }

    async getByUtilisateur(id) {
        try {
          return await this.model.find({ "listeUtilisateurs._id": id });
        } catch (error) {
          throw error;
        }
      }
}

export default ExpressServices;