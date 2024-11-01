const form = document.getElementById('form');
const Response = document.getElementById('responseMessage')


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const Password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const Response = document.getElementById('responseMessage')

    if (email.includes("@")) {
        Response.innerText = "email invalid"
        Response.style.color = "red"
        return

    }
// 
    //
    if (Password !== confirmPassword) {
        Response.innerText = "password does not match"
        Response.style.color = "red"
        return
    }
    const responseMessage = `registration successful! welcome ${name}`
    Response.innerHTML = responseMessage;
    Response.style.color ='green'
})
//we have to type of react there is functional based react : this is the way of writing your function(function must always return with something )
//and classed based react : this is an old style of reacting react