module.exports = function toReadable(number) {
    const arrNumber0_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrNumber20_100 = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number - hundreds * 100) / 10);
    let units = number - hundreds * 100 - tens * 10;

    if (number === 100) {
        return `${arrNumber0_19[hundreds]} hundred`
    } else if (number > 100) {
        if (tens === 1) {
            return `${arrNumber0_19[hundreds]} hundred ${arrNumber0_19[units + 10]}`
        } else if (tens === 0 && units === 0) {
            return `${arrNumber0_19[hundreds]} hundred`
        } else if (tens === 0) {
            return `${arrNumber0_19[hundreds]} hundred ${arrNumber0_19[units]}`
        } else if (units === 0) {
            return `${arrNumber0_19[hundreds]} hundred ${arrNumber20_100[tens]}`
        } else {
            return `${arrNumber0_19[hundreds]} hundred ${arrNumber20_100[tens]} ${arrNumber0_19[units]}`
        }

    } else if (number < 100 && number >= 20) {
        if (units === 0) {
            return `${arrNumber20_100[tens]}`
        } else {
            return `${arrNumber20_100[tens]} ${arrNumber0_19[units]}`
        }
    } else if (number < 20 && number >= 10) {
        return `${arrNumber0_19[units + 10]}`
    } else {
        return `${arrNumber0_19[units]}`
    }

}
