import FormPlant from '../models/FormPlant.js'
import Counter from '../models/CounterSchema.js'

import { validatePlantSchema } from '../validations/PlantValidation.js';


// Function to get the next sequential ID
async function getNextSequenceValue(sequenceName) {
    const counter = await Counter.findOneAndUpdate(
        { _id: sequenceName },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    );
    return counter.sequence_value;
}

class PlantController {

    async store(req, res) {

        const {
            name,
            subtitle,
            type,
            price,
            discountPercentage,
            label,
            features,
            description,
        } = req.body

        // Checks if a file was uploaded and gets the image filename
        const imgPlant = req.file ? req.file.filename : null;

        try {
            // Gets the next sequential ID
            const plantId = await getNextSequenceValue('plantId');

            const validationError = await validatePlantSchema(req.body)

            if (validationError) {
                return res.status(400).json({ error: 'Validation failed', details: validationError })
            }

            // Create a plant
            const plant = await FormPlant.create({
                _id: plantId,
                name,
                subtitle,
                type,
                price,
                discountPercentage,
                label,
                features,
                description,
                imgPlant,
            })

            //Format response
            const formattedPlant = {
                id: plant._id,
                name: plant.name,
                subtitle: plant.subtitle,
                label: plant.label,
                price: `R$ ${plant.price.toFixed(2)}`,
                discountPercentage: `${plant.discountPercentage.toFixed(2)}%`,
                isInSale: plant.isInSale,
                features: plant.features,
                description: plant.description,
                imgUrl: plant.imgPlant,
            };

            return res.status(200).json({ plants: [formattedPlant] });
        }
        catch (err) {
            console.error('Error when registering the plant:', err);
            return res.status(400).json({ error: 'Error when registering the plant.', details: err.message });
        }
    }
    // Get general
    async index(req, res) {
        const { status } = req.params;

        try {
            const plants = await FormPlant.find({ status });
            if (plants.length === 0) {
                return res.status(404).json({ error: 'No plants found' });
            }
            return res.json(plants);
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    }

    // List plant by id
    async id(req, res) {
        const { plant_id } = req.params;

        try {
            const plant = await FormPlant.findById(plant_id);
            if (!plant) {
                return res.status(404).json({ error: 'Plant not found' });
            }
            return res.json(plant);
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    }
}
export default new PlantController()