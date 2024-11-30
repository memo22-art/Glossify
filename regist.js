document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    // تحقق من نمط البريد الإلكتروني
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // تحقق من أن كلمة المرور تنتهي بـ 6 أرقام
    const passPattern = /\d{6}$/;

    if (emailPattern.test(email) && passPattern.test(pass)) {
        // حفظ البريد الإلكتروني وكلمة المرور في التخزين المحلي
        localStorage.setItem('email', email);
        localStorage.setItem('pass', pass);

        // إعادة التوجيه إلى صفحة أخرى إذا كانت الشروط صحيحة
        window.location.href = "index.html"; // استبدل "nti.html" بالصفحة المطلوبة
    } else {
        alert("Please check your email and password");
    }
});