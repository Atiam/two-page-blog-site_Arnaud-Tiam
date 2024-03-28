const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const sumitButton = document.querySelector("#sumit");

//add event addEventListener on the submit button to prevent the default behavior , which is reloading the page.
sumitButton.addEventListener("click", function (event) {
    //Prevent submit event from refreshing the page
  event.preventDefault();
 

  let userentry = JSON.parse(localStorage.getItem('user')) || [];

  const user = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

//push the user object into userentry array
userentry.push(user);


//To Check of the value of the entry is null or empty, sent the alter message if it is the case.
  if ((usernameInput.value == null || usernameInput.value == "") || (titleInput.value == null || titleInput.value == "") || (contentInput.value == null || contentInput.value == ""))
    {alert("Please Fill In All Fields");}
    else {
        localStorage.setItem("user", JSON.stringify(userentry)); // set new submission to local storage
        window.location.href = "blog.html";}
  
});




