module.exports = ({
  type: "joinCommand",
  category: "Welcome",
  channel: "$getServerVar[welcomeChannel]",
  code: `
  $replaceText[$replaceText[$replaceText[$getServerVar[welcomeMsg];{user.ping};<@$authorID>;-1];{user.name};$username;-1];{user.tag};$usertag;-1]`
})