let cards = [
    { question: "What is Java?", answer: "A programming language" },
    { question: "What is HTML?", answer: "Markup language" }
];

let index = 0;

function showCard() {
    document.getElementById("question").innerText = cards[index].question;
    document.getElementById("answer").innerText = cards[index].answer;
    document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
    index = (index + 1) % cards.length;
    showCard();
}

function prevCard() {
    index = (index - 1 + cards.length) % cards.length;
    showCard();
}

function addCard() {
    let q = document.getElementById("newQuestion").value;
    let a = document.getElementById("newAnswer").value;

    if (q && a) {
        cards.push({ question: q, answer: a });
        document.getElementById("newQuestion").value = "";
        document.getElementById("newAnswer").value = "";
        showCard();
    }
}

showCard();
