let main  = document.getElementById("blogs");

let data = JSON.parse(localStorage.getItem('user')) || [];

for (let i = 0; i < data.length; i++){
    //create elements for section, h2, p, p
    const section = document.createElement("section");
    const title = document.createElement("h2");
    const content = document.createElement("p");
    const author = document.createElement("p");
    // then add the data to each appropriate element

    title.textContent = data[i].title;
    content.textContent = data[i].content;
    author.textContent = "posted by: " + data[i].username;

    // then append the h2 and the two p tags into the section
    section.append(title, content, author);
    // thenappend the section to the main container
    main.append(section);
}
  