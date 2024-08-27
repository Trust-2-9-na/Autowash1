// Define a function to fetch menu data from the server
function fetchMenuData() {
    // Make an HTTP GET request to the get_menu_data endpoint
    fetch('/get_menu_data/')
        .then(response => {
            // Check if the response is ok
            if (!response.ok) {
                throw new Error('Failed to fetch menu data');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Handle the menu data
            renderMenu(data);
        })
        .catch(error => {
            console.error('Error fetching menu data:', error);
        });
}

// Define a function to render the menu
function renderMenu(data) {
    // Example: Render the main menu
    const mainMenu = document.getElementById('main-menu');
    data.main_menu_data.forEach(menuItem => {
        const menuItemElement = document.createElement('li');
        menuItemElement.textContent = menuItem.title;
        mainMenu.appendChild(menuItemElement);
    });

    // Example: Render the sub-menu
    const subMenu = document.getElementById('sub-menu');
    data.sub_menu_data.forEach(menuItem => {
        const menuItemElement = document.createElement('li');
        menuItemElement.textContent = menuItem.title;
        subMenu.appendChild(menuItemElement);
    });
}

// Call the fetchMenuData function when the page loads
document.addEventListener('DOMContentLoaded', fetchMenuData);
