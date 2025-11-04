
// Sidebar functionality
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const closeSidebar = document.getElementById("closeSidebar");
const themeToggle = document.getElementById("themeToggle");
const usersMenu = document.getElementById("usersMenu");
const usersSubmenu = document.getElementById("usersSubmenu");
const productsMenu = document.getElementById("productsMenu");
const productsSubmenu = document.getElementById("productsSubmenu");
const overlay = document.getElementById("overlay");

function checkMobile() {
  return window.innerWidth <= 992;
}

// Toggle sidebar
hamburger.addEventListener("click", () => {
  if (checkMobile()) {
    // On mobile, show sidebar and overlay
    sidebar.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    // On desktop, toggle between expanded and collapsed
    sidebar.classList.toggle("collapsed");
  }
});

// Close sidebar on mobile
function closeMobileSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeSidebar.addEventListener("click", closeMobileSidebar);

// Close sidebar when clicking overlay
overlay.addEventListener("click", closeMobileSidebar);

// Toggle dark/light mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

usersMenu.addEventListener("click", () => {
  if (!sidebar.classList.contains("collapsed") || checkMobile()) {
    usersSubmenu.classList.toggle("open");
    const chevron = usersMenu.querySelector(".fa-chevron-down, .fa-chevron-up");
    if (chevron.classList.contains("fa-chevron-down")) {
      chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  }
});

productsMenu.addEventListener("click", () => {
  if (!sidebar.classList.contains("collapsed") || checkMobile()) {
    productsSubmenu.classList.toggle("open");
    const chevron = productsMenu.querySelector(
      ".fa-chevron-down, .fa-chevron-up"
    );
    if (chevron.classList.contains("fa-chevron-down")) {
      chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  } else {
    // On mobile, ensure sidebar is hidden by default
    sidebar.classList.remove("collapsed");
  }
});

// Initialize on page load
window.addEventListener("load", () => {
  if (checkMobile()) {
    sidebar.classList.remove("collapsed");
  }
});

// header right top popup menu script start here

const headerItems = document.querySelectorAll(".user-btn");
const popups = document.querySelectorAll(".popup");

// Add click event to each header item
headerItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();

    const popupId = this.getAttribute("data-popup") + "-popup";
    const targetPopup = document.getElementById(popupId);

    // Close all popups first
    popups.forEach((popup) => {
      popup.classList.remove("active");
    });

    // Show the clicked popup
    targetPopup.classList.add("active");
    overlay.classList.add("active");
  });
});

// Close popups when clicking outside
document.addEventListener("click", function () {
  popups.forEach((popup) => {
    popup.classList.remove("active");
  });
  overlay.classList.remove("active");
});

// Prevent popup from closing when clicking inside
// popups.forEach(popup => {
//     popup.addEventListener('click', function(e) {
//         e.stopPropagation();
//     });
// });

