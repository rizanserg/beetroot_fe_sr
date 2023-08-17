// task2
let openBtn = document.createElement(`button`);
openBtn.textContent = `Open`;
document.body.appendChild(openBtn);

const modalWrapper = document.createElement(`section`);
modalWrapper.style.position = `absolute`;
modalWrapper.style.top = `0`;
modalWrapper.style.left = `0`;
modalWrapper.style.width = `100vw`;
modalWrapper.style.height = `100vh`;
modalWrapper.style.backgroundColor = `lightgray`;
modalWrapper.style.display = `none`;
modalWrapper.style.justifyContent = `center`;
modalWrapper.style.alignItems = `center`;

document.body.appendChild(modalWrapper);

const modal = document.createElement(`section`);
modal.style.width = `200px`;
modal.style.height = `300px`;
modal.style.backgroundColor = `lightblue`;
modal.textContent = `Modal`;
modalWrapper.appendChild(modal);

const closeBtn = document.createElement(`button`);
closeBtn.textContent = `Close`;
modal.appendChild(closeBtn);

openBtn.addEventListener(`click`, () => {
    modalWrapper.style.display = `flex`;
});
closeBtn.addEventListener(`click`, () => {
    modalWrapper.style.display = `none`;
});


// task1

const playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

const ol = document.createElement(`ol`);
playList.forEach((playItem) => {
    const li = document.createElement(`li`);
    li.textContent = `Song: ${playItem.song} Author: ${playItem.author}`;
    ol.appendChild(li);
});
document.body.appendChild(ol);