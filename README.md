# Laundry Services

A modern, responsive laundry services website featuring a clean design with CSS flexbox layout, mobile navigation, and comprehensive responsive design.

## Features

### Navigation System
- **Desktop Navigation**: Full navbar with logo, navigation links, and user profile
- **Mobile Navigation**: Hamburger menu with slide-out mobile navigation drawer
- **Responsive Design**: Seamless transition between desktop and mobile layouts

### Layout & Design
- **Hero Section**: Two-column flexbox layout with text and image
- **Mobile Reordering**: Content reorganizes optimally on mobile devices
- **Modern Styling**: Clean, professional design with hover effects and transitions

### Responsive Breakpoints
- **Desktop**: Default layout (>768px)
- **Tablet**: Optimized for tablets (<=768px)
- **Mobile**: Mobile-first design (<=480px)

## Technical Implementation

### CSS Flexbox Usage
- **Navbar Layout**: `display: flex` with `justify-content: space-between` for header alignment
- **Hero Section**: Flexbox two-column layout with responsive gap spacing
- **Mobile Menu**: Flexbox for centering mobile navigation items
- **Content Reordering**: `flex-direction: column-reverse` for mobile layout optimization

### Responsive Design Strategy
- **Mobile-First Approach**: Progressive enhancement from mobile to desktop
- **Media Queries**: Strategic breakpoints at 768px and 480px
- **Flexible Typography**: Scalable font sizes across all devices
- **Adaptive Spacing**: Responsive padding and margins

### Interactive Elements
- **Hamburger Menu**: Focus-based mobile menu activation
- **Hover Effects**: Smooth transitions on navigation links and buttons
- **CTA Button**: Prominent call-to-action with hover states

## Project Structure

Laundry_Services/
|-- index.html          # HTML structure with semantic markup and mobile navigation
|-- styles.css          # Complete responsive CSS with flexbox layouts and media queries
|-- README.md           # Project documentation
