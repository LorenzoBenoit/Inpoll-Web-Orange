class BaseController {
    constructor(service) {
      this.service = service;
    }
  
    async add (req, res)  {
      try {
        const entity = await this.service.add(req.body);
        res.status(201).json(entity);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };
  
    async getAll  (req, res)  {
      try {
        const entities = await this.service.getAll();
        res.status(200).json(entities);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };
  
    async getById  (req, res)  {
      try {
        const entity = await this.service.getById(req.params.id);
        if (!entity) {
          return res.status(404).json({ message: 'Entité non trouvée' });
        }
        res.status(200).json(entity);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };
  
    async updateById  (req, res)  {
      try {
        const entity = await this.service.update(req.params.id, req.body);
        if (!entity) {
          return res.status(404).json({ message: 'Entité non trouvée' });
        }
        res.status(200).json(entity);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };
  
    async deleteById  (req, res)  {
      try {
        const result = await this.service.delete(req.params.id);
        if (!result) {
          return res.status(404).json({ message: 'Entité non trouvée' });
        }
        res.status(204).send();
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };
  }
  
export default BaseController;
  