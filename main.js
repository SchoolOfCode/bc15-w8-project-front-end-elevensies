const projectsList = document.querySelector(".projects-list");
const logoButton = document.querySelector(".logo");
const HTMLButton = document.querySelector("#HTML");
const CSSButton = document.querySelector("#CSS");
const JSButton = document.querySelector("#JavaScript");
const EasyButton = document.querySelector("#Easy");
const MediumButton = document.querySelector("#Medium");
const DifficultButton = document.querySelector("#Difficult");

let suggestedProject1 = "";
let suggestedProject2 = "";
let suggestedProject3 = "";
let suggestedProject4 = "";
let suggestedProject5 = "";

// Function to do API call, retrieves json response and set it to the data variable

async function getAllProjects() {
  const response = await fetch("http://localhost:3000/projects", {
    method: "GET",
  });
  const data = await response.json();
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
    if (searchData[i].language == "HTML") {
      suggestedPImage.src = "./Images/HTML.png";
    } else if (searchData[i].language == "CSS") {
      suggestedPImage.src = "./Images/CSS.png";
    } else if (searchData[i].language == "JS") {
      suggestedPImage.src = "./Images/JS.png";
    }
    suggestedPImage.setAttribute("alt", "html");
    //new div called project-text
    const projectText = document.createElement("div");
    //set class to project-text
    projectText.setAttribute("class", "project-text createdData");
    //create h3 element
    const projectTitle = document.createElement("h3");
    // Set Project ID
    projectTitle.setAttribute("id", `project${[i]}`);
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
    projectsList.appendChild(listItem);
  }
}

// Function to construct the sselected, suggested project.
function displaySuggestedProject() {
  // Complete API call to return the data from the selected suggested project.
  // API Call query is best off being the H3 information in the list container

  // Create a list item & Give it class of 'suggested container'
  // Set Classes for the below Box's in the following naming convention: box1, box2 etc
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "suggested-container");
  // Create 'box1' div
  const box1 = document.createElement("div");
  box1.setAttribute("class", "box1");
  // Create 'box2' div
  const box2 = document.createElement("div");
  box2.setAttribute("class", "box2");
  // Create 'box3' div
  const box3 = document.createElement("div");
  box3.setAttribute("class", "box3");
  // Create 'box4' div
  const box4 = document.createElement("div");
  box4.setAttribute("class", "box4");
  // Create 'box5' div
  const box5 = document.createElement("div");
  box5.setAttribute("class", "box5");

  //Create a H1 element
  const h1 = document.createElement("h1");

  //Create a H2 element
  const h2 = document.createElement("h2");

  //Create two img element's, one for the photo of the project second for the language box.
  const image1 = document.createElement("img");
  const image2 = document.createElement("img");

  // Give both image elemnt an attribute of src, keep value blank
  image1.setAttribute("src", "");
  image2.setAttribute("src", "");

  // Create two p elements
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  // Append the H1 element as a child to Box 1
  box1.appendChild(h1);
  // Append the H2 element also to the Box 1
  box1.appendChild(h2);
  // Append one of the image element to box 2
  box2.appendChild(image1);
  // Append a p tag to box 3
  box3.appendChild(p);
  // Append the second image to box 4
  box4.appendChild(image2);
  // Append the second p tag to box 5
  box5.appendChild(p2);
}

async function getAndDisplayAllData() {
  const returnData = await getAllProjects();
  deleteOldData();
  displaySearchData(returnData);
  suggestedProject1 = document.getElementById("project0");
  let suggestedProject2 = document.getElementById("project1");
  let suggestedProject3 = document.getElementById("project2");
  let suggestedProject4 = document.getElementById("project3");
  let suggestedProject5 = document.getElementById("project4");
}

// Create a function that deletes the suggested projects
function deleteOldData() {
  let removedData = document.getElementsByClassName("createdData");
  while (removedData[0]) {
    removedData[0].parentNode.removeChild(removedData[0]);
  }
}

// Create a function to get project by coding language
async function getProjectsByDifficulty(level) {
  const response = await fetch(
    `http://localhost:3000/projects/difficulty/${level}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  console.log(data.data);
  return data.data;
}

// Create a function to get project by difficulty
async function getProjectsByLanguage(lang) {
  const response = await fetch(
    `http://localhost:3000/projects/language/${lang}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  console.log(data.data);
  return data.data;
}

async function getAndDisplayDifficulty(Level) {
  const returnData = await getProjectsByDifficulty(Level);
  deleteOldData();
  displaySearchData(returnData);
}
async function getAndDisplayLanguage(Lang) {
  const returnData = await getProjectsByLanguage(Lang);
  deleteOldData();
  displaySearchData(returnData);
}
// Event listeners to the different a tags

addEventListener("load", getAndDisplayAllData);
logoButton.addEventListener("click", getAndDisplayAllData);

HTMLButton.addEventListener("click", () => {
  getAndDisplayLanguage("HTML");
});
CSSButton.addEventListener("click", () => {
  getAndDisplayLanguage("CSS");
});
JSButton.addEventListener("click", () => {
  getAndDisplayLanguage("JS");
});

EasyButton.addEventListener("click", () => {
  getAndDisplayDifficulty("Easy");
});
MediumButton.addEventListener("click", () => {
  getAndDisplayDifficulty("Medium");
});
DifficultButton.addEventListener("click", () => {
  getAndDisplayDifficulty("Difficult");
});

// Event listeners for each of the individual suggested projects, id starts with 0 as this was initialised in the for loop

// const suggestedProject1 = document.getElementById("project0");
// const suggestedProject2 = document.getElementById("project1");
// const suggestedProject3 = document.getElementById("project2");
// const suggestedProject4 = document.getElementById("project3");
// const suggestedProject5 = document.getElementById("project4");

suggestedProject1.addEventListener("click", () => {
    console.log("Running")
})
