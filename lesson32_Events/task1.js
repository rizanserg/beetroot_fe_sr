const editorDiv = document.getElementById(`editor`);

document.addEventListener(`keydown`, (event) => {
    if (event.ctrlKey && event.key === `e`) {
        editorDiv.innerHTML = `<textarea>${editorDiv.textContent}</textarea>`;
        event.preventDefault();
    } else if (event.ctrlKey && event.key === `s`) {
        const textarea = editorDiv.querySelector(`textarea`);
        editorDiv.innerHTML = textarea.value;
        event.preventDefault();
    }
});