module.exports = ({
 name : 'help',
 category: "Info",
 code : `
$djseval[
const { MessageEmbed } = require('discord.js');    
const { Menu, Button } = require('discord-menu-buttons');

const next = new Button()
            .setLabel("Next ➡️")
            .setID("next")
            .setStyle("blurple");
const stop = new Button()
             .setLabel('🛑')
             .setID('stop')
             .setStyle('red');
const previous = new Button()
                .setLabel("⬅️ Previous")
                .setID("previous")
                .setStyle("blurple");


  
const buttons = [ previous, stop, next ];
const pages = [
 { name: '1', content: new MessageEmbed().setDescription('Hey there, <@$authorID>. Help has arrived, all of my features will be listed within this embeded menu, for more information about the bot, you can visit our website HERE (Coming soon)! We hope you enjoy our bot. **Important Notice:** Due to the massive amount of economy commands, they will NOT be displayed within this help menu. Use command \`$getservervar[prefix]economy\` for more information on economy commands.').setColor('GREEN').setTitle('The Call for HELP was heard! Rookie VanGuard to the rescue!'), buttons: buttons },
 { name: '2', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[💪;:;#COLON#] **Utility Commands#COLON# $get[2]** $replacetext[💪;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Utility").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '3', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[🚫;:;#COLON#] **Moderation Commands#COLON# $get[3]** $replacetext[🚫;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Mod").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '4', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[⚜️;:;#COLON#] **Welcome Commands#COLON# $get[4]** $replacetext[⚜️;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Welcome").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '5', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[🏫;:;#COLON#] **School Commands#COLON# $get[5]** $replacetext[🏫;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "School").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '6', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[⚙️;:;#COLON#] **Settings Commands#COLON# $get[6]** $replacetext[⚙️;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Settings").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '7', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[📈;:;#COLON#] **Ranking Commands#COLON# $get[7]** $replacetext[📈;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Ranking").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '8', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[😳;:;#COLON#] **Images Commands#COLON# $get[8]** $replacetext[😳;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Images").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '9', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[🎶;:;#COLON#] **Music Commands#COLON# $get[9]** $replacetext[🎶;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Music").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '10', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[🕹️;:;#COLON#] **Fun Commands#COLON# $get[10]** $replacetext[🕹️;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Fun").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '11', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[🎮;:;#COLON#] **MiniGames Commands#COLON# $get[11]** $replacetext[🎮;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "MiniGames").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '12', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[💸;:;#COLON#] **Economy Commands#COLON# $get[12]** $replacetext[💸;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Economy").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '13', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[⌨️;:;#COLON#] **Levelling Commands#COLON# $get[13]** $replacetext[⌨️;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Levelling").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '14', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[💬;:;#COLON#] **Misc Commands#COLON# $get[14]** $replacetext[💬;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Misc").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },
 { name: '15', content: new MessageEmbed().setColor('BLUE').addField('Commands List', '$replacetext[🤪;:;#COLON#] **Interaction Commands#COLON# $get[15]** $replacetext[🤪;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Interactions").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`', true).setTitle('Rookie VanGuard Help Command').setTimestamp().setFooter({ text: '© 2022 Rookie VanGuard Development Project, All Rights Reserved', iconURL: 'https://i.imgur.com/AfFp7pu.png' }), buttons: buttons },

]
const menu = new Menu(message.channel, message.author.id, pages, null, false);
menu.start();

$let[1;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Info").map(x=>x.name).join(", ");yes]; ]

$let[2;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Utility").map(x=>x.name).join(", ");yes]; ]

$let[3;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Mod").map(x=>x.name).join(", ");yes]; ]

$let[4;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Welcome").map(x=>x.name).join(", ");yes]; ]

$let[5;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "School").map(x=>x.name).join(", ");yes]; ]

$let[6;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Settings").map(x=>x.name).join(", ");yes]; ]

$let[7;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Ranking").map(x=>x.name).join(", ");yes]; ]

$let[8;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Images").map(x=>x.name).join(", ");yes]; ]

$let[9;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Music").map(x=>x.name).join(", ");yes]; ]

$let[10;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Fun").map(x=>x.name).join(", ");yes]; ]

$let[11;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "MiniGames").map(x=>x.name).join(", ");yes]; ]

$let[12;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Economy").map(x=>x.name).join(", ");yes]; ]

$let[13;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Levelling").map(x=>x.name).join(", ");yes]; ]

$let[14;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Misc").map(x=>x.name).join(", ");yes]; ]

$let[15;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Interactions").map(x=>x.name).join(", ");yes]; ]
`

})
