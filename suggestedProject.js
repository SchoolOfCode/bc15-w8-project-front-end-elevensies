// Function which will take the page and create the neccessary elements 

function displaySuggestedProject(){
    // Complete API call to return the data from the selected suggested project.
    // API Call query is best off being the H3 information in the list container 
    
    // Create a list item & Give it class of 'suggested container'
    // Set Classes for the below Box's in the following naming convention: box1, box2 etc
    const listItem = document.createElement("li")
    listItem.setAttribute("class", "suggested-container")
    // Create 'box1' div
    const box1 = document.createElement("div")
    box1.setAttribute("class", "box1")
    // Create 'box2' div
    const box2 = document.createElement("div")
    box2.setAttribute("class", "box2")
    // Create 'box3' div
    const box3 = document.createElement("div")
    box3.setAttribute("class", "box3")
    // Create 'box4' div
    const box4 = document.createElement("div")
    box4.setAttribute("class", "box4")
    // Create 'box5' div
    const box5 = document.createElement("div")
    box5.setAttribute("class", "box5")

    //Create a H1 element
    const h1 = document.createElement("h1")

    //Create a H2 element 
    const h2 = document.createElement("h2")

    //Create two img element's, one for the photo of the project second for the language box.
    const image1 = document.createElement("img")
    const image2 = document.createElement("img")

    // Give both image elemnt an attribute of src, keep value blank
    image1.setAttribute("src", "")
    image2.setAttribute("src", "")

    // Create two p elements
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")

    // Append the H1 element as a child to Box 1
    box1.appendChild(h1)
    // Append the H2 element also to the Box 1
    box1.appendChild(h2)
    // Append one of the image element to box 2
    box2.appendChild(image1)
    // Append a p tag to box 3
    box3.appendChild(p)
    // Append the second image to box 4
    box4.appendChild(image2)
    // Append the second p tag to box 5
    box5.appendChild(p2)
}