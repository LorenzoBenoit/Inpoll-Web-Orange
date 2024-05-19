import mongoose from "mongoose";

const Schema = mongoose.Schema;


const UtilisateurSchema  = new Schema(
    {
        _id: { type: String }
    },
)
const ExpressSchema = new Schema (
    {
        _id: { type: Schema.Types.ObjectId, required: true },
        titre: { type: String },
        type: { type: String },
        listeUtilisateurs: [ UtilisateurSchema ]
    },

    { collection: "express" }
)

export default mongoose.model("xpress", ExpressSchema);