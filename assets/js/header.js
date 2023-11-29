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

// Function to store user information in local storage during signup
function signup() {
  var usernameInput = document.getElementById("username-signup").value;
  var passwordInput = document.getElementById("password-signup").value;
  var emailInput = document.getElementById("email-signup").value;

  // Retrieve the existing users from local storage or create an empty array
  var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the username is already taken
  if (existingUsers.some((user) => user.username === usernameInput)) {
    alert("Tên người dùng đã tồn tại. Vui lòng chọn tên khác.");
    return;
  }

  // Create an object to store user information
  var user = {
    username: usernameInput,
    password: passwordInput,
    email: emailInput,
  };

  // Add the new user to the array
  existingUsers.push(user);

  // Convert the array of users to a JSON string and store it in local storage
  localStorage.setItem("users", JSON.stringify(existingUsers));

  document.getElementById("username-signup").value = "";
  document.getElementById("password-signup").value = "";
  document.getElementById("email-signup").value = "";

  alert("Chúc mừng bạn đã đăng ký thành công");
}
function signin() {
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("password").value;
  var usernameShow = document.getElementById("username_show");
  var userIcon = document.querySelector("#user i");

  // Retrieve user information from local storage
  var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the entered username and password match any user in the array
  var foundUser = existingUsers.find(
    (user) => user.username === usernameInput && user.password === passwordInput
  );

  // Check if user information exists in local storage
  if (foundUser) {
    // Store login information in local storage
    localStorage.setItem("login", JSON.stringify(foundUser));

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
    // Handle the case where no user information is found in local storage
    alert("Không tìm thấy thông tin người dùng. Vui lòng đăng ký trước.");
  }

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// Function to handle logout
function logout() {
  var usernameShow = document.getElementById("username_show");
  var userIcon = document.querySelector("#user i");
  var userPopup = document.getElementById("userPopup");

  // Remove login information from local storage
  localStorage.removeItem("login");

  // Ẩn icon user
  userIcon.style.display = "contents";
  usernameShow.style.display = "none";
  userPopup.style.display = "none";
}

// Function to set up the user display on page load
function setupUserDisplay() {
  var usernameShow = document.getElementById("username_show");
  var userIcon = document.querySelector("#user i");

  // Retrieve login information from local storage
  var storedLogin = localStorage.getItem("login");

  // Check if login information exists in local storage
  if (storedLogin) {
    // Parse the JSON string to get the login object
    var login = JSON.parse(storedLogin);

    // Thay đổi nội dung và hiển thị tên người dùng
    if (login.username.length > 7) {
      usernameShow.innerText = login.username.slice(0, 6) + "...";
    } else {
      usernameShow.innerText = login.username;
    }

    // Ẩn icon user
    userIcon.style.display = "none";
    usernameShow.style.display = "block";
  }
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

// Call the setupUserDisplay function on page load
setupUserDisplay();
