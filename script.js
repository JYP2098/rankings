// All game categories
const categories = [
    {
        id: 1,
        emoji: "💬",
        title: "Rank the reasons you might secretly leave a group chat",
        items: [
            "Everyone keeps sending 100 messages while you're sleeping",
            "Someone keeps starting pointless arguments",
            "You don't understand any of the inside jokes anymore",
            "Someone keeps sending terrible memes",
            "You're constantly getting tagged",
            "Everyone makes plans in the chat but never invites you",
            "One person sends 15-minute voice notes",
            "Someone accidentally adds their parents",
            "The chat becomes exclusively about one person's relationship",
            "You said something embarrassing and nobody acknowledged it 😭"
        ]
    },
    {
        id: 2,
        emoji: "💕",
        title: "Rank the best first-date activities",
        items: [
            "Coffee date",
            "Dinner",
            "Mini golf",
            "Bowling",
            "Arcade",
            "Picnic",
            "Cooking class",
            "Museum/art gallery",
            "Beach/sunset date",
            "Random road trip with no plan"
        ]
    },
    {
        id: 3,
        emoji: "🚩",
        title: "Rank the worst first-date mistakes",
        items: [
            "Arriving 30+ minutes late",
            "Talking about your ex the entire time",
            "Constantly checking your phone",
            "Being rude to the server",
            "Talking only about yourself",
            "Asking about marriage immediately 😂",
            "Getting drunk",
            "Making inappropriate jokes",
            "Trying too hard to impress them",
            "Saying \"So... what are we?\" before dessert 💀"
        ]
    },
    {
        id: 4,
        emoji: "🤯",
        title: "Rank the craziest experiences you'd try",
        items: [
            "Skydiving",
            "Swimming with sharks",
            "Bungee jumping",
            "Sleeping in the jungle",
            "Climbing a volcano",
            "Scuba diving in a shipwreck",
            "Racing a supercar",
            "Going on a zero-gravity flight",
            "Visiting Antarctica",
            "Going to space 🚀"
        ]
    },
    {
        id: 5,
        emoji: "💀",
        title: "Rank the worst ways to die socially",
        items: [
            "Waving back at someone who wasn't waving at you",
            "Falling in public and pretending nothing happened",
            "Calling someone by the wrong name",
            "Saying \"you too\" when it makes absolutely no sense",
            "Telling a joke and nobody laughs",
            "Walking into a glass door",
            "Tripping while trying to look cool",
            "Sending a message to the wrong group chat",
            "Accidentally liking someone's photo from 2016",
            "Saying something confidently and realizing everyone knows you're wrong 💀"
        ]
    },
    {
        id: 6,
        emoji: "😱",
        title: "Rank the most embarrassing things that could happen on a date",
        items: [
            "Food gets stuck in your teeth",
            "Spill your drink",
            "Trip while walking",
            "Your stomach makes a ridiculous noise",
            "Call them by the wrong name",
            "Your phone starts playing something embarrassing",
            "Your card gets declined",
            "Your ex walks into the restaurant",
            "You accidentally send them a text meant for your friend",
            "You wave at someone thinking they're your date... and they're a complete stranger 😭"
        ]
    },
    {
        id: 7,
        emoji: "😨",
        title: "Rank the situations where you'd immediately panic",
        items: [
            "Your phone falls into the toilet",
            "You can't find your wallet",
            "Your car won't start",
            "You realize you left your passport at home",
            "You smell something burning",
            "You lose your keys",
            "You accidentally send a private message to the wrong person",
            "You wake up and can't remember where you are",
            "You see an unexpected charge on your bank account",
            "You hear \"We need to talk\" from someone you love 💀"
        ]
    },
    {
        id: 8,
        emoji: "🙈",
        title: "Rank the situations where you'd pretend you didn't see someone",
        items: [
            "Someone you vaguely know at the grocery store",
            "Your ex across the street",
            "Someone you owe money",
            "Someone you left on read",
            "Someone you promised to call",
            "Your old teacher",
            "Someone you went on one date with",
            "Your friend's extremely annoying friend",
            "Someone you just talked badly about 😭",
            "Your boss while you're supposed to be working from home 💀"
        ]
    },
    {
        id: 9,
        emoji: "🇮🇳",
        title: "Rank Indian street foods",
        items: [
            "Pani puri",
            "Samosa",
            "Pav bhaji",
            "Vada pav",
            "Dahi puri",
            "Bhel puri",
            "Aloo tikki",
            "Chole bhature",
            "Dabeli",
            "Kachori"
        ]
    }
];

let currentCategory = null;
let currentItems = [];
let currentItemIndex = 0;
let rankings = {};
let draggedElement = null;

// Initialize the game
function initGame() {
    showCategorySelection();
}

