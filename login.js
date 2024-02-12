const form = document.getElementById("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "./selfcare dark theme/selfcare.html"
    }else{
        alert("wrong")
    }

})

// function for checking username and password

function authentication(username, password){
    if (username === "admin" && password === "Access123"){
        return true
    }else{
        return false
    }
}

