// Toolbar is at .tools-buttons

// function to create a button with a given class, icon and click handler
function createButton(buttonclass, iconclass, clickHandler) {
    const button = document.createElement("button");
    button.addEventListener("click", clickHandler);
    button.classList.add("qbutton");
    button.classList.add(buttonclass);
    const icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add(iconclass);
    button.appendChild(icon);
    return button;
}

// function to redirect to previous question
function loadQuestion(delta) {
    // parse current url and extract question number as integer
    const currentQuestion = parseInt(window.location.pathname.split("/")[2]);
    window.location.href = `/questao/${currentQuestion + delta}`;
}

// find toolbar
const toolbar = document.querySelector(".tools-buttons");
// `document.querySelector` may return null if the selector doesn't match anything.
if (toolbar) {
    // create and insert prev button as first child of toolbar
    const prevQuestion = createButton("previous","fa-chevron-left", () => loadQuestion(-1));
    toolbar.insertBefore(prevQuestion, toolbar.firstChild);
    // create and insert next button as last child of toolbar
    const nextQuestion = createButton("next", "fa-chevron-right", () => loadQuestion(+1));
    toolbar.appendChild(nextQuestion);
}