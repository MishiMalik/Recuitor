const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});
// $("#email").keyup(function() {
//     var id = $(this).val();
//     if ((id).length > 10) {
//       $(".password-field").fadeIn("slow");
//       $(".password-field").css("display","flex");
//     }
//     else
//       {
//         $(".password-field").fadeOut("slow");
//       }
//   })