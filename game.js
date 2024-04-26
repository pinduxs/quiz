const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const scoreText = document.getElementById("score");
let currentQuestion = {};
let acceptingAnswers = false
let questionCounter = 0;
let availableQuesions = [];
let selectedAnswers = []

let questions = [
    {
        question: "Kāpēc krauklis ir kā rakstāmgalds?",
        choice1: "Seko baltajam trusim",
        choice2: "Lai labāk tevi saredzētu",
        choice3: "Jūras putas un zivju karaļvalsts",
        answer1: "1-1",
        answer2: "1-2",
        answer3: "1-3",
       
        
    },
    {
        question: "Izvēlaties sev tuvāku tekstu...",
        choice1: "No klintīm augšā gaisma slējās, Un akmeņi zem sevis smējās.",
        choice2: "Un pašķīrās man vaļā aiza,Un zobens, debesis kas graiza.",
        choice3: "Tur galotnēs ir brīvība tik smalka...Tur galotnēs varbūt ir viss vienalga.",
        answer1: "2-1",
        answer2: "2-2",
        answer3: "2-3",

    },
    {  
        question: "Izvēlaties sev tuvāku tekstu...",
        choice1: "Nekas nekur nav taisnveida. Es esmu vējš, tu esi kleita,Un brāziens, un pusnopūtas,Un virpuļi - ir mūsu jūtas.",
        choice2: "Dzied uguns un žults Un Sadedzina maizi. No tā-Tu spēku sev raisi.Dzied uguns un žults.",
        choice3: "Pieplok pie zemes cilvēku mežs,Saknes jau vējš neizplēš.",
        answer1: "3-1",
        answer2: "3-2",
        answer3: "3-3",
        
        
    },
    {
        question: "Izvēlaties sev tuvāku tekstu...",
        choice1: "Viss biezā miglā Ap mani slīkst, Rūs zāle uz ciņiem,Un bērziņi nīkst.",
        choice2: "Gar manu logu Velkas dienas Kā pelēkas cietuma sienas.",
        choice3: "Nāc,še,starp puķēm,apmeties Un asarās balta mazgājies…",
        answer1: "4-1",
        answer2: "4-2",
        answer3: "4-3",
       
        
    },
    {
        question: "Izvēlaties sev tuvāku tekstu...",
        choice1: "Nu vieņiem iegribējās pacelties augstāk -līdz zvaigznēm un mēnesim - un izsmieties par debesu spīdekļiem.",
        choice2: "Austrumu vējš izpleta spārnus, un no tiem izplūda gaisma kā no spožas liesmas.",
        choice3: "Uzsniga sniedziņš balts-Balts kā vissmalkākie milti.",
        answer1: "5-1",
        answer2: "5-2",
        answer3: "5-3",
    },
    {
        question: "Manas kājas nesen vēl satika lietu",
        choice1: "un manos matos vēl sapinies rīta vējš.",
        choice2: "un nesen vēl vēroju saules zeltaino rietu.",
        choice3: "un ielās pats sev paliku svešs.",
        answer1: "6-1",
        answer2: "6-2",
        answer3: "6-3",
    },
    {
        question: "Vai jums vēderā dienišķā desa,Vai tur vienkārši vardes kurkst?",
        choice1: "Es savus mīļos Zaudēju nakts seriālos.",
        choice2: "Labi, ka vējš viņus nenoplēš Pilsētā, kurā piedzimst vējš.",
        choice3: "Mans tēvs kala restes, Bet aiz restēm sēžu es.",
        answer1: "7-1",
        answer2: "7-2",
        answer3: "7-3",
    },
    {
        question: "Tu esi jautājums mans. Ko es tev atbildēšu?",
        choice1: "Es nemaz vēl neesmu. Es nekad neesmu gājis, neesmu skāris durvju rokturus, neesmu dziedājis rīta rasā.",
        choice2: "Es esmu bezgala liels, man nav ne sākuma ne gala. Es plūstu kā avots, kā jauna elpa.",
        choice3: "Es biju un būšu. Es klaiņošu kā pazudis krancis, kā puntu kāsis bez noteiktām mājām.",
        answer1: "8-1",
        answer2: "8-2",
        answer3: "8-3",
    },
];

//CONSTANTS
const MAX_QUESTIONS = 8;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
   
    questionCounter++;    // skaita juatajumu uz prieksu 

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        selectedAnswers.push(selectedChoice.innerText)
        localStorage.setItem("Selected answers", JSON.stringify(selectedAnswers));

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove();
        getNewQuestion();
      }, 500);
    });
});

startGame();