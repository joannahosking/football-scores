import { createRequire } from "module";
const require = createRequire(import.meta.url);

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    league: {
        required: true,
        type: Number
    },
    standings: {
        required: true,
        type: Array
    },
    lastUpdated: {
        required: true,
        type: Date
    }
});

export default mongoose.model('Table', dataSchema);