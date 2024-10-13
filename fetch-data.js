// Initialize the async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Define the API URL
    const dataContainer = document.getElementById('api-data'); // Select the data container element

    try {
        // Fetch the user data
        const response = await fetch(apiUrl);
        const users = await response.json(); // Convert response to JSON

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a <li> element
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the <li> to the userList
        });

        // Append the userList to the dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Display error message
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
