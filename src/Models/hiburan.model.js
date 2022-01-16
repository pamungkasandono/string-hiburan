const mongoose = require("mongoose");

mongoose.pluralize(null);

const HiburanSchema = mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        default: "Unknown",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("hiburan", HiburanSchema);
