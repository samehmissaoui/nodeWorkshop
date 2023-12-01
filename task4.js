const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
  });
  console.log('Generated Password:', password);
}

generateRandomPassword(); // Generate and log a password
