# Memory Game

This project is an **interactive web-based Memory Game** where players
flip cards to match identical images within a limited time.
It aims to provide a **simple, fun, and responsive matching-pairs game**
using **HTML, CSS, JavaScript**, and basic game logic.

------------------------------------------------------------------------

## Live Demo

You can view the live version of the project here:
**(Add your GitHub Pages link here)**

------------------------------------------------------------------------

## Features

-   **Flip Cards** --- Players can flip two cards at a time to find a
    matching pair.
-   **Timer Countdown** --- 60-second countdown to finish the game.
-   **Win / Lose Modal** --- Shows a message when time runs out or all
    pairs are matched.
-   **Matched Cards** --- Correct pairs stay flipped permanently.
-   **Shuffle Cards** --- Each game starts with a new random
    arrangement.
-   **Responsive Grid** --- Works on desktop, tablet, and mobile
    screens.
-   **Restart Game** --- Reset the board and timer with one click.

------------------------------------------------------------------------

## Technologies Used

-   **HTML5** --- Structure of the game grid and modal.
-   **CSS3** --- Styling, layout, responsive design.
-   **Tailwind CSS** --- Modern utility-based styling for the board and
    cards.\
-   **JavaScript (ES6)** --- Handles game logic, card flipping,
    matching, timer, and rendering.

------------------------------------------------------------------------

## Project Structure

    Memory-Game/
    │
    ├── css/style.css       (optional if you're using Tailwind CDN)
    ├── js/script.js
    └── index.html

------------------------------------------------------------------------

## How It Works

1.  The game loads 8 images and duplicates them to create **pairs**.
2.  The array is **shuffled** randomly using Fisher-Yates shuffle.
3.  The board is generated dynamically using JavaScript.
4.  When the player flips two cards:
    -   If they match → they stay flipped.
    -   If not → they flip back after a short delay.
5.  A **60-second timer** counts down during gameplay.
6.  The game ends when:
    -   All pairs are matched → **Win Message**
    -   Time reaches zero → **Lose Message**
7.  The player can restart the game anytime using the **Reset** button.

------------------------------------------------------------------------

## Getting Started

1.  **Clone or download** the repository.
2.  Open `index.html` in your browser.
3.  Start the game and begin matching the cards.

------------------------------------------------------------------------

## Folder Details

  -----------------------------------------------------------------------
  File / Folder                         Description
  ------------------------------------- ---------------------------------
  `index.html`                          Main page structure and layout

  `css/style.css`                       Optional custom styles (if not
                                        using Tailwind only)

  `js/script.js`                        Contains all game logic (shuffle,
                                        flip, match, timer, modal)
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## Future Improvements

-   Add **difficulty levels** (Easy -- Medium -- Hard).
-   Add **card-flip animation** using CSS transitions.
-   Add **score system** based on time and attempts.
-   Add **sound effects** for flipping and matching.
-   Add **leaderboard** using localStorage.

------------------------------------------------------------------------

## License

This project is **open-source** and free to use, modify, or share for
learning and educational purposes.
Developed by **Shorouk Khaled**.
