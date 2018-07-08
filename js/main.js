/* Validación de usuario */
function userValidation() {
  let userEmail = document.getElementById('inputEmail').value;
  localStorage.setItem('userEmail', userEmail);
  let userPass = document.getElementById('inputPassword').value;
  for (let i = 0; i < userEmail.length; i++) {
    for (let j = 0; j < userPass.length; j++) {
      if (userEmail.length >= 5 && userEmail[i] === '@') {
        if (userPass.length <= 8) {
          console.log('very good'); 
          const btnLogin = document.getElementById('btn-login');
          btnLogin.addEventListener('click', () => {
            document.getElementById('loginPage').classList.add('disappear');
            document.getElementById('home').classList.remove('disappear');
            document.getElementById('home').classList.add('show');
          });
        } else {
          console.log('very bad');
          return alert('Tu Email o Contraseña no son válidos. TIP: Tu contraseña no debe tener mas de 8 dígitos y debe contener sólo números');
        };
      }
    };
  }
};

/* Funciones de Navbar */
function goToCheckBalance() {
  document.getElementById('main-options').classList.add('disappear');
  document.getElementById('check-balance').classList.remove('disappear');
  document.getElementById('check-balance').classList.remove('show');
}

function exit() {
  document.getElementById('loginPage').classList.remove('disappear');
  document.getElementById('home').classList.remove('show');
  document.getElementById('home').classList.add('disappear');
}

/* Funciones de datos */
function checkBalance() {
  let cardNumber = document.getElementById('cardNumber').value;
  const apiLink = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${cardNumber}`;

  fetch(apiLink)
    .then(response => response.json())
    .then(data => {
      let balance = data.saldoTarjeta;
      const balanceContainer = document.getElementById('balanceContainer');
      balanceContainer.innerHTML =
        `<div class="card text-white text-center mx-auto" style="max-width: 20rem;">
      <div class="card-header bg-dark">SALDO TOTAL</div>
      <div class="card-body bg-warning">
        <h4 class="card-title">${balance}</h4>
      </div>
    </div>`;
    })
    .catch(error => {
      console.log(error);
      alert('Ha habido un error, inténtalo mas tarde')
    })
};