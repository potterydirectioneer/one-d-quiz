const questions = [
    { question: "Which member has no sister?", options: ["Harry", "Liam", "Niall", "Louis"], answer: "Niall" },
    { question: "What date did Zayn leave the band?", options: ["March 25, 2015", "April 1, 2015", "March 1, 2015", "April 25, 2015"], answer: "March 25, 2015" },
    { question: "Which member has 4 nipples?", options: ["Harry", "Liam", "Niall", "Louis"], answer: "Harry" },
    { question: "Who came up with the name 'One Direction'?", options: ["Harry", "Liam", "Niall", "Louis"], answer: "Harry" },
    { question: "Which member doesn't know how to swim?", options: ["Harry", "Liam", "Niall", "Zayn"], answer: "Zayn" },
    { question: "Who wrote most of the songs for One Direction?", options: ["Harry", "Liam", "Niall", "Louis"], answer: "Liam" },
    { question: "What was the title of One Direction’s first film?", options: ["This Is Us", "Where We Are", "Up All Night", "Midnight Memories"], answer: "This Is Us" },
    { question: "What was One Direction’s debut album called?", options: ["Take Me Home", "Up All Night", "Midnight Memories", "Made in the A.M."], answer: "Up All Night" },
    { question: "What was the title of One Direction’s last album before their hiatus?", options: ["Four", "Midnight Memories", "Take Me Home", "Made in the A.M."], answer: "Made in the A.M." },
    { question: "What was the name of One Direction's last tour?", options: ["Up All Night Tour", "Take Me Home Tour", "On the Road Again Tour", "Where We Are Tour"], answer: "On the Road Again Tour" }
];

const images = [
    'https://i.postimg.cc/Nj0D099J/One-Direction-Team-HD-Wallpapers.jpg',
    'https://i.postimg.cc/3dPmSwZm/One-Direction-Team-HD-Wallpapers.jpg',
    'https://i.postimg.cc/hJnxn36G/1D-bbma.webp',
    'https://i.postimg.cc/d79CVjcj/large-one-direction-on-hi-quality-large-print-36x24-inches-original-imaet2mumgfqs2pk.webp',
    'https://i.postimg.cc/gXkZXLYF/oned.jpg'
];

let currentQuestion = 0;
let score = 0;
let level = 1;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const options = document.querySelectorAll('.option');
    const current = questions[currentQuestion];

    questionElement.textContent = current.question;
    options.forEach((option, index) => {
        option.textContent = current.options[index];
        option.classList.remove('correct', 'wrong');
        option.style.color = current.options[index] === "Harry" ? "orange" :
                             current.options[index] === "Liam" ? "blue" :
                             current.options[index] === "Niall" ? "orange" :
                             current.options[index] === "Louis" ? "red" :
                             current.options[index] === "Zayn" ? "purple" : "black";
    });

    document.body.style.backgroundImage = `url(${images[currentQuestion % images.length]})`;
}

function checkAnswer(selectedOption) {
    const current = questions[currentQuestion];
    if (selectedOption.textContent === current.answer) {
        selectedOption.classList.add('correct');
        score++;
    } else {
        selectedOption.classList.add('wrong');
    }
    document.getElementById('score').textContent = score;
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        completeLevel();
    }
}

function completeLevel() {
    const proceed = confirm('Quiz completed! Would you like to proceed to the next level?');
    if (proceed) {
        startNextLevel();
    } else {
        alert('Your score: ' + score + ' out of ' + questions.length);
        restartQuiz();
    }
}

function startNextLevel() {
    if (level === 1) {
        level = 2;
        questions.push(...getLevel2Questions());
    } else if (level === 2) {
        level = 3;
        questions.push(...getLevel3Questions());
    } else if (level === 3) {
        level = 4;
        questions.push(...getFinalLevelQuestions());
    }

    currentQuestion = questions.length - 10;
    loadQuestion();
}

