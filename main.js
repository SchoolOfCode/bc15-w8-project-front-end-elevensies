// Function to do API call, retrieves json response and set it to the data variable
async function getAllProjects() {
    const response = await fetch("http://localhost:3000/projects", {
    method: "GET",
});
const data = await response.json();
// console.log(data);
return data;
}

getAllProjects();

// We can now use this function for the event listeners
