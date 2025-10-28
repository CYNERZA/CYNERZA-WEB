
import mongoose from 'mongoose'

const industrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
        unique: true
    }
})



const Industry = mongoose.model('Industry', industrySchema)

export { Industry }
