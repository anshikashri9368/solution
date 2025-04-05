
// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Alert System
const alerts = [
    { message: '⚠️ Flood Warning in Coastal Areas', type: 'danger' },
    { message: '🔥 High Fire Risk in Northern Regions', type: 'danger' },
    { message: '✅ All Systems Operational', type: 'success' }
];

function updateAlert() {
    const alertBar = document.getElementById('liveAlert');
    const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
    alertBar.textContent = randomAlert.message;
    alertBar.style.backgroundColor = `var(--${randomAlert.type}-color)`;
}
setInterval(updateAlert, 3000);

// Prediction System
function runPrediction() {
    const location = document.getElementById('predictLocation').value;
    const disasterType = document.getElementById('disasterType').value;
    const risks = ['Low', 'Medium', 'High'];
    
    document.getElementById('predictionOutput').innerHTML = `
        <div class="prediction-result">
            <h3>${disasterType} Risk Assessment</h3>
            <p>Location: ${location}</p>
            <p>Risk Level: ${risks[Math.floor(Math.random() * 3)]}</p>
        </div>
    `;
}

// Weather System
function getCurrentWeather() {
    const location = document.getElementById('tempLocation').value;
    document.getElementById('weatherDisplay').innerHTML = `
        <div class="weather-card">
            <h3>Current Conditions</h3>
            <p>Temperature: ${Math.floor(Math.random()*35+10)}°C</p>
            <p>Conditions: Sunny</p>
        </div>
    `;
}

// Preparation Guide
function showPrecautions() {
    const disasterType = document.getElementById('disasterSelect').value;
    const precautions = {
        earthquake: ['Drop, Cover, Hold On', 'Secure heavy furniture', 'Prepare emergency kit'],
        flood: ['Move to higher ground', 'Avoid flood waters', 'Turn off utilities'],
        hurricane: ['Board up windows', 'Prepare emergency supplies', 'Evacuate if advised']
    };
    
    document.getElementById('precautionsContainer').innerHTML = `
        <ul class="precautions-list">
            ${precautions[disasterType].map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

// Chatbot Toggle
function toggleChatbot() {
    const chatbot = document.querySelector('.chatbot-container');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}