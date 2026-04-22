# Laundry Services

A responsive laundry services website built with modern CSS flexbox and media queries.

## What I Learned

This project demonstrates responsive web design using CSS flexbox and media queries:

### Flexbox Layout
- **display: flex** - Creates flexible container layouts
- **justify-content: space-between** - Distributes items evenly in navbar
- **flex-direction: column-reverse** - Stacks items vertically in reverse order on mobile
- **gap: 2rem** - Creates consistent spacing between flex items

### Responsive Design
- **Media Queries** - Breakpoints for tablet (≤768px) and mobile (≤480px)
- **Mobile-first approach** - Progressive enhancement from larger to smaller screens
- **Flexible typography** - Font sizes scale appropriately across devices

### Challenges I Faced

1. **Navbar responsiveness**: Successfully converted from inline-block to flexbox for better mobile handling
2. **Hero section layout**: Transitioned from float-based two-column to flexible flexbox layout
3. **Mobile reordering**: Used `flex-direction: column-reverse` to place image above text on mobile
4. **Responsive typography**: Implemented scalable font sizes that work across all devices

## Project Structure

Laundry_Services/
|-- index.html          # HTML structure for responsive laundry services website
|-- styles.css          # CSS with flexbox layout and responsive media queries
|-- README.md           # Documentation of responsive design implementation


