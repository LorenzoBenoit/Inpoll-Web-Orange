import mongoose from "mongoose";
import {v4} from "uuid";

const Schema = mongoose.Schema;

const UtilisateurSchema = new Schema(
  {
    _id: { type: "String", required: true, default: v4 },
    prenom: { type: "String" },
    nom: { type: "String" },
    email: { type: "String", required: true, unique: true },
    profil: { type: "String" },
    restoreCode: { type: "String" },
    connected: { type: "Boolean", default: false }
  },
  { collection: "utilisateurs" }
);

UtilisateurSchema.methods.generateRestoreCode = () => {
  this.codeRestore = generateRandomCode(0, 999999);
  return this.codeRestore;
}

UtilisateurSchema.methods.checkRestoreCode = (code) => {
  return this.codeRestore ? this.codeRestore === code : false;
}

function generateRandomCode(min, max) {
  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
  return String(randomCode).padStart(new String(max).length, '0');
}

const randomCode = generateRandomCode();
console.log(randomCode);


export default mongoose.model("utilisateurs", UtilisateurSchema);
