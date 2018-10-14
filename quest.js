var pos = 0, test, test_status, question, choice, chA, chB, chC, correct= 0;

var questions = [
    ["what is 5 + 5 ?", "12", "10", "13", "B" ],
    ["what is 5 + 6 ?", "12", "11", "13", "B"],
    ["what is 5 + 10 ?", "12", "15", "13", "B"],
    ["what is 5 + 55 ?", "12", "60", "13", "B"]
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
