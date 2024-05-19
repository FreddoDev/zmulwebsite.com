function passwordMasking() {
    var password = document.getElementById("password-input").value
    var masker = document.getElementById("contentMask")

    masker.textContent = "*".repeat(password.length);
}