// const turtleIpsumString = 
// `Death comes for us all, Oroku Saki. 
// But something much worse comes for you. 
// For when you die, it will be without honor.
// I too once had a family, Danny. 
// Many years ago I lived in Japan. 
// A pet of my master Yoshi. 
// Mimicking his movements from my cage. 
// And learning the mysterious art of Ninjitsu.
// There comes a time, brothers.
// Where history is forged like melted cheese. 
// It sticks together as one. 
// But it’s still soft and squishy in the middle.
// Never lower your eyes to an enemy.
// The class is Pain 101.
// Your instructor Casey Jones.
// The enemy of my enemy is my bro.
// All fathers care for their sons.
// I look like I just called Mike Tyson a sissy. 
// And all you can say is Hi. 
// Woah pretty heavy philosophical stuff for a cartoon show.
// Boy, and I thought insurance salesmen were pushy.
// You are here because the outside world rejects you. 
// This is your family, I am your father. 
// I want you all to become full members of the Foot.
// You must never lapse. 
// Even those who would be our allies, would not understand. 
// Our domain is the shadow. 
// Stray from it reluctantly, for when you do.
// You must strike hard and fade away, without a trace.
// Time to switch to decaf, April.
// Possess the right thinking.
// Only then can one receive the gifts.
// Of strength, knowledge, and peace.
// Wise men say, Forgiveness is divine.
// But never pay full price for late pizza. 
// Anger clouds the mind. 
// Turned inward, it is an unconquerable enemy. 
// You are unique among your brothers.
// For you choose to face this enemy alone. 
// But as you face it, do not forget them.
// And do not forget me, I am here, my son.
// Dude, it’s a butt ugly monster convention. 
// Raph, where’s your membership card?`

// const turtleIpsumLines = turtleIpsumString.split(".")

let turtleIpsumObj = {
    turtleIpsumString: 
        `Death comes for us all, Oroku Saki But something much worse comes for you. For when you die, it will be without honor. I too once had a family, Danny. Many years ago I lived in Japan A pet of my master Yoshi. Mimicking his movements from my cage And learning the mysterious art of Ninjitsu. There comes a time, brothers Where history is forged like melted cheese. It sticks together as one But it’s still soft and squishy in the middle. Never lower your eyes to an enemy. The class is Pain 101 Your instructor is Casey Jones. The enemy of my enemy is my bro. All fathers care for their sons. I look like I just called Mike Tyson a sissy And all you can say is Hi. Woah pretty heavy philosophical stuff for a cartoon show. Boy, and I thought insurance salesmen were pushy. You are here because the outside world rejects you. This is your family, I am your father. I want you all to become full members of the Foot. You must never lapse Even those who would be our allies, would not understand. Our domain is the shadow. Stray from it reluctantly, for when you do You must strike hard and fade away, without a trace. Time to switch to decaf, April. Possess the right thinking Only then can one receive the gifts Of strength, knowledge, and peace. Wise men say, Forgiveness is divine But never pay full price for late pizza. Anger clouds the mind Turned inward, it is an unconquerable enemy. You are unique among your brothers For you choose to face this enemy alone. But as you face it, do not forget them And do not forget me, I am here, my son. Dude, it’s a butt ugly monster convention Raph, where’s your membership card?`,

    getTurtleIpsumLines: function() {
        let turtleIpsumLines = this.turtleIpsumString.split(".")
        return turtleIpsumLines 
    },

    getRandNum: function() {
        let turtleIpsumLines = this.getTurtleIpsumLines()
        let randNum = Math.floor(Math.random() * turtleIpsumLines.length)
        return randNum
    },

    getRandLine: function() {
        let randNum = this.getRandNum()
        let turtleIpsumLines = this.getTurtleIpsumLines()
        let randLine = turtleIpsumLines[randNum]
        return randLine
    },

    isLineUnique: function(paragraph, randLine) {
        if (paragraph.indexOf(randLine) === -1) {
            return true
        }
    },

    generateParagraph: function(numberOfLines) {
        let paragraph = []
        for(i=0; i<numberOfLines; i++) {    
            let randLine = ""
            while(!this.isLineUnique(paragraph, randLine) || !randLine) {
                randLine = this.getRandLine()
            }
            paragraph += randLine
        }
        console.log(paragraph)
        return paragraph
    }
}


document.getElementById('tribute-info').innerHTML = turtleIpsumObj.generateParagraph(6)


