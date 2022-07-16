const Add = require('./app');

describe('its working', () => {

    // Test 1 : The method can take up to two numbers, separated by commas, and will return their sum.
    test('Test 1.1', () => {
        let ans = -1;
        ans = Add("1,2");
        expect(ans).toBe(3);
    })

    test('Test 1.2', () => {
        let ans = -1;
        ans = Add("1");
        expect(ans).toBe(1);
    })

    test('Test 1.3', () => {
        let ans = -1;
        ans = Add("");
        expect(ans).toBe(0);
    })

    // Test 2 : Allow the Add method to handle an unknown amount of numbers
    test('Test 2.1', () => {
        let ans = -1;
        ans = Add("1,2,3,4,5,6,7,8,9,10");
        expect(ans).toBe(55);
    })

    test('Test 2.2', () => {
        let ans = -1;
        ans = Add("1,2,5,3");
        expect(ans).toBe(11);
    })

    // Test 3 : Allow the Add method to handle new lines between numbers (instead of commas).
    test('Test 3.1', () => {
        let ans = -1;
        ans = Add("1\n2,3");
        expect(ans).toBe(6);
    })

    test('Test 3.2', () => {
        let ans = -1;
        ans = Add("1,\n");
        expect(ans).toBe("The following input is not okay");
    })

    // Test 4 : Support different delimiters
    test('Test 4.1', () => {
        let ans = -1;
        ans = Add("//;1;2");
        expect(ans).toBe(3);
    })

    
});