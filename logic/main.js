// DOM Elements
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const darkModeToggle = document.getElementById("darkModeToggle");
const searchToggle = document.getElementById("search-toggle");
const headerCenter = document.querySelector(".header-center");
const userProfile = document.getElementById("userProfile");
const userPopup = document.getElementById("userPopup");
const usersMenu = document.getElementById("usersMenu");
const usersSubmenu = document.getElementById("usersSubmenu");
const productsMenu = document.getElementById("productsMenu");
const productsSubmenu = document.getElementById("productsSubmenu");

// Check if mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Toggle sidebar
hamburger.addEventListener("click", () => {
  if (isMobile()) {
    sidebar.classList.toggle("mobile-open");
    overlay.classList.toggle("active");
    document.body.style.overflow = sidebar.classList.contains("mobile-open")
      ? "hidden"
      : "auto";
  } else {
    sidebar.classList.toggle("hidden");
  }
});

// Close sidebar on overlay click (mobile)
overlay.addEventListener("click", () => {
  sidebar.classList.remove("mobile-open");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Mobile search toggle
searchToggle.addEventListener("click", () => {
  if (isMobile()) {
    headerCenter.style.display =
      headerCenter.style.display === "block" ? "none" : "block";
  }
});

// User profile popup toggle
userProfile.addEventListener("click", (e) => {
  e.stopPropagation();
  userPopup.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Close popup when clicking outside
document.addEventListener("click", () => {
  userPopup.classList.remove("active");
  overlay.classList.remove("active");
});

// Prevent popup from closing when clicking inside
userPopup.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Sidebar submenu toggle
usersMenu.addEventListener("click", () => {
  if (!sidebar.classList.contains("hidden") || isMobile()) {
    usersSubmenu.classList.toggle("open");
    const chevron = usersMenu.querySelector(".chevron");
    chevron.style.transform = usersSubmenu.classList.contains("open")
      ? "rotate(180deg)"
      : "rotate(0deg)";
  }
});

productsMenu.addEventListener("click", () => {
  if (!sidebar.classList.contains("hidden") || isMobile()) {
    productsSubmenu.classList.toggle("open");
    const chevron = productsMenu.querySelector(".chevron");
    chevron.style.transform = productsSubmenu.classList.contains("open")
      ? "rotate(180deg)"
      : "rotate(0deg)";
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (!isMobile()) {
    sidebar.classList.remove("mobile-open");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
    headerCenter.style.display = "";
  } else {
    headerCenter.style.display = "none";
  }
});

// Initialize on load
window.addEventListener("load", () => {
  if (isMobile()) {
    headerCenter.style.display = "none";
  }
});

// profile page 
const profileInput = document.getElementById("profilePicInput");
const profilePreview = document.getElementById("profilePreview");
const uploadPlaceholder = document.getElementById("uploadPlaceholder");
const registrationForm = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordStrength = document.getElementById("passwordStrength");

// Profile Preview
uploadPlaceholder.addEventListener("click", () => profileInput.click());
profileInput.addEventListener("change", () => {
  const file = profileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePreview.src = reader.result;
      profilePreview.style.display = "block";
      uploadPlaceholder.style.display = "none";
    };
    reader.readAsDataURL(file);
  }
});

// Password Strength
passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  passwordStrength.className = "password-strength";
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(val)) passwordStrength.classList.add("strong");
  else if (val.length >= 6) passwordStrength.classList.add("medium");
  else if (val.length > 0) passwordStrength.classList.add("weak");
});

// Form Validation
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = {
    firstName: /^[A-Za-z]+$/,
    lastName: /^[A-Za-z]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?\d{7,15}$/,
    city: /^[A-Za-z\s]+$/,
  };

  let valid = true;
  Object.keys(fields).forEach((id) => {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");
    if (!fields[id].test(input.value.trim())) {
      input.classList.add("error");
      error.classList.add("show");
      valid = false;
    } else {
      input.classList.remove("error");
      error.classList.remove("show");
    }
  });

  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
    document.getElementById("passwordError").classList.add("show");
    valid = false;
  } else document.getElementById("passwordError").classList.remove("show");

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").classList.add("show");
    valid = false;
  } else document.getElementById("confirmPasswordError").classList.remove("show");

  if (!valid) return;

  document.getElementById("previewName").textContent =
  document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
  document.getElementById("previewEmail").textContent = document.getElementById("email").value;
  document.getElementById("previewPhone").textContent = document.getElementById("phone").value;
  document.getElementById("previewLocation").textContent =
  document.getElementById("city").value + ", " + document.getElementById("country").value;

  successMessage.classList.add("show");
  setTimeout(() => successMessage.classList.remove("show"), 3000);

  registrationForm.reset();
  passwordStrength.className = "password-strength";
  profilePreview.style.display = "none";
  uploadPlaceholder.style.display = "flex";
});

// Reset Button
document.getElementById("resetBtn").addEventListener("click", () => {
  registrationForm.reset();
  document.querySelectorAll(".error-message").forEach((e) => e.classList.remove("show"));
  document.querySelectorAll(".form-input").forEach((i) => i.classList.remove("error"));
  passwordStrength.className = "password-strength";
  profilePreview.style.display = "none";
  uploadPlaceholder.style.display = "flex";
});
 
