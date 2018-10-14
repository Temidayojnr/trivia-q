var pos = 0, test, test_status, question, choice, chA, chB, chC, correct= 0;

var questions = [
    ["Which is the only American state to begin with the letter 'p'?", "Penny", "Pennsylvania", "Puntersssss", "B" ],
    ["Name the world's biggest island ?", "Iceland", "Greenland", "Pastureland", "B"],
    ["Name the world's biggest island ?", "AWS", "Amazon", "Sahara", "B"],
    ["Name the world's largest ocean ?", "Indian", "pacific", "sahel", "B"],
    ["What is the diameter of Earth ?", "12,500 miles", "8,000 miles", "11,000 miles", "B"],
    ["Where would you find the world's most ancient forest ?", "Mexico", "Australia", "Brazil", "B"],
    ["Which country is Prague in ?", "Estonia", "Czech", "Croatia", "B"],
    ["What is the capital city of Spain ?", "Seville", "Madrid", "Mallorca", "B"],
    ["Which sport does Constantino Rocca play ?", "Cricket", "Golf", "Hockey", "B"],
    ["In football, who was nicknamed 'The Divine Ponytail' ?", "Batistuta", "Roberto Baggio", "Palacio", "B"]
];

function _(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = _("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false; 
    }
    _("test_status"). innerHTML = "Question "+ (pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='c'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
     choices = document.getElementsByName("choices");
     for (var i= 0; i < choices.length; i++) {
         if (choices[i].checked) {
            choice = choices[i].value;   
         }      
     }

     if (choice == questions[pos][4] ) {
         correct++;
     }
     pos++;
     renderQuestion ();
}

window.addEventListener("load", renderQuestion, false);
