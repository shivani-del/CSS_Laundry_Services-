# LaundryPro - Professional Laundry Service Landing Page

A responsive, modern landing page for a professional laundry service built with pure HTML and CSS.

## My Learning Journey (The Real Story)

Building this laundry landing page was harder than I thought it would be! I wanted to make something that looked professional, but I ran into a lot of "beginner" problems along the way.

### 🧗‍♂️ What was actually hard

1.  **The Mystery of the Hero Image**: I spent way too much time trying to get the washing machine image to fit next to the text. At first, it kept jumping below the text or getting squashed. I had to learn that `flex: 1` on both containers was the secret to keeping them side-by-side.
2.  **Media Query Mess**: I thought breakpoints were simple, but my layout kept breaking at random screen sizes. I originally had things stacking way too early on tablets, which looked weird. I'm still learning exactly where the "perfect" breakpoint should be.
3.  **The Navigation Struggle**: Making the menu work on mobile is tough! I had the markup ready but couldn't figure out why the menu wouldn't show up. I realized I needed a bit of JavaScript to actually make the button *do* something.

### 🔍 Mistakes I made and fixed

-   **Over-complicating Flexbox**: I was using `flex-wrap: wrap` everywhere, which caused the hero section to stack on tablets when it didn't need to. I had to go back and remove it to keep the side-by-side look for larger tablets.
-   **Font Sizes**: My headers were huge on mobile! I had to manually go through and shrink them down so they didn't take up the whole screen.
-   **CSS Variables**: I tried to use them for everything, but then I forgot which variable was which. I'm trying to keep it simpler now until I get the hang of it.

### 🚀 What I'm still learning

-   How to make the hamburger menu animation look smooth.
-   Better ways to handle images so they don't slow down the page.
-   Writing cleaner CSS that doesn't feel like a giant mess of overrides.


## File Structure

```
Laundry_Services/
├── index.html          # Semantic HTML structure
├── styles.css          # Optimized CSS with variables and responsive design
└── README.md           # Project documentation and learning reflections
```

## Technical Implementation

### CSS Architecture with Variables
```css
:root {
    /* Colors */
    --primary-blue: #007bff;
    --text-dark: #333;
    --text-light: #555;
    
    /* Breakpoints */
    --mobile-breakpoint: 480px;
    --tablet-breakpoint: 768px;
    
    /* Spacing */
    --nav-height-desktop: 70px;
    --nav-height-tablet: 60px;
    --nav-height-mobile: 50px;
}
```

### Responsive Strategy
- **Mobile (≤480px)**: Single column, simplified navigation, larger touch targets
- **Tablet (481-768px)**: Flexible layout, reduced text sizes, centered content
- **Desktop (>768px)**: Full side-by-side layout, complete navigation

### Key Features Implemented
- CSS custom properties for consistent theming
- Flexbox-based layouts for maximum flexibility
- Smooth transitions and hover effects
- Mobile-optimized navigation with hamburger menu
- Responsive typography that scales with viewport

## Getting Started

1. Clone or download the project files
2. Open `index.html` in any modern web browser
3. Resize your browser window to see responsive behavior
4. Test on mobile devices using browser dev tools
5. No build process or dependencies required

## What I Would Improve Next Time

1. **CSS Grid integration**: For more complex layouts, CSS Grid would offer better control
2. **Accessibility testing**: More thorough ARIA labels and keyboard navigation
3. **Performance optimization**: Further CSS minification and image optimization
4. **Animation refinements**: Subtle animations to enhance user experience