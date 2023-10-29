module.exports = function toReadable (number) {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];
    const tens = [ "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];
    
    let lastTwoNumbers = +number.toString().slice(-2);
    
    if (number < 20) {
        return ones[number];
    } 
    else if (number >= 20 && number < 100) {
        if (+lastTwoNumbers.toString()[1] === 0) {
            return tens[lastTwoNumbers.toString()[0] - 2];
        }
        return `${tens[lastTwoNumbers.toString()[0] - 2]} ${
            ones[number.toString()[1]]
        }`;
    } else {
        if (+number.toString()[1] === 0) {
            if (+number.toString()[2] === 0) { return `${ones[number.toString()[0]]} hundred`; }
        }
        return `${ones[number.toString()[0]]} hundred ${toReadable(lastTwoNumbers)}`;
    }


}
