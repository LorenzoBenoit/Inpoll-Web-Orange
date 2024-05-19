import BaseService from "./BaseService.js";

class UtilisateurService extends BaseService {
  constructor(model) {
    super(model);
  }

  async getByEmail(email) {
    try {
      return await this.model.findOne({ email });
    } catch (error) {
      throw error;
    }
  }

  async checkRestoreCode(email, code) {
    try {
      const user = await this.model.findOne({ email });
      return user.restoreCode === code
    } catch (error) {
      throw error;
    }
  }

  async getUtilisateursBloques(req, res) {
    try {
      return await this.model.find({ "bloque" : true})
    } catch (error) {
      throw error;
    }
  }
}

export default UtilisateurService;
