import { getExchange } from './js/bs/Exchanger';

import './css/fonts.css';
import './css/styles.css';

// Refer variables from .env => ${process.env.varName}

const submit = document.querySelector('#submit-btn');
submit.addEventListener('click', async e => {
    e.preventDefault();
    const output = document.querySelector('.output');
    const target = 'GBP';
    const amount = 52;
    const result = await getExchange(target, amount);
    output.innerHTML = result;
});