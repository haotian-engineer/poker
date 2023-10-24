const MainLayout = require("./layout/MainLayout");
const WelcomeMailContent = require("./mails/WelcomeMail");

const WelcomeMail = (username = "{{nickname}}") => ({
  id: 1,
  name: "001 | Registration Welcome",
  subject: "Welcome to Poker!",
  text: ((username) =>
    `Hi ${username}!\n\nWelcome to Poker and thank you for registering to our service!\n\nPlay now: https://www.testpoker.net \n\nEnjoy playing on our platform!\n\nThe Poker Team
    `)(username),
  html: ((username) =>
    `${MainLayout("Welcome to Poker", username, WelcomeMailContent())}`)(
    username
  ),
});

module.exports = {
  WelcomeMail,
};
