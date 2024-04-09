const quiz = [
  {
    question: "Koji je glavni grad Hrvatske ?",
    a: "Šibenik",
    b: "Split",
    c: "Zagreb",
    d: "Osijek",
    answer: "c",
  },

  {
    question: "Koji je bio glavni grad prije Zagreba ?",
    a: "Šibenik",
    b: "Split",
    c: "Dubrovnik",
    d: "Varazdin",
    answer: "d",
  },

  {
    question: "Tko je autor knjige Seljačka buna ?",
    a: "Hrvoje Hitrec",
    b: "August Šenoa",
    c: "Matija Gubec",
    d: "Nikolaj Loski-Dostojevski",
    answer: "b",
  },

  {
    question: "Koje godine je osnovana Mletačka Republika ?",
    a: 697,
    b: 1205,
    c: 1358,
    d: 1789,
    answer: "a",
  },

  {
    question: "Tko je bio posljednji Hrvatski ban ?",
    a: "Cvetković",
    b: "Mačeh",
    c: "Šubašić",
    d: "Mihalović",
    answer: "c",
  },
  {
    question: "Prema obliku vlasti Hrvati su u 9. stoljeću osnovali dvije",
    a: "kneževine",
    b: "kraljevine",
    c: "carevine",
    d: "banovine",
    answer: "a",
  },

  {
    question: "Hrvati su na prostore današnje domovine došli u ? ",
    a: "5.stoljeću",
    b: "7.stoljeće",
    c: "9.stoljeće",
    d: "8 stoljeće",
    answer: "b",
  },

  {
    question: "Tko je 1847. godine proglasio hrvatski jezik sluzbenim jezikom",
    a: "Kralj Tomislav",
    b: "Hrvatski Sabor",
    c: "Stjepan Radić",
    d: "Ban Josip Jelačić",
    answer: "b",
  },
  {
    question:
      "Za vrijeme kojeg je habsburškog cara donesena Listopadska diploma?",
    a: "Franje Josipa I",
    b: "Karlo VI",
    c: "Maksimilijan I",
    d: "Vladislav I",
    answer: "a",
  },

  {
    question:
      "Koji se grad razvio od srednjovjekovnih naselja Gradeca i Kaptola?",
    a: "Zagreb",
    b: "Varazdin",
    c: "Osijek",
    d: "Sisak",
    answer: "a",
  },
];
// querySelector mi omogucava dohvacanje prvog elementa s .btn klasom, dok recimo getElementByClassName() vraca cijelu kolekciju pa onda samim tim ne mozemo koristi this keyword
/*   let button = document.querySelector(".btn");
    if (button) {
      console.log(button.getAttribute("id"));
    } */

let currentQuestionIndex = 0;
let corretAnswer = 0;
let curentAnswer = 1;
const totalQuestion = quiz.length;

function loadQuestion() {
  if (currentQuestionIndex >= quiz.length) {
    let message = document.getElementById("message");
    // U buducnosti ce biti popup model prikaza rezultata, trenutno alert.
    //message.style.display = "block";
    let output = `Imali ste ukupno ${corretAnswer} tocnih odgovora !`;
    alert(`Kviz je završen! ${output}`);
    document.getElementById("quiz").style.display = "none";
    return; // Prekini izvršavanje ako nema vise pitanja
  }

  // Dohvati trenutno pitanje na temelju indexa
  const question = quiz[currentQuestionIndex].question;
  document.getElementById("question").innerHTML = question;
  // Dodaje trenutni broj pitanja iznad kviza kao i ukupan broj pitanja
  document.getElementById("current-question").innerHTML =
    curentAnswer + " / " + totalQuestion;

  const a = (document.getElementById("a").innerHTML =
    quiz[currentQuestionIndex].a);
  const b = (document.getElementById("b").innerHTML =
    quiz[currentQuestionIndex].b);
  const c = (document.getElementById("c").innerHTML =
    quiz[currentQuestionIndex].c);
  const d = (document.getElementById("d").innerHTML =
    quiz[currentQuestionIndex].d);
}

function checkAnswerButtons() {
  // Dodaje event na sve buttone ovisno koji se klikne zgrabit ce kljuc.
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function () {
      const selectedAnwser = this.getAttribute("id");
      // Nakon sto imamo kljuc ovisno koji je button pritisnut prosljedit cemo ga u funckiju koja provjerava da li je odgovor tocan.
      checkAnswer(selectedAnwser);
    });
  });
}

// Ova fukncija se poziva u funkciji povise, gdje joj prosljedujemo id od odabranog odgovora odnosno buttona.
function checkAnswer(selectedAnwser) {
  if (selectedAnwser === quiz[currentQuestionIndex].answer) {
    alert("Vaš odgovor je točan");
    corretAnswer++;
    currentQuestionIndex++;
    curentAnswer++;
    loadQuestion();
  } else {
    alert("Vaš odgovor je netočan");
    currentQuestionIndex++;
    curentAnswer++;
    loadQuestion();
  }
}

loadQuestion(currentQuestionIndex);
checkAnswerButtons();
