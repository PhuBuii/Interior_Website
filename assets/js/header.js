function changeSignUp() {
  const container = document.getElementById("login-container");
  container.classList.remove("right-panel-active");
}

function changeSignIn() {
  const container = document.getElementById("login-container");
  container.classList.add("right-panel-active");
}

function showPopup() {
  var login_popup = document.getElementById("loginPopup");
  login_popup.style.display = "block";
}

function signin() {
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("password").value;
  var usernameShow = document.getElementById("username_show");
  var userIcon = document.querySelector("#user i");

  // Thực hiện kiểm tra username và password ở đây
  // Nếu đúng, thực hiện các thay đổi sau
  if (passwordInput == "123") {
    // Thay đổi nội dung và hiển thị tên người dùng
    if (usernameInput.length > 7) {
      usernameShow.innerText = usernameInput.slice(0, 6) + "...";
    } else {
      usernameShow.innerText = usernameInput;
    }

    // Ẩn icon user
    userIcon.style.display = "none";
    usernameShow.style.display = "block";

    // Đóng popup sau khi đăng nhập
    var login_popup = document.getElementById("loginPopup");
    login_popup.style.display = "none";
  } else {
    // Xử lý khi đăng nhập không thành công (có thể thêm thông báo lỗi)
    alert(
      "Đăng nhập không thành công. Vui lòng kiểm tra lại tên người dùng và mật khẩu."
    );
  }
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function signup() {
  alert("Chúc mừng bạn đã đăng ký thành công");
}
function sendEmail() {
  alert("Chúng tôi đã gửi mã đổi password đến địa chỉ mail của bạn!");
}

function closeLoginPopUp(event) {
  var loginContainer = document.getElementById("login-container");
  var forgotContainer = document.getElementById("forgot-container");
  var loginPopup = document.getElementById("loginPopup");

  // Kiểm tra nếu phần tử được nhấp không thuộc về login-container
  if (
    !loginContainer.contains(event.target) &&
    !forgotContainer.contains(event.target) &&
    !event.target.classList.contains("ghost")
  ) {
    // Đóng popup
    loginPopup.style.display = "none";
  }
}

function flip() {
  document.querySelector("#flipper").classList.toggle("flip");
}

//add to cart
function addItem(event) {
  alert("Bạn đã nhấn nút");
  if (event) {
    event.preventDefault();
  }
}
function showUserPopup() {
  var user_popup = document.getElementById("userPopup");
  user_popup.style.display = "block";
}
function logout() {
  var usernameShow = document.getElementById("username_show");
  var userIcon = document.querySelector("#user i");
  var userPopup = document.getElementById("userPopup");
  // Ẩn icon user
  userIcon.style.display = "contents";
  usernameShow.style.display = "none";
  userPopup.style.display = "none";
}
function closeUserPopUp(event) {
  var userContainer = document.getElementById("user-popup-container");
  var userPopup = document.getElementById("userPopup");
  if (
    !userContainer.contains(event.target) &&
    !event.target.classList.contains("ghost")
  ) {
    // Đóng popup
    userPopup.style.display = "none";
  }
}
