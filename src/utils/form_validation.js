export function minLength(input, minLength) {
 removeClassErrorSuccess(input);
 return validated(input.value.length >= minLength, input);
}

export function emailValidation(input) {
 const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

 removeClassErrorSuccess(input);
 return validated(emailValid.test(input.value), input);
}

function validated(predicated, input) {
 input.classList.add(predicated ? "success" : "error");
 return predicated;
}

function removeClassErrorSuccess(input) {
 input.classList.remove("success");
 input.classList.remove("error");
}
