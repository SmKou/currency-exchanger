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
    })
});