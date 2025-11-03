const wrapper = document.querySelector('.wrapper');
const signinLink = document.querySelector('.sign-in-link');
const signupLink = document.querySelector('.sign-up-link');

signupLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

signinLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});