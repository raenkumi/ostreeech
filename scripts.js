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
    let answers = [
        [
            document.getElementById('quizanswera1').checked,
            document.getElementById('quizanswera2').checked,
            document.getElementById('quizanswera3').checked,
        ],
        // [
        //     document.getElementById('quizanswerb1').checked,
        //     document.getElementById('quizanswerb2').checked,
        //     document.getElementById('quizanswerb3').checked,
        // ],
        // [
        //     document.getElementById('quizanswerc1').checked,
        //     document.getElementById('quizanswerc2').checked,
        //     document.getElementById('quizanswerc3').checked,
        // ],
        // [
        //     document.getElementById('quizanswerd1').checked,
        //     document.getElementById('quizanswerd2').checked,
        //     document.getElementById('quizanswerd3').checked,
        // ],
        // [
        //     document.getElementById('quizanswere1').checked,
        //     document.getElementById('quizanswere2').checked,
        //     document.getElementById('quizanswere3').checked,
        // ],
        // [
        //     document.getElementById('quizanswerf1').checked,
        //     document.getElementById('quizanswerf2').checked,
        //     document.getElementById('quizanswerf3').checked,
        // ],
        // [
        //     document.getElementById('quizanswerg1').checked,
        //     document.getElementById('quizanswerg2').checked,
        //     document.getElementById('quizanswerg3').checked,
        // ],
        // [
        //     document.getElementById('quizanswerh1').checked,
        //     document.getElementById('quizanswerh2').checked,
        //     document.getElementById('quizanswerh3').checked,
        // ],
        // [
        //     document.getElementById('quizansweri1').checked,
        //     document.getElementById('quizansweri2').checked,
        //     document.getElementById('quizansweri3').checked,
        // ],
        // [
        //     document.getElementById('quizanswerj1').checked,
        //     document.getElementById('quizanswerj2').checked,
        //     document.getElementById('quizanswerj3').checked,
        // ]
    ];

    for (i = 0; i < 30; i++) {
        for (j = 0; j < 3; j++) {
            answers[i][j] = document.getElementById('quizanswer[i][j]').checked;
        }
    }
    if (answers[0].includes(true)){
        if (answers[0][1])  {
            document.getElementById('quizbox0').style = "border: solid 2px green";
            document.getElementById('quizboxa2').style = "background-color: none";
        } else if (!answers[0][1]) {
            document.getElementById('quizbox0').style = "border: solid 2px red";
            document.getElementById('quizboxa2').style = "background-color: green";
        }
    }

    console.log(answers);
}
