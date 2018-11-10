// 2 - MUDANÇA DE COR QUANDO O MOUSE PASSA POR CIMA DE UM PARÁGRAFO
function paragraphHighlight() {
    let hover = document.getElementById("specialpara").style;
    hover.color = "red";
    hover.fontFamily = "Times New Roman"
    hover.fontSize = "20px";
    hover.margin = "7px 0px";
}

function paragraphUnhighlight() {
    let unhover = document.getElementById("specialpara").style;
    unhover.color = "black";
    unhover.fontFamily = "Roboto"
    unhover.fontSize = "16px";
    unhover.margin = "20px 0px";
}

// 3 - ENFATIZAR A POSIÇÃO DO CURSOR
function boxHighlight(number) {
    let hover = document.getElementById("quizbox" + number).style;
    hover.backgroundColor = "rgb(240, 240, 240)";
}

function boxUnhighlight(number) {
    let unhover = document.getElementById("quizbox" + number).style;
    unhover.backgroundColor = "white";
}

// 4 - TEXTO E IMAGEM QUE APARECEM DE ACORDO COM O DIA DA SEMANA, NO INDEX.HTML
function imageDateDisplay() {
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