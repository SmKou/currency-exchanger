export function getExchange(target, amount = 1) { }

export async function makeApiCall(target, amount) {}

export function getData(target, amount, response) {
    return `The exchange rate is 1 USD to ${response.conversion_rate.toFixed(2)} ${target}. ${amount} USD is ${response.conversion_result.toFixed(2)} ${target}.`;
 }

export function getError(target, response) { 
    return `An error occurred for ${target}: ${response.status} ${response.statusText}`
}