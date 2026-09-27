# 🎮 Ranking Game - Daily Categories!

An interactive ranking game with 9 fun categories! Items are revealed one at a time to keep the suspense high.

## 🚀 How to Play

1. Visit **http://localhost:8003** (or open `index.html` in your browser)
2. **Choose a category** from 9 available options
3. **One item appears at a time** - you won't know what's coming next!
4. **Click a rank slot (1-10)** to place the current item
   - Rank 1 = Most preferred/acceptable
   - Rank 10 = Least preferred/acceptable
5. Items are **shuffled randomly** each game
6. Once all items are ranked, **submit** to see your results
7. Play again or try a different category!

## 🎯 9 Available Categories

1. 💬 **Rank the reasons you might secretly leave a group chat**
2. 💕 **Rank the best first-date activities**
3. 🚩 **Rank the worst first-date mistakes**
4. 🤯 **Rank the craziest experiences you'd try**
5. 💀 **Rank the worst ways to die socially**
6. 😱 **Rank the most embarrassing things that could happen on a date**
7. 😨 **Rank the situations where you'd immediately panic**
8. 🙈 **Rank the situations where you'd pretend you didn't see someone**
9. 🇮🇳 **Rank Indian street foods**

## 📁 Project Structure

```
hug-ranking-game/
├── index.html       # Main HTML file
├── style.css        # Styling and layout (Purple/Pink theme)
├── script.js        # Game logic and all categories
├── images/          # Image assets
└── README.md        # This file
```

## 🎨 Features

- **9 Unique Categories**: Wide variety of fun ranking topics
- **Suspenseful Reveal**: Items appear one at a time - no peeking ahead!
- **Randomized Order**: Items are shuffled each game for variety
- **Click-to-Place**: Simple interface - just click where you want to rank
- **Replace Option**: Can replace already-placed items if you change your mind
- **Beautiful Theme**: Vibrant purple-to-pink gradient background
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Smooth animations and clean design

## 🎮 Gameplay Flow

1. **Category Selection** → Browse and choose from 9 categories
2. **Item Reveal** → First item appears (shuffled order)
3. **Click to Rank** → Click any rank slot (1-10) to place the item
4. **Progress Tracker** → Shows "Item X of 10"
5. **Next Item** → New item automatically appears
6. **Repeat** → Continue until all 10 items are ranked
7. **Results** → View your complete rankings
8. **Play Again** → Try the same category or pick a new one!

## 🌈 Theme

Beautiful **Purple to Pink** gradient with matching UI elements:
- Rich purple-to-pink gradient background
- Matching card gradients
- Clean white cards with purple accents
- Beautiful hover effects

## 🔧 Customization

### Adding a New Category

Edit the `categories` array in `script.js`:

```javascript
{
    id: 10,
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
- **Multiple Playthroughs**: 9 categories = endless entertainment

---

## 🚀 Quick Start

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Run local server
python3 -m http.server 8003
# Then visit http://localhost:8003
```

## 🌐 Live Demo

Running on: **http://localhost:8003**

## 📦 GitHub Repository

https://github.com/JYP2098/rankings

---

Enjoy the game! 🎉

## 📝 Recent Updates

- Updated with 9 fresh categories
- Group chat, dating, social situations themes
- Indian street food rankings added
- Purple/pink gradient theme maintained
