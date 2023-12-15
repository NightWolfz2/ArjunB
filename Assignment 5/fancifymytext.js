// Function to increase the text area's font size to 24pt
function makeTextBigger() {
    const textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

// Function to apply styles based on radio button selection
function applyStyles() {
    const textArea = document.getElementById("textArea");
    const fancyShmancyRadio = document.getElementById("fancyShmancy");

    if (fancyShmancyRadio.checked) {
        // Apply styles for "FancyShmancy"
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Remove styles for "BoringBetty"
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black"; // Default color
        textArea.style.textDecoration = "none"; // Remove underline
    }
}

// Function to uppercase text and add "-Moo" to the last word of each sentence
function capitalizeAndMoo() {
    const textArea = document.getElementById("textArea");
    let text = textArea.value;

    // Uppercase the entire text
    text = text.toUpperCase();

    // Add "-Moo" to the last word of each sentence
    const sentences = text.split(".");
    const modifiedSentences = [];

    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].trim();
        if (sentence.length > 0) {
            const words = sentence.split(" ");
            const lastWordIndex = words.length - 1;
            words[lastWordIndex] = words[lastWordIndex] + "-Moo";
            modifiedSentences.push(words.join(" "));
        }
    }

    textArea.value = modifiedSentences.join(". ");
}
