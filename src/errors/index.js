export function conflictError(message){
    return {
        name: "ConflictError",
        message
    }
}

export function duplicatedEmailError(){
    return {
        name: "DuplicatedEmailError",
        message: "E-mail already in use."
    }
}

export function duplicatedMedicError(){
    return {
        name: "DuplicatedMedicError",
        message: "Medic already registered."
    }
}

export function unauthorizedError(){
    return {
        name: "UnauthorizedError",
        message: "You must be signed in to continue."
    }
}

export function notFoundError(){
    return {
        name: "NotFoundError",
        message: "No results for this search!"
    }
}

export function invalidCredentialsError(){
    return {
        name: "InvalidCredentialsError",
        message: "Incorrect e-mail or password."
    }
}