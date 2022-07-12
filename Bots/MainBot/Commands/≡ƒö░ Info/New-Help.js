module.exports = ({
 name : 'help',
 category: "Info",
 code : `
$author[Disclaimer: This bot is currently under development, some commands and features may not be fully functional.]
$title[Command List!]
$color[BLUE]
$description[

$addfield[$replacetext[💪;:;#COLON#] **Utility Commands#COLON# $get[2]** $replacetext[💪;:;#COLON#];\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Utility").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`]

$addfield[$replacetext[🚫;:;#COLON#] **Moderation Commands#COLON# $get[3]** $replacetext[🚫;:;#COLON#];\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Mod").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`]

$addField[$replacetext[⚜️;:;#COLON#] **Welcome Commands#COLON# $get[4]** $replacetext[⚜️;:;#COLON#];\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Welcome").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`]

$addfield[
$replacetext[🏫;:;#COLON#] **School Commands#COLON# $get[5]** $replacetext[🏫;:;#COLON#];\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "School").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`]

$addfield[
$replacetext[⚙️;:;#COLON#] **Settings Commands#COLON# $get[6]** $replacetext[⚙️;:;#COLON#];\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Settings").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`]

$addfield[
$replacetext[📈;:;#COLON#] **Ranking Commands#COLON# $get[7]** $replacetext[📈;:;#COLON#];\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Ranking").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`]

$addfield[
$replacetext[😳;:;#COLON#] **Images Commands#COLON# $get[8]** $replacetext[😳;:;#COLON#];\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Images").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`]

$addfield[
$replacetext[🎶;:;#COLON#] **Music Commands#COLON# $get[9]** $replacetext[🎶;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Music").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`

$replacetext[🕹️;:;#COLON#] **Fun Commands#COLON# $get[10]** $replacetext[🕹️;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Fun").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`

$replacetext[🎮;:;#COLON#] **MiniGames Commands#COLON# $get[11]** $replacetext[🎮;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "MiniGames").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`

$replacetext[💸;:;#COLON#] **Economy Commands#COLON# $get[12]** $replacetext[💸;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Economy").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`

$replacetext[⌨️;:;#COLON#] **Levelling Commands#COLON# $get[13]** $replacetext[⌨️;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Levelling").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`

$replacetext[💬;:;#COLON#] **Misc Commands#COLON# $get[14]** $replacetext[💬;:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Misc").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\

$replacetext[🤪;:;#COLON#] **Interaction Commands#COLON# $get[15]** $replacetext[🤪;:;#COLON#];\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Interactions").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`]]

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
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Settings").map(x=>\`\`x.name\`\`).join(", ");yes]; ]

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
