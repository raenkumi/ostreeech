// TEXTO E IMAGEM QUE APARECEM DE ACORDO COM O DIA DA SEMANA, NO INDEX.HTML
const imageDateDisplay = () => {
    let today = new Date().getDay();
    switch (today) {
        case 0:
            document.getElementById("headerimg").src = "pics/running0.jpg";
            break;
        case 1:
            document.getElementById("headerimg").src = "pics/running1.jpg";
            break;
        case 2:
            document.getElementById("headerimg").src = "pics/running2.jpg";
            break;
        case 3:
            document.getElementById("headerimg").src = "pics/running3.jpg";
            break;
        case 4:
            document.getElementById("headerimg").src = "pics/running4.jpg";
            break;
        case 5:
            document.getElementById("headerimg").src = "pics/running5.jpg";
            break;
        case 6:
            document.getElementById("headerimg").src = "pics/running6.jpg";
            break;
        }
}

// SCRIPT PARA O QUIZ

const quizEntries = () => {
    let fullyAnswered = false;
    let correctAnswerCount = 0;
    let answers = [
        [
            document.getElementById('quizanswera1').checked,
            document.getElementById('quizanswera2').checked,
            document.getElementById('quizanswera3').checked,
        ],
        [
            document.getElementById('quizanswerb1').checked,
            document.getElementById('quizanswerb2').checked,
            document.getElementById('quizanswerb3').checked,
        ],
        [
            document.getElementById('quizanswerc1').checked,
            document.getElementById('quizanswerc2').checked,
            document.getElementById('quizanswerc3').checked,
        ],
        [
            document.getElementById('quizanswerd1').checked,
            document.getElementById('quizanswerd2').checked,
            document.getElementById('quizanswerd3').checked,
        ],
        [
            document.getElementById('quizanswere1').checked,
            document.getElementById('quizanswere2').checked,
            document.getElementById('quizanswere3').checked,
        ],
        [
            document.getElementById('quizanswerf1').checked,
            document.getElementById('quizanswerf2').checked,
            document.getElementById('quizanswerf3').checked,
        ],
        [
            document.getElementById('quizanswerg1').checked,
            document.getElementById('quizanswerg2').checked,
            document.getElementById('quizanswerg3').checked,
        ],
        [
            document.getElementById('quizanswerh1').checked,
            document.getElementById('quizanswerh2').checked,
            document.getElementById('quizanswerh3').checked,
        ],
        [
            document.getElementById('quizansweri1').checked,
            document.getElementById('quizansweri2').checked,
            document.getElementById('quizansweri3').checked,
        ],
        [
            document.getElementById('quizanswerj1').checked,
            document.getElementById('quizanswerj2').checked,
            document.getElementById('quizanswerj3').checked,
        ]
    ];
    // checar se todas as perguntas foram respondidas
    if (answers[0].includes(true)
        && answers[1].includes(true) 
        && answers[2].includes(true)
        && answers[3].includes(true)
        && answers[4].includes(true)
        && answers[5].includes(true)
        && answers[6].includes(true) 
        && answers[7].includes(true)
        && answers[8].includes(true)
        && answers[9].includes(true)
    ) {
        fullyAnswered = true;
    }
    // correcao das respostas
    if (!fullyAnswered) {
        document.getElementById('angryboi').innerHTML = "<b>Responda todas as questões!</b>";
        document.getElementById('angryboi').style = "display:block; color:red"
    } else if (fullyAnswered) {
        if (answers[0].includes(true)){
            if (answers[0][1]) {
                correctAnswerCount++;
                document.getElementById('quizbox0').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxa2').style = "background-color:none";
            } else if (!answers[0][1]) {
                document.getElementById('quizbox0').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxa2').style = "background-color:#00cc99; color:white";
            }
        }
        if (answers[1].includes(true)){
            if (answers[1][2]) {
                correctAnswerCount++;
                document.getElementById('quizbox1').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxb3').style = "background-color:none";
            } else if (!answers[1][2]) {
                document.getElementById('quizbox1').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxb3').style = "background-color:#00cc99; color:white";
            }
        }
        if (answers[2].includes(true)){
            if (answers[2][0]) {
                correctAnswerCount++;
                document.getElementById('quizbox2').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxc1').style = "background-color:none";
            } else if (!answers[2][0]) {
                document.getElementById('quizbox2').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxc1').style = "background-color:#00cc99; color:white";
            }
        }
        if (answers[3].includes(true)){
            if (answers[3][0]) {
                correctAnswerCount++;
                document.getElementById('quizbox3').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxd1').style = "background-color:none";
            } else if (!answers[3][0]) {
                document.getElementById('quizbox3').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxd1').style = "background-color:#00cc99; color:white";
            }
        }
        if (answers[4].includes(true)){
            if (answers[4][1]) {
                correctAnswerCount++;
                document.getElementById('quizbox4').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxe2').style = "background-color:none";
            } else if (!answers[4][1]) {
                document.getElementById('quizbox4').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxe2').style = "background-color:#00cc99";
            }
        }
        if (answers[5].includes(true)){
            if (answers[5][2]) {
                correctAnswerCount++;
                document.getElementById('quizbox5').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxf3').style = "background-color:none";
            } else if (!answers[5][2]) {
                document.getElementById('quizbox5').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxf3').style = "background-color:#00cc99; color:white";
            }
        }
        if (answers[6].includes(true)){
            if (answers[6][0]) {
                correctAnswerCount++;
                document.getElementById('quizbox6').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxg1').style = "background-color:none";
            } else if (!answers[6][0]) {
                document.getElementById('quizbox6').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxg1').style = "background-color:#00cc99; color:white";
            }
        }
        if (answers[7].includes(true)){
            if (answers[7][0]) {
                correctAnswerCount++;
                document.getElementById('quizbox7').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxh1').style = "background-color:none";
            } else if (!answers[7][0]) {
                document.getElementById('quizbox7').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxh1').style = "background-color:#00cc99; color:white";
            }
        }
        if (answers[8].includes(true)){
            if (answers[8][2]) {
                correctAnswerCount++;
                document.getElementById('quizbox8').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxi3').style = "background-color:none";
            } else if (!answers[8][2]) {
                document.getElementById('quizbox8').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxi3').style = "background-color:#00cc99; color:white";
            }
        }
        if (answers[9].includes(true)){
            if (answers[9][1]) {
                correctAnswerCount++;
                document.getElementById('quizbox9').style = "box-shadow:0px 0px 5px #00cc99";
                document.getElementById('quizboxj2').style = "background-color:none";
            } else if (!answers[9][1]) {
                document.getElementById('quizbox9').style = "box-shadow:0px 0px 0px 2px red";
                document.getElementById('quizboxj2').style = "background-color:#00cc99; color:white";
            }
        }
        // display do número de respostas corretas
        if (correctAnswerCount === 0) {
            document.getElementById('angryboi').style = "display:block"
            document.getElementById('angryboi').innerHTML = "<b>Você não acertou uma questão! :'(</b>";
        } else if (correctAnswerCount === 1) {
            document.getElementById('angryboi').style = "display:block; color:#009999"
            document.getElementById('angryboi').innerHTML = "<b>Você acertou uma questão!</b>"
        } else if (correctAnswerCount === 10) {
            document.getElementById('angryboi').style = "display:block; color:#009999"
            document.getElementById('angryboi').innerHTML = "<b>Você acertou tudo! Tu é o bichão mermo!</b>"
        } else if (correctAnswerCount > 1) {
            document.getElementById('angryboi').style = "display:block; color:#009999"
            document.getElementById('angryboi').innerHTML = "<b>Você acertou " + correctAnswerCount + " questões!</b>"
        }
    }
}
