const { esPalindroma, average } = require('../utils/for_testing');

describe('esPalindroma', () => {

    test('esPalindroma of midudev', () => {
        const resultado = esPalindroma('midudev');
        expect(resultado).toBe('vedudim');
    });
    
    test('esPalindroma of undefined', () => {
        const resultado = esPalindroma();
        expect(resultado).toBeUndefined();
    });
    
    test('esPalindroma of is empty', () => {
        const resultado = esPalindroma('');
        expect(resultado).toBe('');
    });
});

describe('average', () => {

    test('of one value is the value itself', () => {
        expect( average( [ 1 ] ) ).toBe( (1) );
    });

    test('of one value is calculate correctly', () => {
        expect( average( [ 1, 2, 3, 4, 5, 6 ] ) ).toBe( (3.5) );
    });

    test('of empty array is zero', () => {
        expect( average( [ 1 ] ) ).toBe( (0) );
    });

});