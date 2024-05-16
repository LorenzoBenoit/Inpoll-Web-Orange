class BaseService {
    constructor(model) {
      this.model = model;
    }
  
    async add(data) {
      try {
        const doc = new this.model(data);
        return await doc.save();
      } catch (error) {
        throw error;
      }
    }
  
    async getAll() {
      try {
        return await this.model.find();
      } catch (error) {
        throw error;
      }
    }
  
    async getById(id) {
      try {
        return await this.model.findById(id);
      } catch (error) {
        throw error;
      }
    }
  
    async update(id, data) {
      try {
        data._id = undefined;
        return await this.model.findByIdAndUpdate(id, data, { new: true });
      } catch (error) {
        throw error;
      }
    }
  
    async delete(id) {
      try {
        return await this.model.findByIdAndRemove(id);
      } catch (error) {
        throw error;
      }
    }
  }
  
export default BaseService;
  