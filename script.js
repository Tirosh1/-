// App data
const apps = [
    { name: 'OneDrive', url: 'https://onedrive.live.com', icon: 'fa-brands fa-microsoft' },
    { name: 'Blackbox AI', url: 'https://www.useblackbox.io', icon: 'fa-solid fa-robot' },
    { name: 'Blynk IoT', url: 'https://blynk.io', icon: 'fa-solid fa-cloud' },
    { name: 'Claude AI', url: 'https://claude.ai', icon: 'fa-solid fa-brain' }
];

// Link data
const links = [
    { name: 'OneDrive', url: 'https://onedrive.live.com' },
    { name: 'Blackbox AI', url: 'https://www.useblackbox.io' },
    { name: 'Blynk IoT', url: 'https://blynk.io' },
    { name: 'Claude AI', url: 'https://claude.ai' }
];

// Function to create app icons
function createAppIcons() {
    const appsContainer = document.getElementById('apps-container');
    apps.forEach(app => {
        const appDiv = document.createElement('div');
        appDiv.className = 'col-md-3 col-sm-6 mb-4';
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
        '<div style="color: #ff79c6;">const</div> <div style="color: #50fa7b;">life</div> <div style="color: #f8f8f2;">=</div> <div style="color: #f1fa8c;">"beautiful"</div><div style="color: #f8f8f2;">;</div>',
        '<div style="color: #ff79c6;">if</div> <div style="color: #f8f8f2;">(</div><div style="color: #50fa7b;">code</div> <div style="color: #ff79c6;">===</div> <div style="color: #f1fa8c;">"clean"</div><div style="color: #f8f8f2;">)</div> <div style="color: #f8f8f2;">{</div>',
        '<div style="color: #f8f8f2;">  </div><div style="color: #50fa7b;">success</div><div style="color: #f8f8f2;">++;</div>',
        '<div style="color: #f8f8f2;">}</div>',
        '<div style="color: #6272a4;">// Keep coding, keep learning!</div>'
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
