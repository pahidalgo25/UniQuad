const wrapper = document.querySelector('.wrapper');
const signinLink = document.querySelector('.signin-link');
const createaccountLink = document.querySelector('.createaccount-link');

createaccountLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

signinLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

const signinLinkNav = document.getElementById("signinLink");
const profileIcon = document.getElementById("profileIcon");

if (localStorage.getItem("loggedIn") === "true") {
    showProfileIcon();
}

function showProfileIcon() {
    signinLinkNav.style.display = "none";
    profileIcon.style.display = "inline";
}