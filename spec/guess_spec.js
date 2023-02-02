
describe("Not entered Valid Number", () => {

    it("Should check for a empty string", () => {
        let num = "";
        expect(guessNum(num)).toEqual("A value was not entered.");
    });//Check for Empty string END

    it("Should check for a valid number. value: a", () => {
        let num = "a";
        expect(guessNum(num)).toEqual("A number was not input.");
    })//Check for Valid number END
})//END for not valid Number



describe("Valid Number is Guessed", () => {
    describe("Boundary line testing", () => {
        describe("lower boundary.", () => {
            it("Should check for a valid number between 1 to 10(inclusive). value: 1", () => {
                let num = 1;
                expect(guessNum(num)).toEqual("Guess again.");
            })
        });//Check for lower boundary END

        describe("higher boundary.", () => {
            it("Should check for a valid number between 1 to 10(inclusive).value: 10", () => {
                let num = 10;
                expect(guessNum(num)).toEqual("Guess again.");
            })
        });//Check for higer boundary END
    })//boundary line testing END

    describe("Valid Number Guess inside range", () => {

        it("Should check for a wrong number between 1 to 10(inclusive) Value:3", () => {
            let num = 3;
            expect(guessNum(num)).toEqual("Guess again.");
        });//Check for Valid Number guessed wrong END


        it("Should check for expected number. Value:4", () => {
            let num = 4;
            expect(guessNum(num)).toEqual("You guessed it!");
        });//Check for Valid Number guessed correct END
    })//END for inside range test

    describe("Valid Number outside Range", () => {
        it("Should check value outside the range. Value:11", () => {
            let num = 11;
            expect(guessNum(num)).toEqual("Way off! Pick between 1 and 10.");
        });//Check for Number guessed outside the range. END

        it("Should check value outside the range. Value:0", () => {
            let num = 0;
            expect(guessNum(num)).toEqual("Way off! Pick between 1 and 10.");
        });//Check for Number guessed outside the range. END
    })//END for outside range test



})