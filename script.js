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
        
        // Determine the base font size based on total text length
        const totalLength = text.length;
        let baseFontSize;
        
        if (totalLength > 100) {
            baseFontSize = '3.2rem';
        } else if (totalLength > 60) {
            baseFontSize = '3.8rem';
        } else if (totalLength > 30) {
            baseFontSize = '4.5rem';
        } else if (words.length > 10) {
            baseFontSize = '5.2rem';
        } else if (words.length > 5) {
            baseFontSize = '6.5rem';
        } else {
            baseFontSize = '8.5rem';
        }
        
        // Apply the font size to the text container
        textContainer.style.fontSize = baseFontSize;
        
        words.forEach(word => {
            if (word) {
                const wordElement = document.createElement('div');
                wordElement.classList.add('brat-text');
                wordElement.textContent = word.toLowerCase();
                
                // Individual word adjustment based on length
                if (word.length > 15) {
                    wordElement.style.fontSize = '0.8em';
                } else if (word.length > 10) {
                    wordElement.style.fontSize = '0.9em';
                }
                
                textContainer.appendChild(wordElement);
            }
        });
        
        outputContainer.appendChild(textContainer);
    }
}); 