document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const outputContainer = document.getElementById('output');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    // Set focus on the input field when the page loads
    userInput.focus();

    // Generate brat text as the user types
    userInput.addEventListener('input', () => {
        const text = userInput.value.trim();
        generateBratText(text);
    });

    // Theme switching logic
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const themeClass = button.classList[1]; // Get the specific theme class
            applyTheme(themeClass);
        });
    });

    // Function to apply the selected theme
    function applyTheme(themeClass) {
        // Remove previous theme classes from body
        body.className = ''; 
        
        // Apply new theme class to body if one exists
        if (themeClass) {
            body.classList.add(themeClass);
        }
    }
    
    // Function to generate brat-style text layout
    function generateBratText(text) {
        outputContainer.innerHTML = ''; // Clear previous content
        
        if (text === '') return; // Don't generate text if input is empty

        // Create a container for the text layout
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-content-container'); // Use a class for text container
        
        // Split text into words
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
            baseFontSize = '7.2rem';
        }
        
        // Group words into lines of roughly 3 words each
        const wordsPerLine = 3;
        const lines = [];
        
        for (let i = 0; i < words.length; i += wordsPerLine) {
            const lineWords = words.slice(i, i + wordsPerLine);
            lines.push(lineWords);
        }
        
        // Apply the font size to the text container
        textContainer.style.fontSize = baseFontSize;
        
        // Create each line with properly spaced words
        lines.forEach(lineWords => {
            if (lineWords.length > 0) {
                const lineContainer = document.createElement('div');
                lineContainer.classList.add('brat-line');
                
                // Join words with double spaces
                lineContainer.textContent = lineWords.join('  ').toLowerCase();
                
                textContainer.appendChild(lineContainer);
            }
        });
        
        outputContainer.appendChild(textContainer); // Add text container after overlay
    }
    
    // Initialize with default (no theme)
    applyTheme(''); // Start with no theme applied
}); 