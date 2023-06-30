import { getExchange, makeApiCall, getData, getError } from '../src/js/bs/Exchanger';

/* Refer testing_guide.md */

describe("Exchanger", () => {
    test("should return error message", () => {
        const target = 'GP';
        const response = {
            status: 404,
            statusText: 'Not Found'
        }
        expect(getError(target, response)).toBe('An error occurred for GP: 404 Not Found');
    });

    test("should return conversion rate and result", () => {
        const target = 'GBP';
        const amount = 52;
        const response = {
            "conversion_rate": 0.8623,
            "conversion_result": 44.7396
        };
        expect(getData(target, amount, response)).toBe('The exchange rate is 1 USD to 0.86 GBP. 52 USD is 44.74 GBP.')
    })
});