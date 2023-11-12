
function generatePassword() {
    let length = document.getElementById("length").value;
    let includeUppercase = document.getElementById("includeUppercase");
    let includeLowercase = document.getElementById("includeLowercase");
    let includeNumbers = document.getElementById("includeNumbers");
    let includeSymbols = document.getElementById("includeSymbols");
    if (length > 0 && length < 20) {
        let charset = "";
        if (includeUppercase.checked) {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          }
          if (includeLowercase.checked) {
            charset += "abcdefghijklmnopqrstuvwxyz";
          }
          if (includeNumbers.checked) {
            charset += "0123456789";
          }
          if (includeSymbols.checked) {
            charset += "!@#$%^&*()_-+=<>?";
          }
          
          if (charset.length === 0) {
            alert("At least one character set must be selected.");
            return null;
          }
          
        console.log(charset)
          let password = "";
          for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
            document.getElementById("password").innerText = password;
          }
        
          return password;
    } else {
        alert("Please enter valid password length");
    }
  }

  function copyText() {
    navigator.clipboard.writeText(document.getElementById("password").innerText);
  }