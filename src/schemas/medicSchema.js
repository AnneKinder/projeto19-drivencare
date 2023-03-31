import joi from "joi";

export const medicSchema = joi.object({
    specialty: joi.string().min(2).required(),
    location: joi.string().required()
})
