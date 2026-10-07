// All game categories
const categories = [
    {
        id: 1,
        emoji: "✈️",
        title: "Rank the worst people to sit beside on a flight",
        items: [
            "Someone who takes both armrests",
            "A nonstop talker",
            "Someone who smells terrible",
            "A screaming baby",
            "Someone eating extremely smelly food",
            "Someone who keeps falling asleep on your shoulder",
            "Someone who gets up to use the bathroom every 20 minutes",
            "Someone watching videos without headphones",
            "Someone who keeps looking at your phone screen",
            "Someone who says, \"Don't worry, turbulence is usually worse than this.\" 💀"
        ]
    },
    {
        id: 2,
        emoji: "😭",
        title: "Rank the most embarrassing things your parents could reveal about you",
        items: [
            "Your childhood nickname",
            "Your embarrassing childhood photos",
            "The person you had your first crush on",
            "That you slept with a stuffed animal until an embarrassing age",
            "Your weird childhood habits",
            "A terrible hairstyle you once had",
            "The dumbest thing you cried about as a kid",
            "An embarrassing story about you trying to impress someone",
            "Something embarrassing you said about your current partner before dating them 👀",
            "Your entire awkward puberty era—with photographic evidence"
        ]
    },
    {
        id: 3,
        emoji: "🍽️",
        title: "Rank the worst things someone can do at a restaurant",
        items: [
            "Chew loudly",
            "Snap their fingers at the server",
            "Complain about absolutely everything",
            "Talk with their mouth full",
            "Watch TikToks at full volume",
            "Be extremely rude to the staff",
            "Send their food back three times",
            "Reach across and eat your food without asking",
            "Refuse to tip after receiving great service",
            "Say \"I'm not hungry\" and then eat half your meal"
        ]
    },
    {
        id: 4,
        emoji: "🛗",
        title: "Rank the most awkward elevator situations",
        items: [
            "You and one stranger standing in complete silence",
            "Someone facing the wrong direction",
            "Making eye contact through the mirror",
            "Someone starts a conversation one floor before you leave",
            "Getting in and realizing you forgot to press your floor",
            "Saying goodbye to someone and then realizing you're going to the same floor",
            "The elevator stops unexpectedly",
            "Someone farts and nobody says anything",
            "You try to hold the door but accidentally close it on someone",
            "Getting stuck with someone you've been actively avoiding"
        ]
    },
    {
        id: 5,
        emoji: "🕷️",
        title: "Rank the worst animals to find inside your house",
        items: [
            "Mouse",
            "Bat",
            "Huge spider",
            "Snake",
            "Raccoon",
            "Skunk",
            "Rat",
            "Scorpion",
            "Bear",
            "A chimpanzee that somehow got into your kitchen 💀"
        ]
    },
    {
        id: 6,
        emoji: "🏨",
        title: "Rank the worst things to discover in your hotel room",
        items: [
            "Dirty bedsheets",
            "Hair in the shower",
            "Bedbugs",
            "A horrible smell",
            "Used towels",
            "Someone else's underwear",
            "A cockroach",
            "Blood stain on the mattress 😭",
            "A hidden camera",
            "Someone already inside the room when you unlock it"
        ]
    },
    {
        id: 7,
        emoji: "💀",
        title: "Rank the worst times to start laughing uncontrollably",
        items: [
            "During a work meeting",
            "During an exam",
            "While someone is angry at you",
            "While your partner is trying to have a serious conversation",
            "During a wedding ceremony",
            "During a police interaction",
            "While someone is crying",
            "During a funeral",
            "While someone is getting fired",
            "When someone says \"This isn't funny.\" and that somehow makes it 100× funnier"
        ]
    },
    {
        id: 8,
        emoji: "😳",
        title: "Rank the qualities that make someone intimidating",
        items: [
            "Being extremely tall",
            "Being physically muscular",
            "Speaking very little",
            "Strong eye contact",
            "Deep voice",
            "Extreme confidence",
            "Never showing nervousness",
            "Being incredibly intelligent",
            "Staying completely calm during confrontation",
            "Having the ability to destroy you verbally without raising their voice"
        ]
    },
    {
        id: 9,
        emoji: "✈️",
        title: "Rank the qualities that make someone fun to travel with",
        items: [
            "Always down to try new food",
            "Doesn't complain",
            "Good photographer",
            "Good navigator",
            "Can make friends anywhere",
            "Flexible when plans change",
            "Good with money",
            "Will randomly suggest adventures",
            "Can make boring situations funny",
            "Has the perfect balance of \"we need a plan\" and \"fuck it, let's go\" 😂"
        ]
    },
    {
        id: 10,
        emoji: "🚩",
        title: "Rank the personality traits you couldn't tolerate in a partner",
        items: [
            "Extremely messy",
            "Always late",
            "Constantly negative",
            "Very jealous",
            "Bad communicator",
            "Self-centered",
            "Extremely controlling",
            "Dishonest",
            "Never admits when they're wrong",
            "Disrespectful when angry"
        ]
    },
    {
        id: 11,
        emoji: "❤️",
        title: "Rank the things you should NEVER hide from your partner",
        items: [
            "Something that's seriously bothering you",
            "Major financial problems",
            "Significant debt",
            "Being in contact with an ex",
            "Someone seriously flirting with you",
            "Something you did that broke an agreed boundary",
            "Major life decisions that affect both of you",
            "Serious doubts about the relationship",
            "Infidelity",
            "Living a secret second life 💀"
        ]
    },
    {
        id: 12,
        emoji: "🦍",
        title: "Rank the animals you'd choose to protect you in a fight",
        items: [
            "German Shepherd",
            "Wolf",
            "Gorilla",
            "Grizzly bear",
            "Lion",
            "Tiger",
            "Rhino",
            "Hippo",
            "Elephant",
            "A pissed-off silverback gorilla that thinks you're its baby 😭"
        ]
    },
    {
        id: 13,
        emoji: "😴",
        title: "Rank the places where taking a nap would be most unacceptable",
        items: [
            "Movie theatre",
            "Classroom",
            "Work meeting",
            "First date",
            "Job interview",
            "Wedding ceremony",
            "While getting a haircut",
            "During your own birthday party",
            "While someone is breaking up with you",
            "While you're driving 💀"
        ]
    },
    {
        id: 14,
        emoji: "🚕",
        title: "Rank the things you'd hate hearing your Uber driver say",
        items: [
            "\"You're my first passenger.\"",
            "\"I think we're lost.\"",
            "\"My GPS stopped working.\"",
            "\"Do you smell something burning?\"",
            "\"We need gas.\"",
            "\"I've never driven in this area before.\"",
            "\"That check-engine light has been on for months.\"",
            "\"Don't worry about that noise.\"",
            "\"Interesting... we're being followed.\"",
            "\"So... you guys believe in kidnapping?\" 💀"
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
