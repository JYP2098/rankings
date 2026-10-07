# 🎮 Ranking Game - Absolutely Hilarious Categories!

An interactive ranking game with 14 chaotic and relatable categories! Items are revealed one at a time to keep the suspense high.

## 🚀 How to Play

1. Visit **http://localhost:8003** (or open `index.html` in your browser)
2. **Choose a category** from 14 available options
3. **One item appears at a time** - you won't know what's coming next!
4. **Click a rank slot (1-10)** to place the current item
   - Rank 1 = Most preferred/acceptable
   - Rank 10 = Least preferred/acceptable
5. Items are **shuffled randomly** each game
6. Once all items are ranked, **submit** to see your results
7. Play again or try a different category!

## 🎯 14 Available Categories

1. ✈️ **Rank the worst people to sit beside on a flight**
2. 😭 **Rank the most embarrassing things your parents could reveal about you**
3. 🍽️ **Rank the worst things someone can do at a restaurant**
4. 🛗 **Rank the most awkward elevator situations**
5. 🕷️ **Rank the worst animals to find inside your house**
6. 🏨 **Rank the worst things to discover in your hotel room**
7. 💀 **Rank the worst times to start laughing uncontrollably**
8. 😳 **Rank the qualities that make someone intimidating**
9. ✈️ **Rank the qualities that make someone fun to travel with**
10. 🚩 **Rank the personality traits you couldn't tolerate in a partner**
11. ❤️ **Rank the things you should NEVER hide from your partner**
12. 🦍 **Rank the animals you'd choose to protect you in a fight**
13. 😴 **Rank the places where taking a nap would be most unacceptable**
14. 🚕 **Rank the things you'd hate hearing your Uber driver say**

## 📁 Project Structure

```
hug-ranking-game/
├── index.html       # Main HTML file
├── style.css        # Styling and layout (Sunset Orange theme)
├── script.js        # Game logic and all categories
├── images/          # Image assets
└── README.md        # This file
```

## 🎨 Features

- **14 Unique Categories**: Hilarious, relatable, and chaotic scenarios
- **Suspenseful Reveal**: Items appear one at a time - no peeking ahead!
- **Randomized Order**: Items are shuffled each game for variety
- **Click-to-Place**: Simple interface - just click where you want to rank
- **Replace Option**: Can replace already-placed items if you change your mind
- **Fresh Sunset Theme**: Vibrant orange-to-yellow gradient background
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Smooth animations and clean design

## 🎮 Gameplay Flow

1. **Category Selection** → Browse and choose from 14 categories
2. **Item Reveal** → First item appears (shuffled order)
3. **Click to Rank** → Click any rank slot (1-10) to place the item
4. **Progress Tracker** → Shows "Item X of 10"
5. **Next Item** → New item automatically appears
6. **Repeat** → Continue until all 10 items are ranked
7. **Results** → View your complete rankings
8. **Play Again** → Try the same category or pick a new one!

## 🌈 Theme

Beautiful **Sunset Orange** gradient with matching UI elements:
- Warm orange-to-yellow gradient background (Orange → Amber → Light Yellow)
- Matching card gradients
- Clean white cards with orange accents
- Beautiful hover effects

## 🔧 Customization

### Adding a New Category

Edit the `categories` array in `script.js`:

```javascript
{
    id: 15,
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
- **Multiple Playthroughs**: 14 categories = endless entertainment

## 😂 Category Highlights

From airport nightmares and awkward elevator encounters, to embarrassing parent stories and terrifying hotel discoveries - these categories capture the most relatable and hilarious life situations!

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

- **October 2026**: Updated with 14 fresh hilarious categories
- New sunset orange/yellow gradient theme
- Flight nightmares, awkward situations, relationship scenarios
- Animal encounters and social anxiety moments 😂
