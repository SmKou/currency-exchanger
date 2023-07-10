export function setDefault(elem, type) {
    elem.innerHTML = `Select ${type} currency`;
}

export function setOptions(elem, options) {
    for (const code of options) {
        const option = document.createElement('div');
        option.setAttribute('class', 'option');
        option.id = `${code[0]}-${code[1]}`;
        option.append(document.createTextNode(`${code[0]}: ${code[1]}`));
        elem.append(option);
    }
}