export function isRutValid(rut: string): boolean {
    if (!/([1-9]{1}[0-9]{6,7}-[0-9|K]{1})/gim.test(rut)) return false;
    const series = [2, 3, 4, 5, 6, 7];
    let charToValidate = rut.substring(rut.length - 1);
    if (isNaN(+charToValidate)) {
        charToValidate = charToValidate.toLocaleUpperCase();
    }
    const totalSum = rut
        .substring(0, rut.length - 2)
        .split('')
        .reverse()
        .map(
            (digit, index) =>
                parseInt(digit) * series[index <= 5 ? index : index - 6],
        )
        .reduce((acc, cur) => acc + cur, 0);
    const truncatedSum = Math.trunc(totalSum / 11) * 11;
    const finalNumber = 11 - (totalSum - truncatedSum);
    const resultChar =
        finalNumber >= 11
            ? '0'
            : finalNumber === 10
                ? 'K'
                : finalNumber.toString();
    return resultChar === charToValidate;
}
