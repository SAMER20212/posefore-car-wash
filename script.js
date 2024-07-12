document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم إرسال الرسالة بنجاح!");
});

document.getElementById("language").addEventListener("change", function() {
    const language = this.value;
    alert("تم تغيير اللغة إلى " + language);
    // هنا يمكن إضافة الكود اللازم لتغيير محتوى الصفحة بناءً على اللغة المختارة
});
