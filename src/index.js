import Exchanger from './js/bs/Exchanger';
import { setDefault, setOptions } from './js/ui/Form';

import './css/fonts.css';
import './css/styles.css';

const input = {
    amount: 0,
    base: '',
    target: '',
    base_selected: document.querySelector('.convert_fr .selected'),
    base_options: document.querySelector('.convert_fr .dropdown_content'),
    target_selected: document.querySelector('.convert_to .selected'),
    target_options: document.querySelector('.convert_to .dropdown_content')
};

setDefault(input.base_selected, 'base');
setDefault(input.target_selected, 'target');

(async () => {
    const result = await Exchanger.getCurrency();
    setOptions(input.base_options, result);
    setOptions(input.target_options, result);
})();

const amount = document.querySelector("[type=number]");
amount.addEventListener('change', () => { input.amount = amount.value; });

const base_btn = document.querySelector('.convert_fr .drop_btn');
base_btn.addEventListener('click', e => {
    e.preventDefault();
    input.base_options.classList.toggle('show');
});

const target_btn = document.querySelector('.convert_to .drop_btn');
target_btn.addEventListener('click', e => {
    e.preventDefault();
    input.target_options.classList.toggle('show');
});

input.base_options.addEventListener('click', e => {
    const id = e.target.id.split('-');
    input.base = id[0];
    input.base_selected.innerHTML = `${id[0]}: ${id[1]}`;
    input.base_options.classList.toggle('show');
});

input.target_options.addEventListener('click', e => {
    const id = e.target.id.split('-');
    input.target = id[0];
    input.target_selected.innerHTML = `${id[0]}: ${id[1]}`;
    input.target_options.classList.toggle('show');
});

const submit = document.querySelector('[type=submit]');
submit.addEventListener('click', async e => {
    e.preventDefault();
    const output = document.querySelector('.output');

    if (!input.amount) {
        input.amount = 1;
        document.querySelector('[type=number]').value = input.amount;
    }

    if (!input.base) {
        input.base = 'USD';
        input.base_selected.innerHTML = 'USD: United States Dollar';
    }

    if (!input.target) {
        input.target = 'EUR';
        input.target_selected.innerHTML = 'EUR: Euro';
    }
    
    const { amount, base, target } = input;
    const result = await Exchanger.getExchange(base, target, amount);
    output.innerHTML = result;
});