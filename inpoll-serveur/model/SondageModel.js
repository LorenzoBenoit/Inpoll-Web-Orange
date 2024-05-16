import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
    {
        numOrdre: { type: Number, required: true, unique: true },
        titre : { type: String },
        reponseUnique: { type: Boolean },
        typeQuestion: { type: String },
        reponses: [String]
    },

    {
        _id: false
    }
)

const SondageSchema = new Schema (
    {
        _id: { type: Schema.Types.ObjectId, required: true },
        titre: { type: String },
        description: { type: String },
        liste: { type: String },
        habilitation: { type: String },
        question: [ QuestionSchema ]
    },

    { collection: "sondages" }
)

export default mongoose.model("Sondage", SondageSchema);