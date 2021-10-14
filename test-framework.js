// test-framework.js
const test = {
    assertEquals(val1, val2) {
        if (val1 !== val2) throw new Error('Oh no it ded')
    },

    it(str, testFunc) {
        try {
            testFunc();
            console.log(str);
        }
        catch (err) {
            console.log(str);
            console.log(err.message);
            console.log(err.stack);
        }
    },

    xit(str) {
        console.log(`Test skipped ${str}`);
    }
}

module.exports = test;


// old code
//const assertEquals = (val1, val2) => val1 === val2;

//const greaterThan = (val3, val4) => val3 >= val4;
//const assertEquals = (val1, val2) => val1 === val2;

//module.exports = assertEquals;
//module.exports = greaterThan;