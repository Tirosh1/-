// App data
const apps = [
    { name: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
    { name: 'VS Code', url: 'https://vscode.dev', icon: 'fas fa-code' },
    { name: 'CodePen', url: 'https://codepen.io', icon: 'fab fa-codepen' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', icon: 'fab fa-stack-overflow' },
    { name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'fas fa-robot' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
    { name: 'YouTube', url: 'https://www.youtube.com', icon: 'fab fa-youtube' },
    { name: 'Arduino Cloud', url: 'https://cloud.arduino.cc', icon: 'fab fa-arduino' },
    { name: 'Replit', url: 'https://replit.com', icon: 'fas fa-terminal' },
    { name: 'LeetCode', url: 'https://leetcode.com', icon: 'fas fa-code-branch' },
    { name: 'Dev.to', url: 'https://dev.to', icon: 'fab fa-dev' },
    { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org', icon: 'fab fa-free-code-camp' }
];

// Link data
const links = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'VS Code', url: 'https://vscode.dev' },
    { name: 'CodePen', url: 'https://codepen.io' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com' }
];

// Function to create app icons
function createAppIcons() {
    const appsContainer = document.getElementById('apps-container');
    apps.forEach(app => {
        const appDiv = document.createElement('div');
        appDiv.className = 'col-md-2 col-sm-4 col-6 mb-4';
        appDiv.innerHTML = `
            <div class="app-icon animate__animated animate__fadeIn floating">
                <a href="${app.url}" class="text-light text-decoration-none">
                    <i class="${app.icon} mb-2"></i>
                    <p>${app.name}</p>
                </a>
            </div>
        `;
        appsContainer.appendChild(appDiv);
    });
}

// Function to create links
function createLinks() {
    const linksContainer = document.getElementById('links-container');
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        linkElement.className = 'animate__animated animate__fadeIn';
        linksContainer.appendChild(linkElement);
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Function to handle voice search
function handleVoiceSearch() {
    const micButton = document.getElementById('mic-button');
    const searchInput = document.getElementById('search-input');

    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = function(event) {
            const result = event.results[0][0].transcript;
            searchInput.value = result;
            setTimeout(() => document.getElementById('search-button').click(), 500);
        };

        micButton.addEventListener('click', () => {
            recognition.start();
        });
    } else {
        micButton.style.display = 'none';
    }
}

// Function to animate footer
function animateFooter() {
    const codeAnimation = document.getElementById('code-animation');
    const codeSnippets = [
        '<div style="color: #569cd6;">const</div> <div style="color: #4ec9b0;">developer</div> <div style="color: #d4d4d4;">=</div> <div style="color: #ce9178;">"passionate"</div><div style="color: #d4d4d4;">;</div>',
        '<div style="color: #c586c0;">if</div> <div style="color: #d4d4d4;">(</div><div style="color: #4ec9b0;">code</div> <div style="color: #d4d4d4;">===</div> <div style="color: #ce9178;">"clean"</div><div style="color: #d4d4d4;">)</div> <div style="color: #d4d4d4;">{</div>',
        '<div style="color: #d4d4d4;">  </div><div style="color: #4ec9b0;">productivity</div><div style="color: #d4d4d4;">++;</div>',
        '<div style="color: #d4d4d4;">}</div>',
        '<div style="color: #6a9955;">// Keep coding, keep innovating!</div>'
    ];

    let currentSnippet = 0;
    setInterval(() => {
        codeAnimation.innerHTML = codeSnippets[currentSnippet];
        currentSnippet = (currentSnippet + 1) % codeSnippets.length;
    }, 3000);
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createAppIcons();
    createLinks();
    handleSearch();
    handleVoiceSearch();
    animateFooter();

    // Add some random floating animation delays
    document.querySelectorAll('.floating').forEach(el => {
        el.style.animationDelay = `${Math.random() * 2}s`;
    });
});
