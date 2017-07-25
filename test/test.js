import { expect } from 'chai';
import { TennisGame } from '../src/main.js'

describe("Tennis Game", () => {
    let tennisGame;
    beforeEach(() => {
        tennisGame = new TennisGame("Player One", "Player Two");
    });

    describe("At game start", () => {
        it("should show love all", () => {
            expect(tennisGame.getScore()).to.eql("Love All");
        });
    });
    
    describe("Player One Scores", () => {
        it("should show fifteen love", () => {
            tennisGame.playerOneScore();
            expect(tennisGame.getScore()).to.eql("Fifteen - Love");
        });
    });

    describe("Player One And Player Two Scores", () => {
        it("should show fifteen all", () => {
            tennisGame.playerOneScore();
            tennisGame.playerTwoScore();
            expect(tennisGame.getScore()).to.eql("Fifteen All");
        });
    });

    describe("Player One has 3 And Player Two has 0", () => {
        it("should show forty love", () => {
            tennisGame.setScore(3, 0);
            expect(tennisGame.getScore()).to.eql("Forty - Love");
        });
        it("should show forty love", () => {
            tennisGame.setScore(0, 3);
            expect(tennisGame.getScore()).to.eql("Love - Forty");
        });
    });

    describe("Deuce", () => {
        it("should return deuce when score is tied and greater than 2", () => {
            tennisGame.setScore(3, 3);
            expect(tennisGame.getScore()).to.eql("Deuce");
        });
    });

    describe("Advantage", () => {
        it("should return player 2 advantage when score 4 - 5", () => {
            tennisGame.setScore(4, 5);
            expect(tennisGame.getScore()).to.eql("Advantage Player Two");
        });
        it("should return player 1 advantage when score 5 - 4", () => {
            tennisGame.setScore(5, 4);
            expect(tennisGame.getScore()).to.eql("Advantage Player One");
        });
    });

    describe("Winner", () => {
        it("should return player 2 winner when score 4 - 6", () => {
            tennisGame.setScore(4, 6);
            expect(tennisGame.getScore()).to.eql("Winner Player Two");
        });
        it("should return player 1 advantage when score 6 - 4", () => {
            tennisGame.setScore(6, 4);
            expect(tennisGame.getScore()).to.eql("Winner Player One");
        });
    });
});