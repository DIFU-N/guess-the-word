var word = "";
var wrongGuess = [];
var wordGuess = [];
var guessBomb = 0;
var winCount = 1;
var type = "";

function wordw() {
    var randomWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", 
    "verse", "land", "lumpy", "holiday", "glorious", "weigh", "brake", "pretty", 
    "grin", "capricious", "bite-sized", "misty", "ignore", "certain", "sloppy", 
    "dress", "true", "zonked", "observation", "action", "various", "want", "direful", 
    "suck", "dress", "scarecrow", "judge", "madly", "quizzical", "consist", "fierce", 
    "love", "arrest", "serve", "fit", "hug", "tan", "curve", "eatable", "tub", "race", 
    "innocent", "open", "preach", "steady", "acoustics", "lock", "field", "arrange", 
    "rifle", "learned", "toe", "flow", "competition", "ill-fated", "oatmeal", "match", 
    "male", "measure", "loaf", "smile", "wrestle", "dull", "food", "locket", "bell", 
    "beg", "strengthen", "responsible", "enchanting", "loutish", "switch", "idea", 
    "nine", "squeamish", "pig", "bat", "dear", "trains", "owe", "frogs", "assorted", 
    "lonely", "hurry", "natural", "sun", "snow", "obnoxious", "broken", "friend", "bright", 
    "cake", "sour", "permit", "economic", "lovely", "quick", "van", "tempt", "apparel", 
    "decay", "business", "adjustment", "blushing", "makeshift", "slippery", "load", "winter", 
    "exist", "tongue", "country", "roll", "fast", "moor", "possess", "pat", "pass", "books", 
    "impartial", "hospitable", "dust", "naughty", "extra-large", "tacky", "produce",
    "committee", "fuzzy", "judicious", "nebulous", "stick", "ear", "copy", "friendly", 
    "press", "distinct", "vegetable", "upset", "venomous", "statement", "sulky", "spell", 
    "x-ray", "square", "taste", "great", "thumb", "adjoining", "chilly", "test", "ancient", 
    "green", "badge", "work", "repeat", "free", "elderly", "doctor", "difficult", "grubby", 
    "approval", "turn", "vivacious", "thundering", "cherries", "rest", "plan", "crime", "sticks", 
    "wealthy", "phone", "suspend", "gullible", "fence", "note", "wall", "interest", "coil", "jump", 
    "enchanted", "funny", "racial", "greasy", "polish", "elbow", "smart", "bore", "crowd", "glistening", 
    "oval", "eggs", "nauseating", "detailed", "veil", "coal"]
    var raNum = Math.floor(Math.random() * 70);
    return randomWords[raNum]
}

function winCountFunc() { // checks to see how many unkowns are left
    var num = 0;
    var lettUsed = "";
    var count = word.length;

    while(count > 0) {
        if(lettUsed.includes(word[count - 1])) {
        }   
        else{
                num += 1;
                lettUsed += word[count - 1];//lists out all possible values of word letter by letter
                console.log(lettUsed);
        }
        count -= 1;
    }

    return num;
}


function wordStart() {
    var wordLength = word.length;
    var wordL_ = "";
    var count = wordLength;

    while(count > 0) {
        wordGuess.push(" * ");
        count -= 1;  // replaces each letter with "*" subtracting from the word length until finished
    }
}

//starts the game
function start() {
    word = wordw();
    winCount = winCountFunc();

    guessBomb = word.length; // sets the number of tries for each round

    console.log(word);
    document.getElementById('play').style.display='block';
    document.getElementById('startButton').style.display='none';

    wordStart();

    document.getElementById('RRguess').style.display='block';
    document.getElementById("rightG").innerHTML = "word progress: " + wordGuess;
    document.getElementById("wrongG").innerHTML = "Wrong guesses: " + wrongGuess;
    document.getElementById("rem").innerHTML = "you have: " + guessBomb + " tries left";
}
//the guess button function
function guess() {
    var lett = document.getElementById("type").value;
    document.getElementById("type").value = "";

    if (lett.length === 1){
        var rightOrnot = isRightOrnot(lett);
        if (rightOrnot == true) {
            NewCW(lett);
        }
        else {
            if(!wrongGuess.includes(lett)) { //is called if a wrong guess is made
                wrongGuess.push(lett);
            }
            guessBomb -= 1;
        }
    }

    else if (lett.length < 1) {
    }
    else {
        guessBomb -= 1;
    }
    if (guessBomb <= 0) {
        gameLose();
    }
    else if (winCount <= 0) {
        gameWin();
    }
    document.getElementById("rightG").innerHTML = "word progress: " + wordGuess;
    document.getElementById("wrongG").innerHTML = "Wrong guesses: " + wrongGuess;
    document.getElementById("rem").innerHTML = "you have: " + guessBomb + " tries left";
}

function isRightOrnot(a) {
    var n = word.includes(a); // this sets "a" as a member of the "word-object" to n.
    //meaning it is correct if a = the "word-object"
    return n;
}

function NewCW(letter) { 
    var count = 0;
    winCount -= 1 

    while (count <= word.length - 1) { // if a letter is correctly picked, this will be called
        if (letter === word[count]) { 
            wordGuess[count] = letter; // 
            count += 1; //this replaces the "*" with every made guess addding to the wordlength until complete
        }   
        else {
            count += 1;
        }

    }

}

function gameLose() {
    document.getElementById('play').style.display='none';
    document.getElementById('RRguess').style.display='none';
    document.getElementById('igwnk').style.display='block';
    document.getElementById("correctWordWas").innerHTML = "The correct word was " + word;
}

function gameWin() {
    document.getElementById('play').style.display='none';
    document.getElementById('RRguess').style.display='none';
    document.getElementById('youWin').style.display='block';
}

function restart() {
    document.getElementById('RRguess').style.display='none';
    document.getElementById('igwnk').style.display='none';
    document.getElementById('youWin').style.display='none';
    document.getElementById('startButton').style.display='block';

    word = "";
    wordGuess = [];
    wrongGuess = [];
    guessBomb = 0;
    winCount = 1;
    guess = "";
    dif = 0;
}