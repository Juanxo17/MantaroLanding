const fs = require('fs');

const heroPath = './src/components/Hero.jsx';
if (fs.existsSync(heroPath)) {
  let heroContent = fs.readFileSync(heroPath, 'utf8');
  heroContent = heroContent.replace(/ðŸ‘‹/g, '👋');
  fs.writeFileSync(heroPath, heroContent, 'utf8');
  console.log('Hero.jsx fixed.');
}

const chatbotPath = './src/components/Chatbot.jsx';
if (fs.existsSync(chatbotPath)) {
  let chatbotContent = fs.readFileSync(chatbotPath, 'utf8');
  chatbotContent = chatbotContent.replace(/ðŸ‘‡/g, '👇');
  // Also clean up any messed up i accents the user mentioned just in case "aquí­" internally has a garbage character
  chatbotContent = chatbotContent.replace(/aquí\xAD/g, 'aquí').replace(/enví\xADame/g, 'envíame');
  fs.writeFileSync(chatbotPath, chatbotContent, 'utf8');
  console.log('Chatbot.jsx fixed.');
}
