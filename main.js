const projectsList = document.querySelector(".projects-list");
// Function to do API call, retrieves json response and set it to the data variable

async function getAllProjects() {
  const response = await fetch("http://localhost:3000/projects", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data.data);
  return data.data;
}

getAllProjects();

// We can now use this function for the event listeners
function displaySearchData(searchData) {
  for (let i = 0; i < searchData.length; i++) {
    //create new list item
    const listItem = document.createElement("li");
    //set class of new list item to createdData
    listItem.setAttribute("class", "list-item createdData");
    //create data-container div
    const dataContainer = document.createElement("div");
    // set class of new div
    dataContainer.setAttribute("class", "data-container createdData");
    //create image-container div
    const imageContainer = document.createElement("div");
    // set class of new div
    imageContainer.setAttribute("class", "image-container createdData");
    // create img tag
    const suggestedPImage = document.createElement("img");
    // set class of new div
    suggestedPImage.setAttribute("class", "suggested-p-image createdData");
    suggestedPImage.setAttribute("src", "");
    if (searchData[i].language == "HTML"){
        suggestedPImage.src = "./Images/HTML.png"
    } else if (searchData[i].language == "CSS") {
        suggestedPImage.src = "./Images/CSS.png"
    } else if (searchData[i].language == "JS") {
        suggestedPImage.src = "./Images/JS.png"
    }
    suggestedPImage.setAttribute("alt", "html");
    //new div called project-text
    const projectText = document.createElement("div");
    //set class to project-text
    projectText.setAttribute("class", "project-text createdData");
    //create h3 element
    const projectTitle = document.createElement("h3");
    //set inner text
    projectTitle.innerHTML = `${searchData[i].name}`;
    // create p element
    const projectDescription = document.createElement("p");
    //set inner text
    projectDescription.textContent = `${searchData[i].short_description}`;
    //build the div structure
    projectText.appendChild(projectTitle);
    projectText.appendChild(projectDescription);
    imageContainer.appendChild(suggestedPImage);
    dataContainer.appendChild(imageContainer);
    dataContainer.appendChild(projectText);
    listItem.appendChild(dataContainer);

    console.log(listItem);

    projectsList.appendChild(listItem);
  }
}

async function getAndDisplayAllData() {
  const returnData = await getAllProjects();
  // deleteOldData();
  displaySearchData(returnData);
}

addEventListener("load", getAndDisplayAllData);

// Create a function that deletes the suggested projects

// Create a function to get project by coding language

// Create a function to get project by difficulty

// Event listeners to the different a tags