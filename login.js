document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // تحقق من نمط البريد الإلكتروني
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // تحقق من أن كلمة المرور تنتهي بـ 6 أرقام
    const passwordPattern = /\d{6}$/;

    const emailFeedback = document.getElementById('email');
    const passwordFeedback = document.getElementById('password-feedback');

    let isValid = true;

    // تحقق من البريد الإلكتروني
    if (emailPattern.test(email)) {
        emailFeedback.textContent = '✔'; // علامة صح
        emailFeedback.className = 'valid';
    } else {
        emailFeedback.textContent = '✖'; // علامة خطأ
        emailFeedback.className = 'invalid';
        isValid = false;
    }

    // تحقق من كلمة المرور
    if (passwordPattern.test(password)) {
        passwordFeedback.textContent = '✔'; // علامة صح
        passwordFeedback.className = 'valid';
    } else {
        passwordFeedback.textContent = '✖'; // علامة خطأ
        passwordFeedback.className = 'invalid';
        isValid = false;
    }













    if (emailPattern.test(email) && passwordPattern.test(password)) {
        // حفظ البريد الإلكتروني وكلمة المرور في التخزين المحلي
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // إعادة التوجيه إلى صفحة أخرى إذا كانت الشروط صحيحة
        window.location.href = "index.html"; // استبدل "nti.html" بالصفحة المطلوبة
    } else {
        alert("يرجى التحقق من البريد الإلكتروني اوكلمة المرور.");
    }
});