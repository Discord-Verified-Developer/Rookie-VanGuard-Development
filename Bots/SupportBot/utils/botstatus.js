module.exports = (bot) => {
bot.status({
  text: " \on $servercount Servers | Watching $allmemberscount Discord Users!",
  type: "STREAMING",
  url: "https://www.youtube.com/watch?v=I6SksxyOFrk",
  time: 12
});
}
module.exports.id = "Bot Status"