import Exchanger from './js/bs/Exchanger';

import './css/fonts.css';
import './css/styles.css';

const input = {
    amount: () => {
        const amount = document.querySelector('#amount').value;
        return (!amount) ? 1 : amount;
    },
    target: () => {
        return document.querySelector('#currency').value;
    }
};

const submit = document.querySelector('#submit-btn');
submit.addEventListener('click', async e => {
    e.preventDefault();
    const output = document.querySelector('.output');
    const { target, amount } = input;
    const result = await Exchanger.getExchange(target(), amount());
    output.innerHTML = result;
});


/* TEST: Exchanger.getExchange() */
// (async () => {
//     const result = await Exchanger.getExchange('GBP');
//     console.log(result);
// })();

/* TEST: Exchanger.getCurrency() */
// (async () => {
//     const result = await Exchanger.getCurrency();
//     console.log(result);
// })();