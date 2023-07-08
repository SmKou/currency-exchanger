export default class Exchanger {
    static async getExchange(base = 'USD', target = 'EUR', amount = 1) {
        const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${target}/${amount}`;
        const response = await fetch(url)
            .catch(error => this.getError(error, {
                status: 418,
                statusText: 'Failed to fetch'
            }));
        if (!response.ok)
            return this.getError(target, response);
        else {
            const result = await response.json();
            return this.getData(target, amount, result);
        }
    }

    static async getCurrency() {
        const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`;
        const response = await fetch(url)
            .catch(error => this.getError(error, {
                status: 418,
                statusText: 'Failed to fetch'
            }));
        if (!response.ok)
            return this.getError('getting currency codes', response);
        else {
            const result = await response.json();
            return this.getRates(result);
        }
    }

    static getRates(response) {
        return response["supported_codes"];
    }

    static getData(target, amount, response) {
        return `The exchange rate is 1 USD to ${response["conversion_rate"].toFixed(2)} ${target}, and ${amount} USD is ${response["conversion_result"].toFixed(2)} ${target}.`;
    }

    static getError(target, response) {
        return `An error occurred for ${target}: ${response.status} ${response.statusText}`;
    }
}