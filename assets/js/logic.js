const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const sumitButton = document.querySelector("#sumit");

sumitButton.addEventListener("click", function (event) {
    //Prevent submit event from refreshing the page
  event.preventDefault();
 

  let userintry = JSON.parse(localStorage.getItem('user')) || [];

  const user = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  userintry.push(user);

  // set new submission to local storage
  localStorage.setItem("user", JSON.stringify(userintry));


//   if ((usernameInput.value == null || usernameInput.value == "") && (titleInput.value == null || titleInput.value == "") && (contentInput.value == null || contentInput.value == "")
//     {alert("Please Fill In All Fields");}
//     else {window.location.href = "blog.html";}
  
  window.location.href = "blog.html";
});

//


// // function checkForm() {
//     if ((usernameInput.value == null || usernameInput.value == "") && (titleInput.value == null || titleInput.value == "") && (contentInput.value == null || contentInput.value; == "") {
//       alert("Please Fill In All Required Fields");
//       return false;
//     }
//   }

//add even handler on the submit button to prevent the default behavior , which is reloading the page.

// usernameInput.value != null
// titleInput.value != null
// contentInput.value != null

//  if (usernameInput.value && titleInput.value && contentInput.value) {
//     sumitButton.addEventListener('click', function (event) {
//         event.preventDefault();
//          window.location.href = "blog.html";
//      })

//     }
//     else {alert("please complete the form")};
