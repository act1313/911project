const questions = ["Question 1: Where were you and what were you doing when 9/11 happened?", 
    "Question 2: What was your reaction to it?", 
    "Question 3: What was it like to be in D.C. and a plane crash into the Pentagon?",
    "Question 4: What was your reaction to President Bush\'s speech?",
    "Question 5: What was the aftermath like (the weeks after the initial attack)?",
    "Question 6: How long did it take for things to get back to normal?",
    "Question 7: What have you noticed that changed due to the events of 9/11?",
    "Question 8: How has this changed your life?",
    "Question 9: Do you think America has grown stronger as a country because of 9/11?"];

const answers = ["Answer 1: I was sitting in my apartment in Washington, D.C., watching The Today Show, and I saw the first plane hit the World Trade Center.",
    "Answer 2: I was confused and scared because I lived by myself. I didn\'t know what was happening. I had a class that morning, so I walked to the school. There I saw some notices that said classes were canceled. I walked back to my apartment and watched the news all day. For most of the day, phone lines were down, so I couldn\'t contact anyone, and no one could contact me. By the end of the day, I got in touch with my mom. That was scary for both me and my parents because we couldn't get in touch with each other for a while.",
    "Answer 3: It was crazy. From what I can remember, most things were shut down for a few days. My school got shut down, where I worked, the Department of Justice was shut down, and there weren\'t a lot of things going on in the city because so many places were closed. About three or four days after the incident, my friend and her husband took me out to dinner. We did that because we needed to do something normal.",
    "Answer 4: I\'m sure I saw his speech since I was binge-watching the news. But I don\'t specifically remember it.",
    "Answer 5: It was crazy. The biggest change was armed guards at various places. They were definitely at my work. That\'s when they started having armed guards at the airport. I don\'t specifically recall any changes to my school, but places like national monuments and museums had armed guards.",
    "Answer 6: I would say that there is a new normal, but I wasn\'t in D.C. for that long after because I graduated from law school and moved to Boston in December.",
    "Answer 7: The only thing that I have seen that changed is the airport security.",
    "Answer 8: Before the event happened, I had never wanted to move back close to my family. After the event, I tried to get a job back in Pittsburgh even though I had a job lined up in Boston. That didn\'t work out, though. It did make me second guess not wanting to move back home. I finally did move back home after several years.",
    "Answer 9: At the time, yes. At the time, I felt the country was very united because something we thought would never happen, happened on our soil. I never thought I\'d feel as scared again, but some of the same feelings occurred when the Boston Marathon bombing happened. Looking at the country today, I feel we are less united even before the 9/11 attacks."];

let question = document.getElementById("quest_text");
let answer = document.getElementById("ans_text");

var audio = new Audio('click.mp3');
var audio1 = new Audio('click1.mp3');
var audio2 = new Audio('click2.mp3');

let clickable = true;

// When the button is clicked, the text will change to that corresponding text

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function skeleton(num) {
    if (clickable) {
        clickable = false;
        question.innerHTML = "";
        answer.innerHTML = "";

        let quest_line = questions[num];
        const newQuest = quest_line.split(" ");

        let ans_line = answers[num];
        const newAns = ans_line.split(" ");

        for (let i = 0; i < newQuest.length; i++) {
            question.innerHTML += newQuest[i] + " ";
            await sleep(400);

            let guess = Math.floor(Math.random() * 3)
            if (guess == 1) {
                audio.play();
            } else if (guess == 2) {
                audio1.play();
            } else {
                audio2.play();
            }
        }

        for (let i = 0; i < newAns.length; i++) {
            answer.innerHTML += newAns[i] + " ";
            await sleep(400);
        }
        clickable = true;
    }
}


async function click1() {
    skeleton(0);
}

async function click2() {
    skeleton(1);
}

async function click3() {
    skeleton(2);
}

async function click4() {
    skeleton(3);
}

async function click5() {
    skeleton(4);
}

async function click6() {
    skeleton(5);
}

async function click7() {
    skeleton(6);
}

async function click8() {
    skeleton(7);
}

async function click9() {
    skeleton(8);
}