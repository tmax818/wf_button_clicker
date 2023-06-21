

function toggleLogin(el){
    if(el.innerHTML === "Login"){
        el.innerHTML = "Logout"
    } else {
        el.innerHTML = "Login"
    }
    console.log(el.innerHTML)
}

function removeEl(el){
    el.remove()
}