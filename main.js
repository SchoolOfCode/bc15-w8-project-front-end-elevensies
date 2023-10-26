async function getProjects(){
    const projects = await fetch("http://localhost:3000/")
    console.log(projects)
}

addEventListener("load", getProjects())