function showCategorySelection() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <header>
            <h1>🎮 Ranking Game</h1>
            <p class="instruction">Choose a category to start ranking!</p>
        </header>
        <div class="category-selection">
            ${categories.map(cat => `
                <button class="category-btn" data-category-id="${cat.id}">
                    <span class="category-emoji">${cat.emoji}</span>
                    <span class="category-title">${cat.title}</span>
                </button>
            `).join('')}
        </div>
    `;
    
    // Add click listeners to category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoryId = parseInt(e.currentTarget.dataset.categoryId);
            startGame(categoryId);
        });
    });
}

function startGame(categoryId) {
    currentCategory = categories.find(c => c.id === categoryId);
    currentItems = [...currentCategory.items].sort(() => Math.random() - 0.5); // Shuffle items
    currentItemIndex = 0;
    rankings = {};
    
    // Build game interface
    const container = document.querySelector('.container');
    container.innerHTML = `
        <header>
            <h1>🎮 Ranking Game</h1>
            <p class="category">${currentCategory.emoji} ${currentCategory.title}</p>
            <p class="instruction">Click on a rank slot to place the current item</p>
            <p class="progress">Item <span id="currentProgress">1</span> of ${currentItems.length}</p>
        </header>

        <div class="game-area-new">
            <div class="current-card-display">
                <h2>Current Item</h2>
                <div class="current-card" id="currentCard">
                    <div class="card-content">${currentItems[0]}</div>
                </div>
            </div>

            <div class="ranking-zone">
                <h2>Click a Rank to Place Item</h2>
                <div class="ranking-slots">
                    ${Array.from({length: 10}, (_, i) => `
                        <div class="rank-slot" data-rank="${i + 1}">
                            <div class="rank-number">${i + 1}</div>
                            <div class="rank-content" data-rank="${i + 1}"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="controls">
            <button id="backBtn" class="btn">← Back to Categories</button>
            <button id="submitBtn" class="btn btn-primary" style="display: none;">Submit Rankings</button>
        </div>
    `;
    
    // Setup click listeners for rank slots
    setupRankSlotListeners();
    
    // Setup buttons
    document.getElementById('backBtn').addEventListener('click', showCategorySelection);
    document.getElementById('submitBtn').addEventListener('click', submitRankings);
}

function setupRankSlotListeners() {
    document.querySelectorAll('.rank-content').forEach(slot => {
        slot.addEventListener('click', (e) => {
            const rank = e.target.dataset.rank;
            placeCurrentItem(rank);
        });
    });
}

function placeCurrentItem(rank) {
    if (rankings[rank]) {
        // Slot is occupied, ask if they want to replace
        if (!confirm(`Rank ${rank} already has an item. Replace it?`)) {
            return;
        }
    }
    
    // Place the current item
    const item = currentItems[currentItemIndex];
    rankings[rank] = item;
    
    // Update the UI
    const rankSlot = document.querySelector(`.rank-content[data-rank="${rank}"]`);
    rankSlot.innerHTML = `<div class="placed-item">${item}</div>`;
    rankSlot.classList.add('filled');
    
    // Move to next item
    currentItemIndex++;
    
    if (currentItemIndex < currentItems.length) {
        // Show next item
        document.getElementById('currentCard').innerHTML = `
            <div class="card-content">${currentItems[currentItemIndex]}</div>
        `;
        document.getElementById('currentProgress').textContent = currentItemIndex + 1;
    } else {
        // All items placed
        document.getElementById('currentCard').innerHTML = `
            <div class="card-content complete">✅ All items ranked!</div>
        `;
        document.getElementById('submitBtn').style.display = 'inline-block';
    }
}



function submitRankings() {
    if (Object.keys(rankings).length < currentItems.length) {
        alert('Please rank all items before submitting!');
        return;
    }
    
    // Create results display
    const container = document.querySelector('.container');
    container.innerHTML = `
        <header>
            <h1>🎮 Your Rankings</h1>
            <p class="category">${currentCategory.emoji} ${currentCategory.title}</p>
        </header>

        <div class="results-display">
            <div class="results-list">
                ${Array.from({length: 10}, (_, i) => {
                    const rank = i + 1;
                    return `
                        <div class="result-item">
                            <div class="result-rank">${rank}</div>
                            <div class="result-content">${rankings[rank]}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <div class="controls">
            <button id="backBtn" class="btn">← Back to Categories</button>
            <button id="playAgainBtn" class="btn btn-primary">Play Again</button>
        </div>
    `;
    
    document.getElementById('backBtn').addEventListener('click', showCategorySelection);
    document.getElementById('playAgainBtn').addEventListener('click', () => startGame(currentCategory.id));
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);
