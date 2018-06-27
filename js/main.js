function userValidation() {
  let userPass = document.getElementById('inputPassword').value;
  const loginPage = document.getElementsByClassName('loginPage');
  for (let j = 0; j < userPass.length; j++) {
    if (userPass.length <= 8) {
      console.log('very good');
    } else {
      console.log('very bad');
    }
    loginPage.style.display = 'none';
  };
};