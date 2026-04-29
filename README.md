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

### Interactive Animations
I really wanted to make the page feel more dynamic, so I dove deep into CSS animations!

For the hero image, I created a custom `@keyframes` animation called `orbit-squeeze`. 
Here's my process and what I learned:
- **Starting Simple**: I began by just rotating the image `transform: rotate(360deg)`. It worked, but it just spun in place over and over.
- **Adding the Orbit**: To make it move in a circle, I combined `rotate` with `translateX(20px)`, followed immediately by an opposite `rotate` so the image wouldn't just flip upside down. 
- **The Squeeze**: I added `scale` changes at `25%` and `75%` to squish it slightly on the vertical then horizontal axes. 
- **Keyframe Percentages (0%, 25%, 50%, 75%, 100%)**: I chose these even intervals so the animation has a smooth, steady rhythm. At `0%` and `100%`, it’s at its default scale `(1, 1)` and starts the loop seamlessly. The `50%` mark acts as a reset halfway through, maintaining balance before the horizontal squish at `75%`.

**Testing Observations**:
When testing in the browser, the image moves in a small continuous circle (the orbit), and smoothly squishes inward like a jelly depending on where it is in the orbit. 
If I change the percentages (for instance, dropping the `50%` reset step or moving it to `80%`), the "squeeze" goes totally out of sync! The image either jerks suddenly or stays awkwardly compressed for way too long. The hardest part overall was wrapping my head around how the first `rotate` affects the axis of the `translateX`, which took a lot of trial and error to truly understand—but I eventually got it!

I also added a dynamic hover effect to the main "Book a service today!" Call-To-Action button, combining `translateY`, `rotate`, and `scale` with a custom `cubic-bezier` transition timing to make it aggressively pop when you hover over it!

### Challenges
- **Layout Order**: I had to move the button in my HTML so the CSS could find the menu.
- **Stacking on Phones**: Using "Flexbox" helped me make sure the text and image stack vertically on small screens.
- **Navigation**: It took me a while to figure out how to keep the menu visible even if you click inside it using `:focus-within`.

## Files in this project
- `index.html`: The structure of the page.
- `styles.css`: All the colors, fonts, and layout rules.
- `README.md`: This file!