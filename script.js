// All game categories
const categories = [
    {
        id: 1,
        emoji: "🤝",
        title: "Rank these \"I'd immediately trust you\" qualities",
        items: [
            "You remember small details",
            "You keep secrets",
            "You admit when you're wrong",
            "You don't gossip",
            "You show up when needed",
            "You don't judge",
            "You give honest advice",
            "You defend your friends",
            "You keep your promises",
            "You return the Tupperware. 😂"
        ]
    },
    {
        id: 2,
        emoji: "✨",
        title: "Rank these lifestyle upgrades",
        items: [
            "Dream house",
            "Dream car",
            "Six-pack abs",
            "Unlimited travel",
            "Financial freedom",
            "Perfect sleep schedule",
            "Private chef",
            "Personal trainer",
            "Work 4 days a week",
            "Never have to work again"
        ]
    },
    {
        id: 3,
        emoji: "🌟",
        title: "Rank these things by how important they are for a good life",
        items: [
            "Money",
            "Health",
            "Family",
            "Friends",
            "Love",
            "Career",
            "Travel",
            "Freedom",
            "Hobbies",
            "Peace of mind"
        ]
    },
    {
        id: 4,
        emoji: "😍",
        title: "Rank these features by how attractive they are",
        items: [
            "Nice hands",
            "Veiny forearms",
            "Broad shoulders",
            "Strong jawline",
            "Thick eyebrows",
            "Nice smile",
            "Deep voice",
            "Good hair",
            "Athletic legs",
            "Good posture"
        ]
    },
    {
        id: 5,
        emoji: "💔",
        title: "Rank these friend betrayals from least to most unforgivable",
        items: [
            "Forgetting your birthday",
            "Canceling plans last minute",
            "Leaving you on read",
            "Not inviting you somewhere",
            "Revealing a small secret",
            "Talking behind your back",
            "Flirting with your crush",
            "Dating your ex",
            "Betraying your trust",
            "Stealing your food and saying they didn't"
        ]
    },
    {
        id: 6,
        emoji: "🍛",
        title: "Rank these Gujarati food combinations",
        items: [
            "Fafda + jalebi",
            "Thepla + chai",
            "Dhokla + green chutney",
            "Khandvi + chutney",
            "Undhiyu + puri",
            "Dal dhokli + ghee",
            "Khichdi + kadhi",
            "Sev tameta + rotli",
            "Gathiya + chai",
            "Muthiya + chutney"
        ]
    },
    {
        id: 7,
        emoji: "😬",
        title: "Rank these pick-up lines from cringe to call the police",
        items: [
            "\"Are you Wi-Fi? Because I'm feeling a connection.\"",
            "\"Did it hurt when you fell from heaven?\"",
            "\"Are you a parking ticket? Because you've got FINE written all over you.\"",
            "\"Do you have a map? I keep getting lost in your eyes.\"",
            "\"Are you French? Because Eiffel for you.\"",
            "\"Are you a magician? Because everyone else disappears when I see you.\"",
            "\"Are you Google? Because you have everything I've been searching for.\"",
            "\"You must be tired because you've been running through my mind all day.\"",
            "\"Can I follow you home? Because my parents always told me to follow my dreams.\"",
            "\"Damn girl, are you a Gujarati thali? Because I want all of you.\" 💀"
        ]
    },
    {
        id: 8,
        emoji: "😤",
        title: "Rank these pet peeves",
        items: [
            "Loud chewing",
            "Slow walkers",
            "People who don't use turn signals",
            "Leaving dishes in the sink",
            "Being late",
            "Interrupting",
            "Talking during movies",
            "Leaving someone on read",
            "Not returning things",
            "People who stop in the middle of a sidewalk"
        ]
    },
    {
        id: 9,
        emoji: "🏠",
        title: "Rank these roommate pet peeves",
        items: [
            "Dirty dishes",
            "Loud music",
            "Messy bathroom",
            "Leaving lights on",
            "Stealing food",
            "Using your stuff",
            "Never taking out garbage",
            "Leaving clothes everywhere",
            "Having people over without asking",
            "Finishing your food and putting the empty container back 💀"
        ]
    },
    {
        id: 10,
        emoji: "🤢",
        title: "Rank these weird Gujju food combos",
        items: [
            "Fafda + Jalebi + Ketchup",
            "Dhokla + Maggi + Cheese",
            "Thepla + Pizza sauce + Cheese",
            "Khakhra + Butter + Sugar",
            "Gathiya + Vanilla ice cream",
            "Jalebi + Chaat masala",
            "Khaman + Nutella",
            "Patra + Schezwan sauce",
            "Dal dhokli + Mayo",
            "Gujarati kadhi + Maggi"
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
