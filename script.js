let password = document.getElementById("password");
let result = document.getElementById("result");

password.addEventListener("input", function () {

    let pass = password.value;
    let score = 0;

    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[@#$%^&*!]/.test(pass)) score++;

    if (pass.length === 0) {
        result.innerHTML = "";
    }
    else if (score === 5) {
        result.innerHTML = "Strong Password";
        result.style.color = "green";
    }
    else if (score >= 3) {
        result.innerHTML = "Medium Password";
        result.style.color = "orange";
    }
    else {
        result.innerHTML = "Weak Password";
        result.style.color = "red";
    }
});
