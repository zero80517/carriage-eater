async function readFromClipboard() {
    try {
        var text = await navigator.clipboard.readText();
        return text;
    } catch (error) {
        console.log(error);
    }
}

async function writeToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.log(error);
    }
}

async function changeClipboard() {
    try {
        var text = await readFromClipboard();
        await writeToClipboard(text.replace(/(\r\n|\n|\r)/gm, " "));
    } catch (error) {
        console.log(error);
    }
}

async function writeToTextarea() {
    try {
        var text = await readFromClipboard();
        document.getElementById("textarea").value = text;
    } catch (error) {
        console.log(error);
    }
}

document.getElementsByClassName("srcPlaceholder")[0].style.display="none";
setTimeout(changeClipboard, 150);
setTimeout(writeToTextarea, 300);
