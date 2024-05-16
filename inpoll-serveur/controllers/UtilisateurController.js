import UtilisateurModel from "../model/UtilisateurModel.js";
import UtilisateurService from "../services/UtilisateurService.js";
import { generateRandomCode } from "../tools/crypto.js";
import { sendEmail } from "../tools/email.js";
import BaseController from "./BaseController.js";

class UtilisateurController extends BaseController {
  constructor() {
    super(new UtilisateurService(UtilisateurModel));
  }

  async getAll(req, res) {
    if (req.query.action) {
      switch(req.query.action) {
        case 'getbyemail' : {
          await this.getByEmail(req, res);
          break;
        }
        case 'restore' : {
          await this.restore(req, res);
          break;
        }
        case 'check' : {
          await this.check(req, res);
          break;
        }
      }
      
    } else {
      super.getAll(req, res);
    }
  }

async getByEmail(req, res) {
  if (req.query.email) {
    try {
      const user = await this.service.getByEmail(req.query.email);
      if (!user) {
        return res.status(404).json({ message: "Entité non trouvée" });
      }
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  }
  else {
    return res.status(404).json({ message: "Email absent" });
  }
}

async restore(req, res) {
  if (req.query.email) {
    console.log(req.query.email);
    try {
      const user = await this.service.getByEmail(req.query.email);
      if (user) {
        const code = generateRandomCode(0, 999999);
        sendEmail(req.query.email, "Inpoll : code de récupération de compte", `Votre code secret est : ${code}`).then(() => {
          this.service.update(user._id, { restoreCode: code });
          return res.status(200).json({ message: "Email envoyé "});
        }).catch(err => {
          console.log(err);
          return res.status(401).json({ message: "Erreur d'envoi d'email"});  
        })
      }
      else {
        return res.status(404).json({ message: "Email absent" });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  else {
    return res.status(404).json({ message: "Email absent" });
  }
}

async check(req, res) {
  if (req.query.email && req.query.code) {
    try {
      const valid = await this.service.checkRestoreCode(req.query.email, req.query.code);
      res.status(200).json(valid);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  else {
    return res.status(404).json({ message: "Email ou code absent" });
  }
}
}
export default UtilisateurController;