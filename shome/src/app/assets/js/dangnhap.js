$(document).ready(function () {
    // Chuyển đổi giữa Đăng nhập & Đăng ký
    $(".toggle-link").click(function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        $("#login-form").fadeToggle();
        $("#register-form").fadeToggle();
    });
});