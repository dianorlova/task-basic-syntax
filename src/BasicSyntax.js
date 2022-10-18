function intChar(char) {
    switch (char) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

export function romanToInteger(str) {
    let result = 0;
    result += intChar(str[0]);
    for (let char_index = 1; char_index <= str.split('').length; char_index++) {
        let prev_char = intChar(str[char_index - 1]);
        let cur_char = intChar(str[char_index]);
        if (prev_char < cur_char) {
            result = result - 2 * prev_char + cur_char;
        } else {
            result = result + cur_char;
        }
    }
    return result;
}
