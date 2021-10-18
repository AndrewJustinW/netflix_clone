const mongoose = require("mongoose")

const ListSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
    content: { type: Array }
},
    { timestamps: true })

module.export = mongoose.model("List", ListSchema)