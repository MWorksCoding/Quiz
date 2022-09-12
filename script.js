let questions = [
    {
        "question": "Wer hat das Unternehmen Microsoft gegründet?",
        "answer_1": "Steve Jobs",
        "answer_2": "Mark Zuckerberg",
        "answer_3": "Bill Gates",
        "answer_4": "Linus Torvalds",
        "right_answer": 3,
        "right_answer_text": "Bill Gates hat Microsoft 1975 in Albuquerque,<br> New Mexico, in den Vereinigte Staaten gegründet."
    },
    {
        "question": "Was befindet sich auf der Hauptplatine eines Computers?",
        "answer_1": "RAM-Riegel",
        "answer_2": "SNICKERS-Riegel",
        "answer_3": "DUPLO-Riegel",
        "answer_4": "SSH-Keygenerator-Button",
        "right_answer": 1,
        "right_answer_text": "RAM steht für „Random Access Memory“(= Arbeitsspeicher) und ist das Kurzzeitgedächtnis eines Computers. Er dient als schneller und temporärer Speicherplatz, auf den ein Computer sofort oder in Kürze zugreifen muss."
    },
    {
        "question": "Aus wie vielen Bit besteht ein Byte?",
        "answer_1": "8",
        "answer_2": "23",
        "answer_3": "64",
        "answer_4": "1024",
        "right_answer": 1,
        "right_answer_text": "„Bit“ bedeutet „binary digit“ und stellt dabei die kleinste elektronische Speichereinheit dar. Computer arbeiten mit Binärzahlen (0 und 1). 8 Bits ergeben zusammen ein Byte. Ein Byte ist die kleinste Datenmenge."
    },
    {
        "question": "Was ist keine Programmiersprache?",
        "answer_1": "Python",
        "answer_2": "Visual Basic.",
        "answer_3": "JavaScript",
        "answer_4": "HTML",
        "right_answer": 4,
        "right_answer_text": "HTML = „Hypertext Markup Language“ wird zum Strukturieren von Inhalten einer Website verwendet. Befehle durch Algorithmen, Schleifen und Bedingungend sind hierbei nicht möglich. Dies unterscheidet HTML grundsätzlich von „echten“ Programmiersprachen."
    },
    {
        "question": "Auf welchem Computer-Bauteil werden auf mordernen PCs Daten gespeichert?",
        "answer_1": "BIOS-Batterie",
        "answer_2": "SATA",
        "answer_3": "SSD",
        "answer_4": "CPU",
        "right_answer": 3,
        "right_answer_text": "„Solid-State-Drive“, abgekürzt SSD, ist elektronisches Speichermedium. Im Vergleich zur herkömmlichen Festplatte weist die SSD keine beweglichen Teile auf und verwendet Halbleiterspeicher zur Ablage der Daten."
    },
    {
        "question": "Was ist die MAC-Adresse?",
        "answer_1": "Geografische Koordinaten deines Computers",
        "answer_2": "Anschrift einer Fast-Food-Kette von McDonald's",
        "answer_3": "Schnittstelle zu Apple-Computern",
        "answer_4": "einzigartige Identifikationsnummer eines Netzwerkadapters",
        "right_answer": 4,
        "right_answer_text": "Die MAC-Adresse (Media Access Control) stellt die physikalische Adresse einer Netzwerkschnittstelle dar, welche ein elektronisches Gerät eindeutig identifiziert und an ein Netzwerk anschließt."
    },
    {
        "question": "Mit welcher Taste auf dem Keyboard bestätigen wir einen Befehl?",
        "answer_1": "Space-Taste",
        "answer_2": "Enter-Taste",
        "answer_3": "Shift-Taste",
        "answer_4": "Alt-Taste",
        "right_answer": 2,
        "right_answer_text": "Google verrät dir, wo du diese Taste auf deinem Keyboard findest."
    },
    {
        "question": "Welches ist kein Betriebssystem?",
        "answer_1": "iOS",
        "answer_2": "Windows 95",
        "answer_3": "Linux",
        "answer_4": "Apple",
        "right_answer": 4,
        "right_answer_text": "Apple selbst ist kein Betriebssystem, sondern ein US-amerikanischer Hard- und Softwareentwickler und ein Technologieunternehmen. Es entwickelt u.a. Betriebssysteme."
    },
    {
        "question": "Was kann als drahtlose Verbindung zwischen zwei Geräten benutzt werden?",
        "answer_1": "Redtooth",
        "answer_2": "Yellowtooth",
        "answer_3": "Bluetooth",
        "answer_4": "Greentooth",
        "right_answer": 3,
        "right_answer_text": "Bluetooth ist ein seit Ende der 1990er-Jahre sich stetig entwickelnder Industriestandard für die Datenübertragung zwischen Geräten über kurze Distanz per Funktechnik."
    },
    {
        "question": "Welches Windows-Betriebssystem gab es nie?",
        "answer_1": "Windows 4U",
        "answer_2": "Windows Me",
        "answer_3": "Windows 3.1",
        "answer_4": "Windows Vista",
        "right_answer": 1,
        "right_answer_text": "Windows 4U ist ein frei erfundener Betriebssystem-Name"
    },
]

