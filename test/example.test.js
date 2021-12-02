// IMPORT MODULES under test here:

import { createCountString } from "../utils.js";


const test = QUnit.test;


test('Should verify that function creates string with state values', (expect) => {
    let expected = "You have changed Cities 4 times, visited the water 2 times, and moved 0 times";
    let actual = createCountString(4, 2, 0);
    expect.equal(expected, actual, "Should produce a string with the number 4, 2, and 0 respectively within")

});




test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
