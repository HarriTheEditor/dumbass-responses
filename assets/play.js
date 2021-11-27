const {Sentences, Responses} = {
    "Sentences": [
        "I bought an nft for 47k dollars!",
        "I drove around the roundabout.",
        "I walked 2 miles!",
        "Bet you didn't know you can't live without making a mistake!",
        "I have a great mother!",
    ],
    "Responses": [
        "And I love muffins and electrons!",
        "But do you eat trumpets?",
        "And I hate the fucking VOICES IN MY HEAD!",
        "You probably like penis then!",
        "Is that why your dad left?",
        "L.O.L. Laugh. Out. Loud.",
        "FUCK OFF.",
        "Can I get a break?"
    ]
};

let main = document.getElementById('main')

main.style.display = 'none';
let s = document.getElementById('sentence')
let r = document.getElementById('response')
let mtext = document.getElementById('main-text');

function Play() {
    let info = document.getElementById('info');
    s.innerHTML = '';
    r.innerHTML = '';

    info.style.display = 'none';
    main.style.display = 'block';
    mtext.innerHTML = 'Choosing a word...';

    let sentence = Sentences[Math.floor(Math.random() * Sentences.length)];
    let response = Responses[Math.floor(Math.random() * Responses.length)];

    setTimeout(() => {  mtext.innerHTML = 'Your sentence is: ' + sentence; }, 2500);
    setTimeout(() => {  mtext.innerHTML = 'The story!'; s.innerHTML = sentence; }, 5000);
    setTimeout(() => {  r.innerHTML = '...'; }, 6250);
    setTimeout(() => {  r.innerHTML = response }, 8750);
    setTimeout(() => { main.style.display = 'none'; info.style.display = 'block';}, 12000)
}