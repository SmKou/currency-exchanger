import Exchanger from './js/bs/Exchanger';
import { setDefault, setOptions, get } from './js/ui/Form';

import './css/fonts.css';
import './css/styles.css';

const input = {
    amount: () => {
        const input = document.querySelector('#amount');
        return get(input, 1);
    },
    base: () => {
        const input = document.querySelector('#convert-fr');
        return get(input, 'USD');
    },
    target: () => {
        const input = document.querySelector('#convert-into');
        return get(input, 'EUR');
    },
    first_entry: false
};

const base_currency = document.querySelector('#convert-fr');
const target_currency = document.querySelector('#convert-into');

setDefault(base_currency, 'base');
setDefault(target_currency, 'target');

(async () => {
    const result = await Exchanger.getCurrency();
    setOptions(base_currency, result);
    setOptions(target_currency, result);
})();

const submit = document.querySelector('[type=submit]');
submit.addEventListener('click', async e => {
    e.preventDefault();
    const output = document.querySelector('.output');
    const { amount, base, target } = input;
    const result = await Exchanger.getExchange(base(), target(), amount());
    output.innerHTML = result;
});