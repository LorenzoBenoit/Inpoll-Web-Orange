import BaseService from "./BaseService.js";

class SondageService extends BaseService {
    constructor(model) {
        super(model);
    }
}

try {
    return await this.model.find({"utilisateur":id});
  } catch (error) {
    throw error;
  }

export default SondageService;