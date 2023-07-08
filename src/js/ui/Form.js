export function setDefault(elem, type) {
    const option = document.createElement('option');
    option.value = '';
    option.append(document.createTextNode(`Select ${type} currency`));
    elem.append(option);
}

export function setOptions(elem, options) {
    for (const code of options) {
        const option = document.createElement('option');
        option.value = code[0];
        option.append(document.createTextNode(code[1]));
        elem.append(option);
    }
}

export function get(input, value) {
    const val = input.value;
    if (!val) {
        input.value = value;
        return value;
    }
    return val;
}