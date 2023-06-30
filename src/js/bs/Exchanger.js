export class Exchanger {
    static async getExchange(target, amount = 1) {
        const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target}/${amount}`;
        const response = await fetch(url);
        console.log(response);
        if (!response.ok)
            return getError(target, response);
        else {
            const result = await response.json();
            return getData(target, amount, result);
        }
    }

    static getData(target, amount, response) {
        return `The exchange rate is 1 USD to ${response["conversion_rate"].toFixed(2)} ${target}. ${amount} USD is ${response["conversion_result"].toFixed(2)} ${target}.`;
    }

    static getError(target, response) {
        return `An error occurred for ${target}: ${response.status} ${response.statusText}`;
    }
}