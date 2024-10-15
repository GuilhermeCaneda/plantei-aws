import * as Yup from 'yup'

// Yup para verificação
export const plantSchema = Yup.object({
    _id: Yup.number(),
    imgPlant: Yup.string(),
    name: Yup.string().required(),
    subtitle: Yup.string().required(),
    type: Yup.string().required(),
    label: Yup.string().required(),
    price: Yup.number().required(),
    discountPercentage: Yup.number().min(0).max(100),
    features: Yup.string().required(),
    description: Yup.string().required(),
    isInSale: Yup.boolean().when('discount', {
        is: (discout) => discout > 0,
        then: Yup.boolean().oneOf([true]),
        otherwise: Yup.boolean().oneOf([false])
    })

})

export async function validatePlantSchema(data) {
    try {
        await plantSchema.validate(data, { abortEarly: false })
        return null

    }
    catch (err) {
        return err.errors
    }
}