let currentQuestion = 0;
let numberOfQuestion = 1;
let numberOfRightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/right.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreenText();
    } else {
        updateProgressBar();
        showNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function answer(selection) {
    let question = questions[currentQuestion];
    // console.log('selected answer is ', selection)
    let selectedQuestionNumber = selection.slice(-1);
    // console.log('selectedQuestionNumber is', selectedQuestionNumber);
    // console.log('current question is', question['right_answer']);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById('check-answer').innerHTML = `<b class="bg-success-text">Richtig!</b>`;
        document.getElementById(selection).parentNode.classList.add('bg-success'); // parentNode = übergeordnetes Element
        document.getElementById(selection).parentNode.classList.remove('card-body-to-hover'); // parentNode = übergeordnetes Element
        AUDIO_SUCCESS.play();
        numberOfRightQuestions++;
    } else {
        document.getElementById('check-answer').innerHTML = `<b class="bg-danger-text">Falsch!</b>`;
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        document.getElementById(selection).parentNode.classList.remove('card-body-to-hover'); // parentNode = übergeordnetes Element
        document.getElementById('explanation').style = '';
        document.getElementById('explanation-text').innerHTML = `${question['right_answer_text']}`;
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
    disableAnswerClick();
}

function enableAnswerClick() {
    document.getElementById('answer_1').parentNode.classList.remove('pointer-none');
    document.getElementById('answer_2').parentNode.classList.remove('pointer-none');
    document.getElementById('answer_3').parentNode.classList.remove('pointer-none');
    document.getElementById('answer_4').parentNode.classList.remove('pointer-none');
}
function disableAnswerClick() {
    document.getElementById('answer_1').parentNode.classList.add('pointer-none');
    document.getElementById('answer_2').parentNode.classList.add('pointer-none');
    document.getElementById('answer_3').parentNode.classList.add('pointer-none');
    document.getElementById('answer_4').parentNode.classList.add('pointer-none');
}
function addHoverEffectOnAnswer() {
    document.getElementById('answer_1').parentNode.classList.add('card-body-to-hover');
    document.getElementById('answer_2').parentNode.classList.add('card-body-to-hover');
    document.getElementById('answer_3').parentNode.classList.add('card-body-to-hover');
    document.getElementById('answer_4').parentNode.classList.add('card-body-to-hover');
}

function showEndScreenText() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('all-questions-endscreen').innerHTML = questions.length;
    document.getElementById('number-of-right-question').innerHTML = numberOfRightQuestions;
    showEndScreen();
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
    // Mit Javascript lässt sich aktiv die CSS-Klassen verändern!
    showNextQuestion();
}

function showNextQuestion() {
    let question = questions[currentQuestion];
    // document.getElementById('number-of-question').innerHTML = currentQuestion + 1;  Das ist eine andere Möglichkeit aufwärts zu zählen
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function nextQuestion(selection) {
    enableAnswerClick();
    currentQuestion++; //z.B. von 0 auf 1
    numberOfQuestion++;
    document.getElementById('check-answer').innerHTML = '';
    document.getElementById('number-of-question').innerHTML = numberOfQuestion;
    document.getElementById('next-button').disabled = true;
    document.getElementById('explanation').style = 'display: none';
    addHoverEffectOnAnswer();
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function playAgain() {
    window.location.reload(true);
}

function showEndScreen() {
    document.getElementById('quiz-bg').classList.add('d-none');
    if (numberOfRightQuestions == 0) {
        document.getElementById('end-screen').src = `img/endscreen4.jpg`
    } else {
        document.getElementById('end-screen').src = `img/endscreen3.jpg`
    }
}

// Möglichkeit um das Spiel neu zu starten:
// function restartGame() {
//     document.getElementById('header-image').src = 'img/pencil.jpg';
//     document.getElementById('questionBody').style = ''; question Body wieder anzeigen
//     document.getElementById('endScreen').style = 'display: none'; Endscreen wieder anzeigen
//     rightQuestions = 0;
//     currentQuestion = 0;
//     init();
// }