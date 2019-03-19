const validateElement = (rules, value) => {
    let valid = true;

    for(let rule in rules) {
        switch(rule) {
            case 'min': valid = (valid && value >= rules[rule]); break;
            case 'max': valid = (valid && value <= rules[rule]); break;
            case 'required': valid = (valid && value.trim() != ''); break;
            default: valid = true;
        }
    }

    return valid;
}

export default validateElement;