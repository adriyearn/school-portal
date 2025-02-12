document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
            sessionStorage.removeItem('authToken');
                // Redirect to the correct login page
                window.location.href = '/login.html'; // Update path as needed
                }
            });
        } else {console.error('Logout button not found!');
        }
});