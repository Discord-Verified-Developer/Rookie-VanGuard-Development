
// ==================================================
const Aoijs = require('aoi.js'); 
const Discord = require('discord.js'); // Scripting language
// ==================================================
const bot = new Aoijs.Bot({
token: "OTU2OTI4ODY1NTIyMDI4NTk2.Yj3XdA.2dBFrwlq625_hTpCkpLTNXw0_FQ",
prefix: [">"],
autoUpdate: false,
applicationCache: true,
fetchInvites: true,
connectedBots: true,
mobile: false, 
suppressAll: false,
});
// ==================================================
const disbut = require('discord-buttons')
disbut(bot.client)
// ==================================================
 const fetch = require('node-fetch'); // Node manager
// ==================================================
bot.onMessage({
  guildOnly: false,
  respondToBots: false// commands will work in dms. set "true" for commands to work in guilds only
});
bot.loadCommands('./Commands/');
console.log(`Discord.js & Aoi.js on Development Version loaded successfully. Bot is ONLINE`.blue)
// ==================================================

bot.loopCommand({
code: `
$if[$status[957401132756508672]==offline]
$editChannel[956950246259326978;$default;Bot: 🔴;$default;$default;$default;$default;no;Automatic Bot Check]
$elseif[$status[957401132756508672]!=offline]
$editChannel[956950246259326978;$default;Bot: 🟢;$default;$default;$default;$default;no;Automatic Bot Check]
$endelseif
$endif
`,
channel: "956950246624206954",
executeOnStartup: true,
every: 1000
})

bot.loopCommand({
code: `
$if[$status[957401132756508672]==offline]
$editChannel[956950246259326979;$default;Node: 🔴;$default;$default;$default;$default;no;Automatic Bot Check]
$elseif[$status[957401132756508672]!=offline]
$editChannel[956950246259326979;$default;Node: 🟢;$default;$default;$default;$default;no;Automatic Bot Check]
$endelseif
$endif
`,
channel: "956950246624206954",
executeOnStartup: true,
every: 1000
})

bot.loopCommand({
code: `
$if[$status[957401132756508672]==offline]
$editChannel[956950246259326980;$default;Database: 🔴;$default;$default;$default;$default;no;Automatic Bot Check]
$elseif[$status[957401132756508672]!=offline]
$editChannel[956950246259326980;$default;Database: 🟢;$default;$default;$default;$default;no;Automatic Bot Check]
$endelseif
$endif
`,
channel: "956950246624206954",
executeOnStartup: true,
every: 1000
})

bot.loopCommand({
code: `
$if[$status[957401132756508672]==offline]
$editChannel[956950246259326981;$default;API: 🟠;$default;$default;$default;$default;no;Automatic Bot Check]
$elseif[$status[957401132756508672]!=offline]
$editChannel[956950246259326981;$default;API: 🟢;$default;$default;$default;$default;no;Automatic Bot Check]
$endelseif
$endif
`,
channel: "956950246624206954",
executeOnStartup: true,
every: 1000
})

bot.status({
  text: "Development of Rookie VanGuard Bot [Coming Soon!]",
  type: "STREAMING",
  url: "https://www.youtube.com/watch?v=I6SksxyOFrk",
  time: 12
});