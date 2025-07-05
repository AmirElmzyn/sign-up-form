var btn = document.querySelector('.submit-btn');
var firstName = document.querySelector('input[placeholder="First Name"]');
var lastName = document.querySelector('input[placeholder="Last Name"]');
var email = document.querySelector('input[type="email"]');
var password = document.querySelector('input[type="password"]');
function showError(input, customMessage) {
    if (customMessage === void 0) { customMessage = null; }
    var parent = input.parentElement;
    var errorIcon = parent.querySelector(".error-icon");
    var errorMes = parent.querySelector(".error-mes");
    input.style.border = '2px solid hsl(0, 100%, 74%)';
    errorIcon.style.display = 'block';
    errorMes.style.display = 'block';
    // إذا كان هناك رسالة مخصصة، استخدمها
    if (customMessage) {
        errorMes.textContent = customMessage;
    }
}
function hideError(input) {
    var parent = input.parentElement;
    var errorIcon = parent.querySelector(".error-icon");
    var errorMes = parent.querySelector(".error-mes");
    input.style.border = '1px solid hsl(246, 25%, 77%)';
    errorIcon.style.display = 'none';
    errorMes.style.display = 'none';
    // إعادة الرسالة الأصلية
    if (input.type === 'password') {
        errorMes.textContent = 'Password cannot be empty';
    }
}
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}
function isValidPassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
// إضافة event listeners لإخفاء الأخطاء عند بدء الكتابة
firstName.addEventListener("input", function () {
    hideError(firstName);
});
lastName.addEventListener("input", function () {
    hideError(lastName);
});
email.addEventListener("input", function () {
    hideError(email);
});
password.addEventListener("input", function () {
    hideError(password);
});
// event listener للزر
btn.addEventListener("click", function () {
    var isFormValid = true;
    // التحقق من الاسم الأول
    if (firstName.value.trim() === '') {
        showError(firstName);
        isFormValid = false;
    }
    else {
        hideError(firstName);
    }
    // التحقق من الاسم الأخير
    if (lastName.value.trim() === '') {
        showError(lastName);
        isFormValid = false;
    }
    else {
        hideError(lastName);
    }
    // التحقق من البريد الإلكتروني
    if (email.value.trim() === '' || !isValidEmail(email.value)) {
        showError(email);
        isFormValid = false;
    }
    else {
        hideError(email);
    }
    // التحقق من كلمة المرور
    if (password.value.trim() === '') {
        showError(password, 'Password cannot be empty');
        isFormValid = false;
    }
    else if (!isValidPassword(password.value.trim())) {
        showError(password, 'Password must be 8+ chars with uppercase, lowercase, number & symbol');
        isFormValid = false;
    }
    else {
        hideError(password);
    }
    // إذا كانت جميع البيانات صحيحة
    if (isFormValid) {
        alert("تم إرسال النموذج بنجاح!");
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';
    }
});
