# Personal Portfolio Website

This is a fully responsive, Apple-inspired personal portfolio website built with HTML5, CSS3, and Vanilla JavaScript. 

## Features
- **Apple-Inspired Design:** Minimal, elegant, premium, spacious, and modern aesthetic.
- **Typography:** Uses Google Fonts (Poppins for headings, Inter for body).
- **Responsive:** Fluid layouts using Flexbox and CSS Grid, adapting to desktop, tablet, and mobile screens.
- **No Frameworks:** Built entirely from scratch without Bootstrap, Tailwind, or React.

## File Structure
```
portfolio/
├── template/
│   ├── index.html        # About Me page (Hero, About, Skills, Education)
│   ├── resume.html       # Experience page (Timeline, Certifications)
│   └── project.html      # Projects page (Grid gallery)
├── style/
│   ├── style.css         # All CSS styles and variables
│   └── images/           # Directory for your image assets
│       ├── profile.jpg
│       ├── project1.jpg
│       ├── project2.jpg
│       ├── project3.jpg
│       └── ...
└── README.md
```

## Customization Guide

1. **Text Content:** 
   Open the HTML files inside the `template/` folder in your favorite code editor (e.g., VS Code). Search for text in square brackets like `[Your Name]` or `[Placeholder]` and replace them with your actual details.

2. **Images:**
   The `style/images/` folder contains placeholder image files. To use your own images:
   - Simply replace `profile.jpg`, `project1.jpg`, etc., in the `style/images/` folder with your actual photos. Ensure the filenames match, or update the `src` paths in the HTML files.
   - If an image is missing, a fallback placeholder will be shown automatically thanks to an inline SVG fallback in the `onerror` attribute.

3. **Colors & Styles:**
   All colors, fonts, and spacing are controlled via CSS variables at the top of `style/style.css` inside the `:root` block. Edit these variables to tweak the design without hunting through the entire stylesheet.

## Deployment
This is a static website. You can host it easily for free on platforms like:
- GitHub Pages
- Netlify
- Vercel

Enjoy your new premium portfolio!
