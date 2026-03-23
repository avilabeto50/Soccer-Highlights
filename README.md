# Soccer Resume & Highlight Reel

A responsive website showcasing athletic and academic profile to college coaches and scouts. Built with pure HTML, CSS, and JavaScript.

## Features

✅ **Hero Video** - Auto-playing main highlight reel on page load
✅ **Clip Carousels** - 8+ categories (Goals, Assists, Defending, etc.) with smooth navigation
✅ **Quick Stats Panel** - School, GPA, position, major displayed on sidebar
✅ **Detailed Resume** - Full academic and athletic profile with stats, achievements, and references
✅ **Theme Switching** - Dark mode (default) and light mode with localStorage persistence
✅ **Fully Responsive** - Optimized for mobile, tablet, and desktop browsers
✅ **Easy Data Management** - All data in `stats_db.js` for quick updates
✅ **No Build Tools Required** - Pure vanilla JavaScript, HTML, CSS

## Project Structure

```
Soccer-Highlights/
├── index.html           # Main HTML template
├── styles.css           # Responsive styling + themes
├── main.js              # App logic and interactivity
├── stats_db.js          # Player data (edit this to customize)
├── README.md            # This file
└── videos/              # (Optional) Store local MP4 files here
    ├── goal_1.mp4
    └── assist_1.mp4
```

## Quick Start

1. **Clone or Download** - Get the Soccer-Highlights folder
2. **Edit stats_db.js** - Update player information, stats, and video URLs
3. **Open index.html** - Simply open `index.html` in a web browser
4. **Test** - Check on desktop and mobile

No server or build tools needed!

## Customization Guide

### Update Player Data (stats_db.js)

Edit the `PLAYER_DATA` object in `stats_db.js`:

```javascript
const PLAYER_DATA = {
  player: {
    name: "Your Name",
    school: "Your School",
    classYear: "Senior (Class of 2026)",
    gpa: "3.85",
    positions: ["Forward", "Midfielder"],
    aspiringMajors: ["Computer Science", "Business"],
    email: "your.email@example.com",
    phone: "(555) 123-4567"
  },
  // ... more data
};
```

### Add/Update Videos

**YouTube Videos:**
- Get the video ID from YouTube URL (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → `dQw4w9WgXcQ`)
- Use embed URL: `https://www.youtube.com/embed/dQw4w9WgXcQ`

**Local MP4 Videos:**
- Create a `videos/` folder in the project root
- Add MP4 files (e.g., `videos/goal_1.mp4`)
- Reference as: `videos/goal_1.mp4`

**Example in stats_db.js:**
```javascript
heroVideo: {
  url: "https://www.youtube.com/embed/{videoId}",  // YouTube
  title: "2025-2026 Season Highlight Reel",
  subtitle: "Senior Year"
}

clips: [
  {
    url: "https://www.youtube.com/embed/{videoId}",  // YouTube
    title: "Championship Goal",
    date: "March 20, 2026"
  },
  {
    url: "videos/goal_1.mp4",  // Local MP4
    title: "Penalty Goal",
    date: "March 15, 2026"
  }
]
```

### Edit Clip Categories

Add, remove, or rename categories in the `clipCategories` array:

```javascript
clipCategories: [
  {
    name: "Goals",
    icon: "⚽",
    clips: [...]
  },
  {
    name: "Your Custom Category",
    icon: "🎯",  // Change emoji icon
    clips: [...]
  }
]
```

### Customize Styling

Edit `styles.css` to change colors, fonts, or layout:

```css
:root {
  --primary: #22c55e;        /* Main color (green) */
  --primary-dark: #16a34a;   /* Darker shade */
  --primary-light: #4ade80;  /* Lighter shade */

  /* Adjust for light theme */
  --bg: #1a1a1a;             /* Background */
  --text: #f0f0f0;           /* Text color */
}
```

## Deployment

### Option 1: GitHub Pages (Free & Easy)

1. Push project to GitHub repository
2. Go to repository Settings → Pages
3. Select branch `main` and folder `/ (root)`
4. Site will be available at `https://yourusername.github.io/Soccer-Highlights`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git" or drag & drop the folder
3. Site deployed instantly at `yourdomain.netlify.app`

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository or upload files
3. Site deployed at `yourdomain.vercel.app`

### Option 4: Local Hosting

Run a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if installed)
npx http-server

# Then open: http://localhost:8000
```

## Features Overview

### Desktop View
- Side panel with quick stats and category navigation
- Main content area with hero video and carousels
- Theme toggle in top-right corner

### Mobile View
- Collapsible hamburger menu
- Full-width carousels
- Bottom of screen resume and contact buttons
- All carousels scroll horizontally

### Carousels
- Click any clip to play in hero section
- Use Previous/Next buttons to scroll
- Each carousel shows total number of clips

### Dark/Light Mode
- Toggle via button in top-right corner
- Preference saved to browser's localStorage
- Applies to hero, carousels, resume, and modals

### Resume Section
- Click "📄 Full Resume" to view detailed profile
- Shows stats, achievements, academic info, and references
- Click "← Back" to return to main view

### Contact
- Click "📧 Contact" to see contact details
- Email and phone displayed in modal

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Videos not playing?**
- Check YouTube embed URL format: `https://www.youtube.com/embed/{videoId}`
- For local videos, ensure file is in `videos/` folder and path is correct

**Mobile menu not closing?**
- Should close automatically when clicking content
- Refresh page if stuck

**Dark mode not saving?**
- Clear browser localStorage and toggle theme again
- Some privacy browsers may not save preferences

**Stats not updating?**
- Clear browser cache (Ctrl+Shift+Delete)
- Make sure you saved `stats_db.js` after edits

## Tips for Best Results

1. **Use high-quality videos** - Codec H.264 MP4 recommended for local files
2. **Optimize video size** - Compress MP4 files for faster loading
3. **Update regularly** - Keep stats and clips fresh throughout the season
4. **Test on mobile** - Open on phone to verify responsive design
5. **Share the link** - Send to coaches and scouts with email context

## Performance Notes

- App loads instantly - no external dependencies
- Carousels load videos on demand
- localStorage used for theme preference only
- All data kept in `stats_db.js` for zero-latency access

## License

This project is free to use and modify for personal use.

## Support

For issues, make sure:
1. All JavaScript files are in the same folder as index.html
2. Video URLs are correct (check in browser console with F12)
3. Browser supports ES6 JavaScript
4. localStorage is enabled in browser