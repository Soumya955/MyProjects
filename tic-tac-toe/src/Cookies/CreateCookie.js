export function createRandomCookie() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cookieValue = '';
  
    


    // Generate a random string of 16 characters
    for (let i = 0; i < 16; i++) {
      cookieValue += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    } 
    return `cookie_${Date.now()}_${cookieValue}`;
  }