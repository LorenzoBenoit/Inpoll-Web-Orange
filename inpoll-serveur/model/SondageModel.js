import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const ReponseSchema = new Schema({
    numReponseQuestion: { type: Number },
    intituleReponse: { type: String }
});

const QuestionSchema = new Schema(
    {
        numOrdre: { type: Number, required: true, unique: true },
        titre: { type: String },
        reponseUnique: { type: Boolean },
        typeQuestion: { type: String },
        reponses: [String]
    },
    {
        _id: false
    }
);

const SondageQuestionSchema = new Schema({
    titre: { type: String, required: true },
    ordre: { type: Number },
    reponseUnique: { type: Boolean },
    valeurMin: { type: Number },
    valeurMax: { type: Number },
    preserveOrdre: { type: Boolean },
    typeQuestion: { type: String },
    reponses: [ReponseSchema]
});

const SondageSchema = new Schema(
    {
        _id: { type: String, required: true, default: uuidv4 },
        type: { type: String },
        utilisateur: [String],
        titre: { type: String, required: true },
        description: { type: String },
        liste: { type: String },
        question: [SondageQuestionSchema]
    },
    {
        collection: "sondages"
    }
);

export default mongoose.model("Sondage", SondageSchema);
