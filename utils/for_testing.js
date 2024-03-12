// los metodos se probaran con jest
const esPalindroma = cadena => cadena.split('').reverse().join('');
const average = arreglo => {
    let sum = 0;
    arreglo.forEach(num => {
        sum += num;
    });
    return sum/arreglo.length;
}

module.exports = {
    esPalindroma,
    average
}