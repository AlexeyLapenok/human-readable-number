module.exports = function toReadable(number) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'];
    let word = arr[number];
    if (number >= 20 && number < 100) {
        const wordDozens = dozens[String(number)[0]];
        word = wordDozens + ' ' + arr[String(number)[1]];
        word === wordDozens + ' ' + 'zero' ? word = dozens[String(number)[0]] : '';
    } else if (number >= 100 && number < Number(String(number)[0] + '10')) {
        word = arr[String(number)[0]] + ' hundred ' + arr[String(number)[2]];
        word === arr[String(number)[0]] + ' hundred ' + 'zero'
            ? word = arr[String(number)[0]] + ' hundred' : '';
    } else if (number >= 100 && number < Number(String(number)[0] + '20')) {
        word = arr[String(number)[0]] + ' hundred ' + arr[String(number).slice(1, 3)];
    } else if (number >= Number(String(number)[0] + '20')) {
        const wordDozens = dozens[String(number)[1]];
        word = arr[String(number)[0]] + ' hundred ' + wordDozens + ' ' + arr[String(number)[2]];
        word === arr[String(number)[0]] + ' hundred ' + wordDozens + ' ' + 'zero'
            ? word = arr[String(number)[0]] + ' hundred ' + wordDozens : '';
    }
    return word;
}
