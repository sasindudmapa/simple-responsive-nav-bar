let mobileNavBar = document.getElementById("nav-right-items");
let mobileNavBarActivateBtn = document.getElementById("nav-mobile-icon");
let mobileNavBarActive = false;

mobileNavBarActivateBtn.addEventListener("click", () => {
  if (mobileNavBarActive) {
    mobileNavBarActive = false;
    mobileNavBarActivateBtn.src = "Icon.png";
  } else {
    mobileNavBarActive = true;
    mobileNavBarActivateBtn.src = "close.png";
  }

  mobileNavBar.classList.toggle("mobile-nav-active");
});
