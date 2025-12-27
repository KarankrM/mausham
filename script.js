// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-theme', currentTheme === 'dark');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Profile picture placeholder - using a placeholder service
// Replace with actual image URL when available
const profileImg = document.getElementById('profileImg');
if (profileImg && !profileImg.src.includes('profile.jpg')) {
    // Using a placeholder that matches the description: motorcycle rider
    profileImg.src = 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400&h=400&fit=crop&crop=faces';
    profileImg.alt = 'Premsagar Kumar on motorcycle';
}

// Search functionality (placeholder)
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    // Add search functionality here
    console.log('Search clicked');
});

