const backbtn = document.querySelector('#back');

//add even handler on the submit button to prevent the default behavior , which is reloading the page.
backbtn.addEventListener('click', function (event) {
   event.preventDefault();
    window.location.href = "index.html";
})

