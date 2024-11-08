import { product, UsernameToLowercase } from "../app/BasicUtils";
import { authenticateUser } from "../app/BasicUtils";
import { usernameToLowercase } from "../app/BasicUtils";

describe('BasicUtils test suite', () => {
    it('returns the product of 3 and 2', () => {
        // arrange
        const sut = product
        // acting
        const actual = sut(3,2)
        // asserting
        expect(actual).toBe(6)
        expect(actual).toEqual(6)
        expect(actual).toBeLessThan(9)
        expect(actual).toBeGreaterThan(5)
    })

    it.each([
        [2, 3, 6],
        [0, 7, 0],
        [10, 10, 100],
        [2, 2, 4]
    ])(
        'test should return the product of %i and i% as i%',
        (a, b, expected) => {
            const sut = product
            const actual = sut(a, b)
            expect(actual).toEqual(expected)
        }
    )
   
    it.each([
        { input: 'KIMBerly', expected: 'kimberly'},
        { input: 'HellO', expected: 'hello' }
    ])(
        '$input to lowercase should be $expected from parameterized testing', ({input, expected}) => {
            const sut = usernameToLowercase
            const actual = sut(input)
            expect(actual).toEqual(expected)
        }
    )
})


describe('User Authentication', () => {

    it('returns the lower case of a valid user', () => {
        // arrange
        const sut = authenticateUser; 
        // acting
        const actual = sut('deveLOPER', 'dev')
        // asserting
        expect(actual.usernameToLower).toBe('developer')
    })
    
    it('returns the username characters of a valid user', () => {
        // arrange
        const sut = authenticateUser; 
        // acting
        const actual = sut('deveLOPER', 'dev')
        // asserting

        // use arrayContaining if array is unorganized
        expect(actual.usernameCharacters).toEqual(
            expect.arrayContaining([
                'L', 'O', 'P', 'E', 'R', 'd', 'e', 'v', 'e'
            ])
        )
    })

    it('returns the user details in form of an object', () => {
        // arrange
        const sut = authenticateUser; 
        // acting
        const actual = sut('deveLOPER', 'dev')
        // asserting

        // use arrayContaining if array is unorganized
        expect(actual.userDetails).toEqual({})
        expect(actual.userDetails).toBeDefined()
        expect(actual.userDetails).not.toBeUndefined()
        expect(actual.userDetails).toBeTruthy()
        expect(actual.userDetails).not.toBeFalsy()
    })

    it('returns a boolean that checks if user is authenticated', () => {
        // arrange
        const sut = authenticateUser; 
        // acting
        const actual = sut('deveLOPER', 'dev')
        // asserting

        // use arrayContaining if array is unorganized
        expect(actual.isAuthenticated).toBeTruthy()
    })

})


describe.skip('usernameToLowercase test suite', () => {
    // setup
    let sut:UsernameToLowercase
    beforeEach(() => {
        console.log('setup from here')
        sut = new UsernameToLowercase()
    })

    afterEach(() => {
        console.log("teardorn from here")
    })
    it('returns the lower case of a valid username', () => {
        const actual = sut.toLower('Bob')
        console.log("I am the main test")
        expect(actual).toBe('bob')
    })
    it('throws an error for an invalid username v1', () => {
        expect(() => sut.toLower('')).toThrow()
        expect(() => sut.toLower('')).toThrowError('Invalid username sorry')
    })
    it('throws an error for an invalid username v2', () => {

        function handleError() {
            const actual = sut.toLower('')
        }

        expect(handleError).toThrow()
    })
    it.todo("test for a valid password")
})

