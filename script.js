function validateInput() {
    

    
    innerValidateInput();
    window.addEventListener('keyup', function (e) {
        innerValidateInput();
    });
}

function innerValidateInput() {

    const allInputs = document.getElementsByClassName("input");
    for (var i = 0; i < allInputs.length; i++) {
        if (!allInputs[i].checkValidity()) {

            allInputs[i].style.outline = "1px solid rgba(223, 104, 104, 0.774)"
            allInputs[i].placeholder = ""
            allInputs[i].nextElementSibling.style.display = "block"
            nextInput = allInputs[i].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
            if (nextInput.type === "text" || nextInput.type === "email" || nextInput.type === "password") {
                nextInput.style.marginTop = "0px"
            } else if (nextInput.previousElementSibling.tagName == 'BUTTON') {
                nextInput.previousElementSibling.style.marginTop = "0px"
            }
            allInputs[i].style.color = "hsl(0, 100%, 74%)"
            allInputs[i].nextElementSibling.nextElementSibling.style.display = "block"

            // email special
            if (allInputs[i].type === "email" && !allInputs[i].value) {
                allInputs[i].nextElementSibling.innerHTML = "Common You have an email address right"
            } else if (allInputs[i].type === "email" && allInputs[i].value) {
                allInputs[i].nextElementSibling.innerHTML = "Looks like this is not an email"
            }

        } else if (allInputs[i].checkValidity()) {
            nextInput = allInputs[i].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
            nextInput.style.marginTop = "18px"
            allInputs[i].nextElementSibling.style.display = "none"
            allInputs[i].nextElementSibling.nextElementSibling.style.display = "none"
            allInputs[i].style.outline = "1px solid hsla(248, 32%, 49%, 0.692)"
            allInputs[i].style.color = "#3b3b3b"
        }
    };
}

// allInputs.forEach((element) => {
//     if (!validateAll(element.value, element.type)) { isAllvaild = false; break; }
// });