function getLevel2Questions() {
    return [
        { question: "Complete the lyrics: 'Just stop your crying, it's a sign of the...'", options: ["times", "moon", "world", "end"], answer: "times" },
        { question: "Complete the lyrics: 'Sweet creature, had another...'", options: ["talk", "fight", "love", "night"], answer: "talk" },
        { question: "Complete the lyrics: 'Watermelon sugar, ...'", options: ["high", "sweet", "love", "juice"], answer: "high" },
        { question: "Complete the lyrics: 'Lights up and they know who you...'", options: ["are", "love", "miss", "see"], answer: "are" },
        { question: "Complete the lyrics: 'Strawberries on a summer...'", options: ["evening", "morning", "night", "day"], answer: "evening" },
        { question: "Complete the lyrics: 'You're so golden, ...'", options: ["love", "babe", "darling", "honey"], answer: "darling" },
        { question: "Complete the lyrics: 'I’m in my bed and you’re not...'", options: ["here", "home", "near", "gone"], answer: "here" },
        { question: "Complete the lyrics: 'What a feeling to be right here...'", options: ["beside you", "tonight", "with you", "forever"], answer: "beside you" },
        { question: "Complete the lyrics: 'Remember everything will be...'", options: ["alright", "okay", "fine", "better"], answer: "alright" },
        { question: "Complete the lyrics: 'All the lights couldn’t put out the...'", options: ["dark", "stars", "moon", "sun"], answer: "dark" }
    ];
}
document.addEventListener('DOMContentLoaded', loadQuestion);
function getLevel3Questions() {
    return [
        { question: "What was One Direction’s last music video featuring Zayn Malik?", options: ["Night Changes", "Steal My Girl", "You & I", "Best Song Ever"], answer: "Night Changes" },
        { question: "Whose famous dialogue in One Direction was “Vas Happenin”?", options: ["Harry Styles", "Niall Horan", "Louis Tomlinson", "Zayn Malik"], answer: "Zayn Malik" },
        { question: "Which member of One Direction auditioned for The X Factor as a solo artist and was eliminated before forming the band?", options: ["Harry Styles", "Liam Payne", "Niall Horan", "Louis Tomlinson"], answer: "Liam Payne" },
        { question: "Which One Direction song includes the lyrics 'You don't know you're beautiful'?", options: ["Story of My Life", "What Makes You Beautiful", "Little Things", "Live While We’re Young"], answer: "What Makes You Beautiful" },
        { question: "What year did One Direction announce their hiatus?", options: ["2014", "2015", "2016", "2017"], answer: "2015" },
        { question: "Which One Direction member was the first to leave the band?", options: ["Harry Styles", "Louis Tomlinson", "Niall Horan", "Zayn Malik"], answer: "Zayn Malik" },
        { question: "Which One Direction album features the song 'Drag Me Down'?", options: ["Four", "Midnight Memories", "Made in the A.M.", "Take Me Home"], answer: "Made in the A.M." },
        { question: "In what year did One Direction form?", options: ["2008", "2009", "2010", "2011"], answer: "2010" },
        { question: "Which song by One Direction was their first single to debut at number one on the US Billboard Hot 100?", options: ["Best Song Ever", "Live While We’re Young", "Drag Me Down", "What Makes You Beautiful"], answer: "Drag Me Down" },
        { question: "Which member of One Direction wrote the song 'Just Hold On' in collaboration with Steve Aoki?", options: ["Harry Styles", "Niall Horan", "Louis Tomlinson", "Liam Payne"], answer: "Louis Tomlinson" }
    ];
}

function getFinalLevelQuestions() {
    return [
        { question: "What was the title of One Direction’s second studio album?", options: ["Up All Night", "Take Me Home", "Midnight Memories", "Four"], answer: "Take Me Home" },
        { question: "Which member of One Direction has a child named Bear?", options: ["Harry Styles", "Louis Tomlinson", "Liam Payne", "Niall Horan"], answer: "Liam Payne" },
        { question: "Which One Direction song is known for its famous whistle intro?", options: ["Drag Me Down", "Steal My Girl", "Story of My Life", "What Makes You Beautiful"], answer: "Steal My Girl" },
        { question: "Which member of One Direction starred in the movie Dunkirk?", options: ["Harry Styles", "Louis Tomlinson", "Liam Payne", "Zayn Malik"], answer: "Harry Styles" },
        { question: "Which One Direction member released the solo album Flicker?", options: ["Harry Styles", "Louis Tomlinson", "Liam Payne", "Niall Horan"], answer: "Niall Horan" },
        { question: "What year did One Direction release their debut single 'What Makes You Beautiful'?", options: ["2010", "2011", "2012", "2013"], answer: "2011" },
        { question: "Which One Direction member collaborated with Bebe Rexha on the song 'Back to You'?", options: ["Harry Styles", "Louis Tomlinson", "Liam Payne", "Niall Horan"], answer: "Louis Tomlinson" },
        { question: "Which One Direction album includes the song 'Best Song Ever'?", options: ["Midnight Memories", "Take Me Home", "Four", "Up All Night"], answer: "Midnight Memories" },
        { question: "What was the last One Direction song to be released as a single?", options: ["Perfect", "History", "Drag Me Down", "Night Changes"], answer: "History" },
        { question: "Which One Direction member has a sister named Gemma?", options: ["Harry Styles", "Louis Tomlinson", "Liam Payne", "Niall Horan"], answer: "Harry Styles" }
    ];
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    level = 1;
    loadQuestion();
}

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => checkAnswer(option));
});

document.addEventListener('DOMContentLoaded', loadQuestion);
