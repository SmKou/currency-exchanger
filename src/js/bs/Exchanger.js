export function getExchange(target, amount = 1) { }

export async function makeApiCall(target, amount) {}

export function getData(response) { }

export function getError(target, response) { 
    return `An error occurred for ${target}: ${response.status} ${response.statusText}`
}