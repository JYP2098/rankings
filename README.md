# 🎮 Ranking Game - Fresh Categories!

An interactive ranking game with 13 fun categories! Items are revealed one at a time to keep the suspense high.

## 🚀 How to Play

1. Visit **http://localhost:8001** (or open `index.html` in your browser)
2. **Choose a category** from 13 available options
3. **One item appears at a time** - you won't know what's coming next!
4. **Click a rank slot (1-10)** to place the current item
   - Rank 1 = Most preferred/acceptable
   - Rank 10 = Least preferred/acceptable
5. Items are **shuffled randomly** each game
6. Once all items are ranked, **submit** to see your results
7. Play again or try a different category!

## 🎯 13 Available Categories

1. 😱 **Rank these things your partner could say that would instantly scare you**
2. 🕵️ **Rank these situations by how suspicious they are**
3. 🌙 **Rank the reasons your partner could wake you up at 3 AM**
4. 💰 **Rank these things you'd spend $1 million on first**
5. 😤 **Rank these inconveniences from mildly annoying to absolutely unbearable**
6. 🧟 **Rank these situations by how likely you are to survive**
7. 🪂 **Rank these experiences you'd try**
8. 💵 **Rank these challenges you'd be most willing to accept for $1 million**
9. 🛡️ **Rank these people you'd want on your team during an apocalypse**
10. ✈️ **Rank these places you'd most want to wake up tomorrow**
11. 👗 **Rank these fashion sins from forgivable to CRIMINAL 😂**
12. ✨ **Rank these skincare situations from mildly annoying to HORRIBLE**
13. 💸 **You have $1,000 — rank what you'd spend it on**

## 📁 Project Structure

```
hug-ranking-game/
├── index.html       # Main HTML file
├── style.css        # Styling and layout (Coral/Yellow theme)
├── script.js        # Game logic and all categories
└── README.md        # This file
```

## 🎨 Features

- **13 Unique Categories**: Wide variety of fun ranking topics
- **Suspenseful Reveal**: Items appear one at a time - no peeking ahead!
- **Randomized Order**: Items are shuffled each game for variety
- **Click-to-Place**: Simple interface - just click where you want to rank
- **Replace Option**: Can replace already-placed items if you change your mind
- **Beautiful Theme**: Vibrant coral-to-yellow gradient background
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Smooth animations and clean design

## 🎮 Gameplay Flow

1. **Category Selection** → Browse and choose from 13 categories
2. **Item Reveal** → First item appears (shuffled order)
3. **Click to Rank** → Click any rank slot (1-10) to place the item
4. **Progress Tracker** → Shows "Item X of 10"
5. **Next Item** → New item automatically appears
6. **Repeat** → Continue until all 10 items are ranked
7. **Results** → View your complete rankings
8. **Play Again** → Try the same category or pick a new one!

## 🌈 New Theme

Fresh **Coral to Yellow** gradient background with matching UI elements:
- Vibrant warm gradient (Coral → Yellow → Teal)
- Matching card gradients
- Clean white cards with coral accents
- Beautiful hover effects

## 🔧 Customization

### Adding a New Category

Edit the `categories` array in `script.js`:

```javascript
{
    id: 14,
    emoji: "🎭",
    title: "Your category title here",
    items: [
        "Item 1",
        "Item 2",
        // ... 10 items total
    ]
}
```

### Changing the Theme

Edit colors in `style.css`:
- Background gradient: `body { background: linear-gradient(...) }`
- Card colors: `.current-card { background: ... }`
- Button colors: `.btn-primary { background: ... }`

## 💡 Perfect For

- 🎉 Social media story games
- 💬 Group chats and debates
- 🎯 Icebreaker activities
- 😂 Fun discussions with friends
- 📱 Instagram/TikTok content

## 🌟 Key Game Mechanics

- **No Peeking**: Items revealed one at a time creates suspense
- **Randomization**: Same category feels different each playthrough
- **Easy Modification**: Can replace rankings if you change your mind
- **Multiple Playthroughs**: 13 categories = endless entertainment

---

## 🚀 Quick Start

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Run local server
python3 -m http.server 8001
# Then visit http://localhost:8001
```

## 🎮 Current Server

Running on: **http://localhost:8001**

Enjoy the game! 🎉
