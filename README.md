# LaundryPro - Professional Laundry Service Landing Page

A responsive, modern landing page for a professional laundry service built with pure HTML and CSS.

## Features

### 🎨 **Design**
- Clean, modern interface with professional typography
- Smooth hover effects and transitions
- Mobile-first responsive design
- No JavaScript required - pure HTML/CSS implementation

### 📱 **Responsive Design**
- **Desktop (>768px):** Side-by-side layout with full navigation
- **Tablet (≤768px):** Stacked layout with centered content, reduced navigation
- **Mobile (≤480px):** Compact column layout, minimal navigation, optimized images

### 🧭 **Navigation**
- Sticky header with smooth shadow effects
- Logo, navigation links, and user button
- Responsive navigation that adapts to screen size
- Mobile view hides navigation links for cleaner interface

### 🏠 **Hero Section**
- Eye-catching gradient background
- Professional typography with highlighted text
- Call-to-action button with hover effects
- Responsive washing machine illustration
- Content reflows properly on all screen sizes

## File Structure

```
Laundry_data/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
└── README.md           # This documentation file
```

## Technical Implementation

### CSS Architecture
- **Mobile-first approach:** Base styles for mobile, enhanced for larger screens
- **Flexbox layout:** Modern, flexible layout system
- **CSS Grid fallback:** Where appropriate for complex layouts
- **Custom properties:** Consistent color scheme and spacing
- **Smooth animations:** Professional micro-interactions

### Responsive Breakpoints
- **Mobile:** 480px and below
- **Tablet:** 481px - 768px  
- **Desktop:** 769px and above

### Key Features
- `overflow-x: hidden` prevents horizontal scrolling
- `max-width: 100%` ensures images never overflow
- Flexible typography scales with screen size
- Touch-friendly button sizes on mobile

## Getting Started

1. Clone or download the project files
2. Open `index.html` in any modern web browser
3. Resize your browser to see responsive behavior
4. No build process or dependencies required

## Customization

### Colors
- Primary blue: `#007bff`
- Text dark: `#333`
- Text light: `#555`
- Background light: `#f8f9fa`

### Spacing
- Consistent 8px grid system
- Responsive padding and margins
- Flexible gap values in flex layouts