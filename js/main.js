/* Validación de usuario */
function userValidation() {
  let userEmail = document.getElementById('inputEmail').value;
  let userPass = document.getElementById('inputPassword').value;
  for (let i = 0; i < userEmail.length; i++) {
    for (let j = 0; j < userPass.length; j++) {
      if (userEmail.length >= 5 && userEmail[i] === '@') {
        if (userPass.length <= 8 ) {
          console.log('very good');
          const btnLogin = document.getElementById('btn-login');
          btnLogin.addEventListener('click', () => {
            document.getElementById('loginPage').classList.add('disappear');
            document.getElementById('home').classList.remove('disappear');            
            document.getElementById('home').classList.add('show');
          });
        } else {
          console.log('very bad');
          return alert('Tu Email o Contraseña no son válidos, inténtalo de nuevo');
        };
      }
    };
  }
};