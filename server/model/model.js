import { createRequire } from "module";
const require = createRequire(import.meta.url);

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    league: {
        required: true,
        type: String
    },
    standings: {
        required: true,
        type: Array
    }
});

export default mongoose.model('Data', dataSchema);