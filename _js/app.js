function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // mostrar pergunta
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // mostrar opções
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

//progesso das questões
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Questão " + currentQuestionNumber + " de " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Você acertou: " + quiz.score +  " de " + quiz.questions.length + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML+"<br>"+"<h1>Aguarde para jogar de novo!!!"+"<br>";
	setTimeout(function() {
		window.location.reload(1);
			}, 5000);
} 

// questões
var questions = [
    new Question("Qual o nome da Ilha onde Diana (Mulher Maravilha) morava?", ["Tenicehhria", "Themyscira","Paraíso", "Zanzilbar"], "Themyscira"),
    new Question("Qual o nome do motorista e mordomo de Batman?", ["Jarvas", "August", "Claus", "Alfred"], "Alfred"),
    new Question("Qual o verdadeiro nome do Super Man?", ["Mark Kent", "Marlon Zenet","Clark Zenet", "Clark Kent"], "Clark Kent"),
    new Question("Qual era a profissão do Barry Allen (The Flash)?", ["Cientista", "Detetive", "TI", "Outra"], "Cientista"),
    new Question("Qual o nome do reino do Aquaman?", ["Atlântida", "Ártico", "Atlântico", "Atenas"], "Atlântida"),
	new Question("Por quem a Mulher Maravilha se apaixona?", ["Superman", "Batman", "Aquaman", "Flash"], "Batman"),
	new Question("Qual foi o ano da primeira aparição de Acquaman?", ["1947", "1941", "1940", "1943"], "1941"),
    new Question("Qual a cor do olho de robô de ciborg?", ["Laranja", "Preto", "Vermelho", "Amarelo"], "Vermelho"),
	new Question("Qual o nome da cidade do Batman?", ["Gotam", "Gothem", "Golem", "Gotham"], "Gotham"),
	new Question("Qual a maior fraqueza do Super Man ?", ["Crypitonita", "Cripitonita", "Kryptonita", "Kripitonita"], "Kryptonita"),

]

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





