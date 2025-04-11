export const TestFramework = {
    tests: [],

    test: function (name, fn) {
        this.tests.push({ name, fn });
    },

    assertNotEqual: function (expected, actual, message) {
        if (expected == actual) {
            throw new Error(message || `Assertion failed: did not expect ${actual}`);
        }
    },

    assertGreaterThan: function (a, b, message) {
        if (!(a > b)) {
            throw new Error(message || `Assertion failed: expected ${a} > ${b}`);
        }
    },

    assertLessThan: function (a, b, message) {
        if (!(a < b)) {
            throw new Error(message || `Assertion failed: expected ${a} < ${b}`);
        }
    },

    assertGreaterThanOrEqual: function (a, b, message) {
        if (!(a >= b)) {
            throw new Error(message || `Assertion failed: expected ${a} >= ${b}`);
        }
    },

    assertLessThanOrEqual: function (a, b, message) {
        if (!(a <= b)) {
            throw new Error(message || `Assertion failed: expected ${a} <= ${b}`);
        }
    },

    assertInArray: function (item, array, message) {
        if (!array.includes(item)) {
            throw new Error(message || `Assertion failed: ${item} not found in array`);
        }
    },

    assertTrue: function (condition, message) {
        if (!condition) {
            throw new Error(message || "Assertion failed: expected true but got false");
        }
    },

    assertFalse: function (condition, message) {
        if (condition) {
            throw new Error(message || "Assertion failed: expected false but got true");
        }
    },

    assertEquals: function (expected, actual, message) {
        if (expected != actual) {
            throw new Error(message || `Assertion failed: expected ${expected} but got ${actual}`);
        }
    },

    assertStrictEqual: function (expected, actual, message) {
        if (expected !== actual) {
            throw new Error(message || `Assertion failed: expected ${expected} but got ${actual}`);
        }
    },

    runTests: function () {
        let passed = 0;
        let failed = 0;

        this.tests.forEach(test => {
            try {
                test.fn();
                console.log(`[PASS] ${test.name} - PASSED`);
                passed++;
            } catch (error) {
                console.error(`[FAIL] ${test.name} - FAILED: ${error.message}`);
                failed++;
            }
        });

        console.log(`\nTest Results: ${passed} passed, ${failed} failed`);
    }
};

window.TestFramework = TestFramework;