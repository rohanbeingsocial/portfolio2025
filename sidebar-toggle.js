// Sidebar toggle logic
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

// Create overlay for closing sidebar
let overlay = document.getElementById('sidebarOverlay');
if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sidebarOverlay';
    document.body.appendChild(overlay);
}

function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    // Hide the toggle button by adding a class to body
    document.body.classList.add('sidebar-open');
}
function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    // Show the toggle button
    document.body.classList.remove('sidebar-open');
}

sidebarToggle.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);

// Optional: close sidebar on ESC key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
});
