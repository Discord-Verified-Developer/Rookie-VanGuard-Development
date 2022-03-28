module.exports = ({
 name: "hnlp",
 code: `
 $djseval[
const simplydjs = require("simply-djs");

let embed1 = new Discord.MessageEmbed().setTitle("Page 1");

let embed2 = new Discord.MessageEmbed().setTitle("Page 2");

let pages = [embed1, embed2]; 

simplydjs.embedPages(client, message, pages, {
  firstEmoji: "⏮",
  backEmoji: "⬅️",
  delEmoji: "🛑",
  forwardEmoji: "➡️",
  lastEmoji: "⏭",

  btncolor: "PRIMARY",
  delcolor: "DANGER",
  skipcolor: "SUCCESS",

  skipBtn: true,
  delBtn: true
});


 ] `
 })
