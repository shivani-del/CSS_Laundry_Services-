# LaundryPro - CSS-Only Landing Page

This is a simple landing page for a laundry service. I built it using only HTML and CSS to learn how to make websites look good on different screens.

## How to use this project
Just open the `index.html` file in your web browser. You can resize the window to see how the layout changes for tablets and phones.

## What I learned
The most interesting part of this project was making a "hamburger menu" for mobile phones without using any JavaScript.

### How the menu works (Pure CSS!)
I used the `:focus` pseudo-class to make the menu work. Here is how it works:
- When you click the triple-line button (the hamburger button), it gets "focus".
- In CSS, I use a special selector (`:focus ~ .nav-menu`) to say: "when the button is clicked/focused, find the menu and show it."
- When you click anywhere else, the button loses focus and the menu hides again automatically.

This was a great way to learn about CSS selectors and how to create a menu without needing scripts.

### Challenges
- **Layout Order**: I had to move the button in my HTML so the CSS could find the menu.
- **Stacking on Phones**: Using "Flexbox" helped me make sure the text and image stack vertically on small screens.
- **Navigation**: It took me a while to figure out how to keep the menu visible even if you click inside it using `:focus-within`.

## Files in this project
- `index.html`: The structure of the page.
- `styles.css`: All the colors, fonts, and layout rules.
- `README.md`: This file!