export class TennisGame {

    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.player1Score = 0;
        this.player2Score = 0;
    }

    getScore(){
        if(this.isScoresGreaterThanThree()){
            if(this.isWinner())
                return "Winner " + this.getPlayerInTheLead();

            if(this.isAdvantage())
                return "Advantage " + this.getPlayerInTheLead();
        }
        
        if(this.isScoreTied()){
            if(this.isDeuce())
                return "Deuce";
            return this.convertScore(this.player1Score) + " All";
        }

        return this.convertScore(this.player1Score) + " - " + this.convertScore(this.player2Score);
    }

    playerOneScore(){
        this.player1Score++;
    }

    playerTwoScore(){
        this.player2Score++;
    }

    convertScore(playerScore){
        switch(playerScore){
            case 0:
                return "Love";
            case 1:
                return "Fifteen";
            case 2:
                return "Thirty";
            case 3:
                return "Forty";
        }
    }

    setScore(player1Score, player2Score){
        this.player1Score = player1Score;
        this.player2Score = player2Score;
    }

    isScoreTied(){
        return this.player1Score == this.player2Score;
    }

    isDeuce(){
        return this.player1Score >= 3;
    }

    isAdvantage(){
        return Math.abs(this.player1Score - this.player2Score) == 1;
    }

    isWinner(){
        return Math.abs(this.player1Score - this.player2Score) >= 2;
    }

    isScoresGreaterThanThree(){
        return this.player1Score > 3 || this.player2Score > 3;
    }

    getPlayerInTheLead(){
        if(this.player1Score > this.player2Score)
            return this.player1;
        return this.player2;
    }
}