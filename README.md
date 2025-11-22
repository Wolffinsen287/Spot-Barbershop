# The Spot Barbershop - Website

A premium, classy website for The Spot Barbershop featuring three locations across LA County (Norwalk, Whittier, and La Mirada).

## Features

- **Responsive Design**: Fully responsive layout that looks great on desktop, tablet, and mobile devices
- **Elegant Styling**: Classy black and gold color scheme with smooth animations
- **Three Locations**: Dedicated section showcasing all three barbershop locations
- **Gallery Ready**: Placeholder section ready for adding photos of haircuts
- **Smooth Navigation**: Smooth scrolling and interactive navigation menu
- **Modern UI/UX**: Clean, professional interface with attention-grabbing design

## Project Structure

```
web page/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## How to Use Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process required - it's pure HTML, CSS, and JavaScript!

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `the-spot-barbershop`)
4. Choose "Public" visibility
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop all files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Commit the changes

**Option B: Using Git Command Line**
```bash
# Navigate to your project folder
cd "c:\Users\jdwap\OneDrive\Desktop\Barbershop\web page"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - The Spot Barbershop website"

# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/the-spot-barbershop.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select `main` and folder `/ (root)`
6. Click "Save"
7. Wait a few minutes and your site will be live at: `https://YOUR-USERNAME.github.io/the-spot-barbershop/`

## Adding Photos to the Gallery

When you're ready to add photos of haircuts:

1. Create an `images` folder in your project
2. Add your photos to this folder (recommended: optimize images for web)
3. Replace the gallery placeholder section in `index.html` with actual gallery items:

```html
<div class="gallery-grid">
    <div class="gallery-item">
        <img src="images/cut1.jpg" alt="Haircut example 1">
        <div class="gallery-overlay">View</div>
    </div>
    <div class="gallery-item">
        <img src="images/cut2.jpg" alt="Haircut example 2">
        <div class="gallery-overlay">View</div>
    </div>
    <!-- Add more gallery items as needed -->
</div>
```

4. Uncomment the `initGallery()` call at the bottom of `script.js`

## Customization

### Update Location Information

Edit the location cards in `index.html` to add specific addresses and phone numbers:

```html
<p>123 Main Street, Norwalk, CA 90650</p>
<p>(555) 123-4567</p>
```

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-gold: #D4AF37;
    --dark-bg: #0f0f0f;
    --darker-bg: #080808;
    --accent-red: #8B0000;
}
```

### Update Contact Information

Replace placeholder email and social media handles in the Contact section of `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Playfair Display & Montserrat)

## Future Enhancements

- Add booking system integration
- Include customer testimonials
- Add Google Maps integration for locations
- Implement photo lightbox for gallery
- Add pricing information
- Include barber profiles

## License

This project is free to use and modify for The Spot Barbershop.

---

**The Spot Barbershop** - Where Style Meets Precision
