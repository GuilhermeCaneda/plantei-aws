import { Schema, model } from 'mongoose'

const PlantSchema = new Schema({
    _id: Number,
    imgPlant: String,
    name: String,
    subtitle: String,
    type: String,
    price: Number,
    discountPercentage: Number, discountPercentage: {
        type: Number,
        min: [0, 'Discount cannot be less than 0'],
        max: [100, 'The discount cannot be greater than 100'],
    },
    label: {
        type: String,
        enum: ['Indoor', 'Outdoor'],
        required: true
    },
    features: String,
    description: String,
    isInSale: Boolean,
}, {

    toJSON: {
        virtuals: true

    }
})
// Middleware to set isInSale based on discountPercentage
PlantSchema.pre('save', function (next) {
    this.isInSale = this.discountPercentage > 0;
    next();
});

export default model('Plant', PlantSchema)