"use strict";
import Joi from 'joi';

const domainEmailValidator = (value, helper) => {
    if(!value.endsWith("@gmail.cl")) {
        return helper.message(
            "El email debe ser del dominio @gmail.cl"
        )
    }
    return value;
}

export const userBodyValidation = Joi.object({
    nombreCompleto: Joi.string()
        .min(3)
        .max(30)
        .pattern(new RegExp("^[a-zA-Z\\s]+$"))
        .required()
        .messages({
            "string.empty": "El nombre completo no puede estar vacío.",
            "any.required": "El nombre completo es obligatorio.",
            "string.base": "El nombre completo debe ser de tipo string.",
            "string.min": "El nombre completo debe tener como mínimo 3 caracteres.",
            "string.max": "El nombre completo debe tener como máximo 30 caracteres.",
            "string.pattern.base": "El nombre completo permite solo letras de la a-z."
        }),
    rut: Joi.string()
        .min(9)
        .max(12)
        .pattern(new RegExp(/^[\0-2]?\d(\.\d{3}){2}-[\dkK]$|^[\0-2]?\d{6,7}-[\dkK]$/))
        .required()
        .messages({
            "string.empty": "El rut no puede estar vacío.",
            "any.required": "El rut es obligatorio",
            "string.base": "El rut debe ser de tipo string.",
            "string.min": "El rut debe tener como mínimo 9 caracteres.",
            "string.max": "El rut debe tener como máximo 12 caracteres",
            "string.pattern.base": "El rut debe ser con el formato xx.xxx.xxx-x o xxxxxxxx-x"
        }),
    email: Joi.string()
        .min(15)
        .max(30)
        .required()
        .email()        
        .custom(domainEmailValidator, "Validación dominio email")
        .messages({
            "string.empty": "El email no puede estar vacío.",
            "any.required": "El email es obligatorio",
            "string.base": "El email debe tener formato con dominio apropiado.",
            "string.min": "El email debe tener como mínimo 15 caracteres.",
            "string.max": "El email debe tener como máximo 30 caracteres"
        }),
    /* Tarea */
    numeroTelefono: Joi.string()
        .min(9)
        .max(10)
        .pattern(new RegExp(/^\d{9,10}$/))
        .required()
        .messages({
            "string.empty": "El número de teléfono no puede estar vacío.",
            "any.required": "El número de teléfono es obligatorio",
            "string.base": "El número de teléfono debe ser de tipo string.",
            "string.min": "El número de teléfono debe tener como mínimo 9 caracteres.",
            "string.max": "El número de teléfono debe tener como máximo 10 caracteres",
            "string.pattern.base": "El número de teléfono debe contener solo dígitos.",
        }) 
});