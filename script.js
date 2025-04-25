document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const outputContainer = document.getElementById('output');

    // Set focus on the input field when the page loads
    userInput.focus();

    // Generate text on load with the default value
    generateBratText('okay');

    // Generate brat text as the user types
    userInput.addEventListener('input', () => {
        const text = userInput.value.trim();
        
        if (text === '') {
            // Clear output if input is empty
            outputContainer.innerHTML = '';
            return;
        }
        
        // Generate the brat text layout
        generateBratText(text);
    });

    // Function to generate brat-style text layout
    function generateBratText(text) {
        outputContainer.innerHTML = ''; // Clear previous content
        
        // Create a container for the text layout
        const textContainer = document.createElement('div');
        textContainer.style.display = 'flex';
        textContainer.style.flexDirection = 'column';
        textContainer.style.alignItems = 'center';
        textContainer.style.justifyContent = 'center';
        textContainer.style.width = '100%';
        
        // Split text into words and display each word on its own line
        const words = text.split(/\s+/);
        
        words.forEach(word => {
            if (word) {
                const wordElement = document.createElement('div');
                wordElement.classList.add('brat-text');
                wordElement.textContent = word.toLowerCase();
                
                // Dynamically adjust font size based on word length
                // For longer words, make the font size smaller
                if (word.length > 15) {
                    wordElement.style.fontSize = '3.2rem';
                } else if (word.length > 10) {
                    wordElement.style.fontSize = '4rem';
                } else if (word.length > 6) {
                    wordElement.style.fontSize = '4.8rem';
                }
                
                textContainer.appendChild(wordElement);
            }
        });
        
        outputContainer.appendChild(textContainer);
    }
}); 