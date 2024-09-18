function openNav() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        // Desktop view - open wider sidebar
        document.getElementById("mySidebar").style.width = "240px";
        document.getElementById("main-content").style.marginLeft = "240px";
    } else {
        // Mobile view - open narrow sidebar
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main-content").style.marginLeft = "200px";
    }
    document.getElementById("mySidebar").classList.add("open");
    document.getElementById("main-content").classList.add("sidebar-open");
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main-content").style.marginLeft = "0";
    document.getElementById("mySidebar").classList.remove("open");
    document.getElementById("main-content").classList.remove("sidebar-open");
}

// Function to handle the search action
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const courseCards = document.querySelectorAll('.course-card');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim(); // Get and trim the input value

    courseCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            card.style.display = ''; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// JavaScript function to navigate to a section smoothly
function navigate(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        targetSection.scrollIntoView({
            behavior: 'smooth' // Enable smooth scrolling
        });
    });
});
