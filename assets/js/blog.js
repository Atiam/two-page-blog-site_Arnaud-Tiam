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

const backbtn = document.querySelector('#back');

//add even handler on the submit button to prevent the default behavior , which is reloading the page.
backbtn.addEventListener('click', function (event) {
   event.preventDefault();
    window.location.href = "index.html";
})


// const sunbtn = document.querySelector('#sun');
// sunbtn.addEventListener('click', function (event) {
//     document.querySelector(`body`).style.backgroundColor="dark";
//     document.querySelector(`body`).style.font="white";
//  })

  