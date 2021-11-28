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

const Sentence = Sentences[Math.floor(Math.random() * Sentences.length)];
const Response = Responses[Math.floor(Math.random() * Responses.length)];
let s = document.getElementById("sentence");
let r = document.getElementById("response");
let main = document.getElementById("main-box");
let disclaimer = document.getElementById('disclaimer');
let disclaimer_button = document.getElementById('disclaimer-button');
let g = document.getElementById('g');

main.style.display = 'none';

s.innerHTML = Sentence;
r.innerHTML = Response;

function Show(val) {
    disclaimer.style.display = 'none';
    disclaimer_button.style.display = 'none';
    g.style.display = 'none';

    main.style.display = 'block';
    s.style.display = 'block';
    r.style.display = 'block';
}

function Colour(v, id) {
    if(v === true) {
        document.getElementById(id).style.color = "rgb(200, 200, 200)";
        document.body.style.cursor = "pointer";
    }else {
        document.getElementById(id).style.color = "rgb(255, 255, 255)";
        document.body.style.cursor = "default";
    }
}

function Redirect(des) {
    window.location = des;
}
