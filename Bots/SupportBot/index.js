require("module-alias/register"); // Module for organization
// ==================================================
const Aoijs = require('aoi.js'); 
const Discord = require('discord.js'); // Scripting language
// ==================================================
const bot = new Aoijs.Bot({
token: "OTU3MTEyNzU2Njc3NTE3MzIy.Yj6Ctw.7caTMrHp9xBQ26Gk8L-ROZnYnQk",
prefix: ["~"],
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
// ==================================================
bot.onMessage({
  guildOnly: true,
  respondToBots: false// commands will work in dms. set "true" for commands to work in guilds only
});
// ==================================================
bot.loadCommands('./Commands/');
bot.variables(require('./Config/variables.js'))
bot.status(require('./Config/status.js'))
// ==================================================
 bot.onInteractionCreate()

bot.command({
name: "$alwaysExecute",
code: `
$if[$stringStartsWith[$message[1];$getServervar[prefix]]==true]

$setGlobalUserVar[birb_thirst;$sub[$getGlobalUserVar[birb_thirst];2]]

$setGlobalUserVar[birb_sleep;$sub[$getGlobalUserVar[birb_sleep];2]]

$setGlobalUserVar[birb_love;$sub[$getGlobalUserVar[birb_love];2]]

$setGlobalUserVar[birb_hungry;$sub[$getGlobalUserVar[birb_hungry];2]]

$onlyIf[$getGlobalUserVar[birb]>=1;]
$onlyIf[$getGlobalUserVar[birb_thirst]>0;]
$onlyIf[$getGlobalUserVar[birb_sleep]>0;]
$onlyIf[$getGlobalUserVar[birb_love]>0;]
$onlyIf[$getGlobalUserVar[birb_hungry]>0;]
$endif
$globalCooldown[5s;]
`
})

bot.command({
name: "$alwaysExecute",
code: `
$if[$randomText[1;1;1;1;1;1;1;1;1;1;1;4]==4]
$awaitMessages[everyone;60s;Sheeesh;birb3;Command Timed out]
**Oh someones <:birdy:913155711339495474> is making it rain $getServerVar[simbol] type in the following sentence to claim**
\`sheeesh\`
$onlyIf[$getGlobalUserVar[birb]>=1;]
$else
$if[$randomText[1;1;1;1;1;1;1;1;1;1;1;4]==1]
$setVar[pfp;aaaaaaa]
$endif
$endif
`
})


bot.awaitedCommand({
name: "birb3",
code: `
**$username claimed it first birb dropped**

<:waterrr:913155906408177755> $random[1;10]x
<:birdyname:913156358025662464> $randomText[ImLegendaryBirb;BerkTheSword;NeverLandish;ColdHearted;CallMeBirb;@#$;ThisIs$;CallOfBirb$;RareLife$%%] 
$getServerVar[simbol] $random[10;1000]x

$setGlobalUserVar[birb_water;$sum[$getGlobalUserVar[birb_water];$random[1;10]]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;1000]]]

$setGlobalUserVar[birb_name;$randomText[ImLegendaryBirb;BerkTheSword;NeverLandish;ColdHearted;CallMeBirb;@#$;ThisIs$;CallOfBirb$;RareLife$%%]]` })


bot.awaitedCommand({
name: "birb2",
code: `
**$username claimed it first birb dropped**

<:waterrr:913155906408177755> $random[1;10]x

$getServerVar[simbol] $random[10;1000]x

$setGlobalUserVar[birb_water;$sum[$getGlobalUserVar[birb_water];$random[1;10]]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;1000]]]

` })


bot.awaitedCommand({
name: "birb1",
code: `
**$username claimed it first birb dropped**

<:waterrr:913155906408177755> $random[1;10]x

$getServerVar[simbol] $random[10;1000]x

$setGlobalUserVar[birb_water;$sum[$getGlobalUserVar[birb_water];$random[1;10]]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10;1000]]]`

})



bot.command({
name: "scavenge",
code: `
$if[$random[1;3]==1]
$awaitMessages[$authorid;45s;store,basement,bus;place1,place2,place3;command timed out]

**$username please select somewhere to search**
\`store\` \`basement\` \`bus\`
$else
$if[$random[1;3]==2]

$awaitMessages[$authorid;45s;water,tree,car;place11,place22,place33;command timed out]

**$username please select somewhere to search**
\`water\` \`tree\` \`car\`
$else
$if[$random[1;3]==3]

$awaitMessages[$authorid;45s;nuts,street,dms;place11,place22,place33;command timed out]

**$username please select somewhere to search**
\`nuts\` \`street\` \`dms\`
$endif
$endif
$endif
`})

bot.awaitedCommand({
name: "place1",
code: ` **You went searching in the grocery store and found** \`$random[10;250]\`$getServerVar[simbol]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]`})

bot.awaitedCommand({
name: "place2",
code: `**You went searching in your basement and found** \`$random[10;250]\`$getServerVar[simbol]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]`})

bot.awaitedCommand({
name: "place3",
code: ` **You went searching in your bus and found** \`$random[10;250]\`$getServerVar[simbol]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]`})







bot.awaitedCommand({
name: "place11",
code: ` **You went searching in some water and found** \`$random[10;250]\`$getServerVar[simbol]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]`})

bot.awaitedCommand({
name: "place22",
code: `**You went searching in your big tree found** \`$random[10;250]\`$getServerVar[simbol]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]`})

bot.awaitedCommand({
name: "place33",
code: ` **You went searching in someones car found** \`$random[10;250]\`$getServerVar[simbol]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]`})










bot.awaitedCommand({
name: "place111",
code: ` **You went searching in someones nuts wtf and found** \`$random[10;250]\`$getServerVar[simbol]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]`})

bot.awaitedCommand({
name: "place222",
code: `**You went searching at the streets and found** \`$random[10;250]\`$getServerVar[simbol]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]`})

bot.awaitedCommand({
name: "place333",
code: ` **You went searching in your Dms with $userTag[$randomUserId] found** \`$random[10;250]\`$getServerVar[simbol]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]`})










bot.botJoinCommand({
channel: "$randomChannelID",
code: `$author[$username[$clientid];$userAvatar[$clientid]]
$thumbnail[$replaceText[$servericon;null;$userAvatar]]
$color[BLUE]
$description[**$username[$clientid]** 
$username[$clientid] is a discord economy discord bot
$username[$clientid] offers 
<:badge3:903014250493116428> Badge system

<:banknote:901866414158250055> Promocodes :eyes:

<:looott:901640510458974238> Lottery system 

<:kick:904339194044874782> Music

<:levels:904340614030716988> Economy

my prefix is \`$\` i was created by \`$userTag[$botownerid]\` if u found an error run the command $bugreport to report a serious bug
]`})


bot.command({
name: "firstmessage",
aliases: ["fm"],
code: `
$author[$userTag[$getMessage[$get[ch];$get[msgID];userID]];$userAvatar[$getMessage[$get[ch];$get[msgID];userID]]]
$description[
$getMessage[$get[ch];$get[msgID];content]
[Jump To The First Message]($get[link])]
$addtimestamp[$get[timestamp]]
$let[timestamp;$djsEval[d.client.channels.cache.get('$get[ch]').messages.cache.get('$get[msgID]').createdTimestamp;yes]
$color[RANDOM]
$footer[In $channelName[$get[ch]]]
$let[link;https://discord.com/channels/$guildID/$get[ch]/$get[msgID]]
$let[msgID;$firstMessageID[$get[ch]]]
$let[ch;$findChannel[$message[1]];yes]]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
});


bot.command({
 name: "lb",
 aliases: ['leaderboard','lboard','leaderb'],
 code:`
 $if[$message==cash]
 $description[$globalUserLeaderboard[cash;asc;{top} - {username} - {value} $getServerVar[simbol]]]
 $title[This is the wallet lb]
 $color[RANDOM]
 $else
 $if[$message==wallet]
 $description[$globalUserLeaderboard[cash;asc;{top} - {username} - {value} $getServerVar[simbol]]]
 $title[This is the wallet lb]
 $color[RANDOM]
 $else
 $if[$message==money]
 $description[$globalUserLeaderboard[cash;asc;{top} - {username} - {value} $getServerVar[simbol]]]
 $title[This is the wallet lb]
 $color[RANDOM]
 $else
 $if[$message==evil]
 $description[$globalUserLeaderboard[evil;asc;{top} - {username} - {value} $getServerVar[ssimbol]]]
 $title[This is the souls lb]
 $color[RANDOM]
 $else
 **Uhm invalid argument you can only choose from**: \`cash\`,\`wallet\`,\`money\`,\`evil
 \`
 $endif
 $endif
 $endif
 $endif`
})

  
bot.command({
  name: "stats",
  cooldown: "3s",
  code: `$color[$getVar[color]]
$addField[Size Database;> $cropText[$fileSize[$getVar[database];kb];5]KB;yes]
$addField[Size Server;> $cropText[$numberSeparator[$multi[$get[sizeserver];8];.];5]KB;yes]
$addField[Size Code;> $cropText[$fileSize[$getVar[file];kb];5]KB;yes]
$addField[Command;> $numberSeparator[$commandsCount];yes]
$addField[Server;> $numberSeparator[$serverCount];yes]
$addField[Members;> $numberSeparator[$allMembersCount];yes]
$addField[RAM Left;> $cropText[$divide[$sub[$maxRam;$ram];1024];4]GB;yes]
$addField[RAM;> $cropText[$divide[$ram;1024];4]GB;yes]
$addField[CPU;> $cropText[$cpu;4]%;yes]
$addField[Is Deafen/Mute;> $replaceText[$isDeafened[$clientID];null;false]-$isSelfDeafened[$clientID] / $replaceText[$isMuted[$clientID];null;false]-$isSelfMuted[$clientID];yes]
$addField[Is Playing;> $checkCondition[$queueLength!=0];yes]
$addField[Is Connect;> $checkCondition[$voiceID[$clientID]!=];yes]
$addField[API Ping;> $numberSeparator[$botPing]ms;yes]
$addField[DB Ping;> $numberSeparator[$dbPing]ms;yes]
$addField[WS Ping;> $numberSeparator[$ping]ms;yes]
$addField[Platform;> $djsEval[require ('os').platform();yes];yes]
$addField[Last Online;> <t:$cropText[$getVar[last];10]:R>;yes]
$addField[Uptime;> $client[readytimestamp];yes]
$footer[Ver. $packageVersion ($nodeVersion);$userAvatar[$authorID;512]]
$thumbnail[$userAvatar[$clientID]]
$addTimestamp
$let[sizeserver;$charCount[$serverNames[]]]
$cacheMembers
$setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
$cooldown[$commandInfo[stats;cooldown];Please wait **%time%** before using again.]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
});

bot.command({
  name: "ping",
  cooldown: "3s",
  code: `$title[$userTag[$client ID;https://lllll.com]
$color[CYAN]
$addTimeStamp
$description[
\`\`\`
Websocket Ping   : $numberSeparator[$ping]ms
API       Ping   : $numberSeparator[$botPing]ms
Database  Ping   : $numberSeparator[$dbPing]ms
Message   Ping   : $executionTimems
Shard     Ping   : $numberSeparator[$sub[$dateStamp;$get[stamp]]]ms $wait[$dbping] $let[stamp;$dateStamp]
Average   Ping   : $numberSeparator[$truncate[$divide[$sum[$ping;$botPing;$dbPing];3]]]ms
\`\`\`\] 
$setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
$cooldown[$commandInfo[ping;cooldown];Please wait **%time%** before using again.]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
});

bot.command({
 name: "$alwaysExecute",
 code: `
$channelSendMessage[$getGlobalUserVar[channel;$getGlobalUserVar[user]];<:ann:903452719895969823> **$userTag[$authorid]**: $message]

$onlyIf[$getGlobalUserVar[chat]==true;]
category
`
 })

bot.command({
 name: "joincall",
 code: `
$if[$getVar[match]==]
$sendMessage[Join matchmaking please wait till someone else connects...;no]
$setVar[match;$authorID]
$setGlobalUserVar[channel;$channelID]
$else
$sendMessage[Match!;no]
$sendMessage[Join matchmaking please wait till someone else connects...;no]
$setVar[match;]
$channelSendMessage[$getGlobalUserVar[channel;$getVar[match]];Match!]
$setGlobalUserVar[chat;true;$getVar[match]]
$setGlobalUserVar[chat;true]
$setGlobalUserVar[user;$authorID;$getVar[match]]
$setGlobalUserVar[user;$getVar[match]]
$setGlobalUserVar[channel;$channelID]
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`})

bot.command({
 name: "leavecall",
 code: `
$setGlobalUserVar[user;] 
$setGlobalUserVar[chat;false;$getGlobalUserVar[user]]
$setGlobalUserVar[chat;false]
$setGlobalUserVar[user;;$getGlobalUserVar[user]]
$setGlobalUserVar[channel;$getGlobalUserVar[user]]
$setGlobalUserVar[channel;]
$sendMessage[Call Ended!;no]
$channelSendMessage[$getGlobalUserVar[channel;$getGlobalUserVar[user]];Call Ended!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`})

bot.command({
  name: "uptime",
  cooldown: "3s",
  code: `\`\`\`
ive been on for $uptime
\`\`\`
$setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
$cooldown[$commandInfo[uptime;cooldown];Please wait **%time%** before using again.]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
});

bot.command({
name:"bgstart",
code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (ENDED) 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Winner:** <@$get[winner]>\n**Ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[Congratulations <@$get[winner]>! You won **$get[prize]**;no]
$onlyif[$getmessagevar[ended]==false;]
$onlyif[$get[winner]!=;No winner decided due to lack of participation]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$wait[$get[time]]
$setmessagevar[endstamp;$get[endstamp];$get[e]]
$setmessagevar[hoster;$authorid;$get[e]]
$setmessagevar[prize;$get[prize];$get[e]]
$let[e;$apimessage[$channelid;;{author:🎉 GIVEAWAY 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Nº Winners:** 1\n**Ends** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**No one** has joined this giveaway}{footer:Ends at:}{timestamp:$get[endstamp]}{color:BLUE};{actionRow:🎊 Join 🎊,2,3,join:🔁 Reroll 🔁,2,1,reroll:🔚 End 🔚,2,4,end};;yes]]
$let[endstamp;$sum[$datestamp;$ms[$get[time]]]]
$let[prize;$messageslice[1]]
$onlyif[$ms[$get[time]]!=undefined;Invalid time provided]
$let[time;$message[1]]
$onlyif[$message[2]!=;Enter a time and a prize]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]`
})
bot.interactionCommand({
name:"join",
prototype:"button",
code:` $editmessage[$get[msg];{author:🎉 GIVEAWAY 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$get[host]>\n**Nº Winners:** 1\n**Ends** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users have participated in this giveaway.}{footer:Ends at:}{timestamp:$get[endstamp]}{color:BLUE}]
$setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
$setmessagevar[joined;$get[participated];$get[msg]]
$onlyif[$get[condition]==false;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;Joined the giveaway];true;You have already joined the giveaway];ended;The giveaway ended];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
$let[condition;$checkcontains[$getmessagevar[joinedusers;$interactiondata[message.id]];$authorid]]
$let[participated;$sum[$getmessagevar[joined;$get[msg]];1];$get[msg]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`})
bot.interactionCommand({
name:"reroll",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (REROLLED) 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Winner After Reroll:** <@$get[winner]>\n**Ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[Congratulations <@$get[winner]>! You won the reroll of **$get[prize]**;no]
$onlyif[$get[winner]!=;No winner decided due to lack of participation]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Rerolled the giveaway];true;This giveaway has not ended yet];false;You do not have enough perms];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;$replacetext[$replacetext[$get[condition];true;perform];false;false]];false;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`})
bot.interactionCommand({
name:"end",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (FORCE ENDED) 🎉:}{thumbnail:https://media.discordapp.net/attachments/896847103647694862/900376604935606292/ffff.gif?width=147&height=147}{title:$get[prize]}{description:**Hosted By#COLON#** <@$authorid>\n**Winner After Force End:** <@$get[winner]>\n**Ended** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[Congratulations <@$get[winner]>! You won the giveaway(force ended) of **$get[prize]**;no]
$onlyif[$get[winner]!=;No winner decided due to lack of participation]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Ended the giveaway];true;This giveaway has already ended];false;You do not have enough perms];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`})

bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Your mythical gem expired!]
 $setGlobalUserVar[gem2on;off;$timeoutData[userID]]`
})




bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Your Silver gem expired!]
 $setGlobalUserVar[gem1on;off;$timeoutData[userID]]`
})

bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Your laser boost has just run out!]
 $setGlobalUserVar[lasere;false;$timeoutData[userID]]`
})

bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Your premium has just run out!]
 $setGlobalUserVar[premium;false;$timeoutData[userID]]`
})



bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Oh no Your passive mode ran out !]
 $setGlobalUserVar[passive;false;$timeoutData[userID]]`
})




bot.command({
name: "ccadd",
code: `
$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
$setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/]
Successfully added $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] to the commands list, type \`$getservervar[prefix]cclist\` to see all available commands
$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{description:Command \`$tolowercase[$message[1]]\` is available in the command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
$argscheck[>2;{description:Correct use \n\`\`\`\n$getservervar[prefix]ccadd <trigger> <response>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
})


bot.command({
name: "ccdel",
code: `
$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
Successfully cleared command $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;{description:Command \`$tolowercase[$message]\` not available in the command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
$argscheck[>1;{description:Correct use \n\`\`\`\n$getservervar[prefix]ccdel <trigger>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}) 

bot.command({
name: "cclist",
code: `
$title[**__Custom Commands__**]
$color[RANDOM]
$thumbnail[https://images-ext-2.discordapp.net/external/swRdKls7P6ywC1LugeV80TdPKLPFPKI_9XRttmdAjRU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/899810192621961216/385798d1182bf64e110229bc560c3d75.webp?width=421&height=421]
$description[\`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`]
$addtimestamp
$onlyif[$gettextsplitlength>=2;{description:There are no custom commands on the server \`$servername\`}{color:ff2050}]
$textsplit[$getservervar[ccmd];/] 
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`
}) 






bot.command({
name: "$alwaysExecute",
code: `
$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;]
$onlyif[$isbot[$authorid]==false;]
$textsplit[$getservervar[ccmd];/] 
`
})

bot.reactionAddCommand({
channel:"$channelid",
code:`$if[$suppresserrors$getmessagevar[smid]$suppresserrors==]
$setmessagevar[smid;$splittext[1]]
$textsplit[$channelsendmessage[$getservervar[schannel];**⭐ $reactioncount[$channelid;$messageid;⭐]** | <#$channelid> | Originally Posted By <@$get[a]>{author:$usertag[$get[a]]}{description:$getmessage[$channelid;$messageid;content]}{field:Original Message:[Jump To Message!](https://discord.com/channels/$guildid/$channelid/$messageid):no}{image:$replacetext[$replacetext[$isvalidlink[$messageattachment];true;$messageattachment];false;]}{color:YELLOW}{footer:Starred At $day-$month-$year | StarBoard System Of $username[$clientid]};yes]; ]
$let[a;$getmessagevar[author;$messageid]]
$suppresserrors
$else
$editmessage[$getmessagevar[smid];**⭐ $reactioncount[$channelid;$messageid;⭐]** | <#$channelid> | Originally Posted By <@$get[a]>{author:$usertag[$get[a]]}{description:$getmessage[$channelid;$messageid;content]}{field:Original Message:[Jump To Message!](https://discord.com/channels/$guildid/$channelid/$messageid):no}{image:$replacetext[$replacetext[$isvalidlink[$messageattachment];true;$messageattachment];false;]}{color:YELLOW}{footer:$getembed[$getservervar[schannel];$getmessagevar[smid];footer]};$getservervar[schannel]]
$let[a;$getmessagevar[author]]
$endif
$onlyif[$suppresserrors$reactioncount[$channelid;$messageid;⭐]$suppresserrors>=$getservervar[sreq];]
$onlyif[$emojitostring==⭐;]
$onlyif[$serverchannelexists[$getservervar[schannel]]==true;]
$onlyif[$getservervar[sreq]!=0;]`})
bot.reactionRemoveCommand({
channel:"$channelid",
code:`$if[$suppresserrors$reactioncount[$channelid;$messageid;⭐]$suppresserrors!=0]
$editmessage[$getmessagevar[smid];**⭐ $reactioncount[$channelid;$messageid;⭐]** | <#$channelid> | Originally Posted By <@$get[a]>{author:$usertag[$get[a]]}{description:$getmessage[$channelid;$messageid;content]}{field:Original Message:[Jump To Message!](https://discord.com/channels/$guildid/$channelid/$messageid):no}{image:$replacetext[$replacetext[$isvalidlink[$messageattachment];true;$messageattachment];false;]}{color:YELLOW}{footer:$getembed[$getservervar[schannel];$getmessagevar[smid];footer]};$getservervar[schannel]]
$let[a;$getmessagevar[author]]
$suppresserrors
$onlyif[$suppresserrors$reactioncount[$channelid;$messageid;⭐]$suppresserrors>=$getservervar[sreq];]
$else
$deletemessage[$getservervar[schannel];$getmessagevar[smid]]
$suppresserrors
$endif
$onlyif[$suppresserrors$messageexists[$getservervar[schannel];$getmessagevar[smid]]$suppresserrors==true;]
$onlyif[$replacetext[$emojitostring;⭐;]==;]
$onlyif[$channelexists[$getservervar[schannel]]==true;]
$onlyif[$getservervar[sreq]!=0;]`})

bot.command({
name: "blacklist", 
code: `$setGlobalUserVar[Blacklist;true;$findUser[$message]]
$senddm[$findUser[$message];**$username[$findUser[$message]]#$discriminator[$findUser[$message]] you are blacklisted now**]
$userTag[$findUser[$message]] has been blacklisted!!
$onlyIf[$findUser[$message]==$authorid;nu]
$onlyForIDs[$botownerid;896846485805744168;**⛔ Only the owner can use this command**]`
})
 
bot.command({
name: "unblacklist", 
code: `$setGlobalUserVar[Blacklist;false;$findUser[$message]]
**$username[$findUser[$message]]#$discriminator[$findUser[$message]] ✅ You are no longer on the blacklist**

$onlyForIDs[$botownerid;896846485805744168;**⛔ You are not the owner**]`
})

bot.deletedCommand({
 channel: "$channelID",
 code: `$setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]
 $setChannelVar[snipe_channel;$channelID]
 $setChannelVar[snipe_date;$day $month $year - $hour:$minute]`
});

 
bot.command({
name: "snipe",
code: `$color[RANDOM]
$author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
$description[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]
$footer[#$channelName[$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]] | $getChannelVar[snipe_date;$mentionedChannels[1;yes]]]
$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;Theres nothing to snipe in <#$mentionedChannels[1;yes]>]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
`
})


bot.command({
name: "setavatar",
code: `
**Changed my avatar to**
$image[$messsage]
$setBotAvatar[$message]
$onlyForIDS[$botownerid;896846485805744168;]`})

bot.command({
name: "setname",
code:` **Changed my name to** \`$message\`
$setBotName[$message]
$onlyForIDS[$botownerid;896846485805744168;]`})


bot.onReactionAdd()
 bot.onReactionRemove()
 bot.onLeave()
 bot.onJoined()
 bot.onGuildJoin()
 bot.onGuildLeave()
 bot.onBanAdd()
 bot.onTypingStart()
 bot.onRateLimit()
 bot.onInviteCreate()
 bot.onChannelDelete()
 bot.onChannelUpdate()
 bot.onChannelCreate()
 bot.onInviteDelete()
 bot.onVoiceStateUpdate()
 bot.onRoleUpdate()
 bot.onMemberUpdate()
 bot.onRoleDelete()
 bot.onRoleCreate()
 bot.onBanRemove()
 bot.onMessageUpdate()
 bot.onPresenceUpdate()
 bot.onUserUpdate()
 bot.onMessageDelete()
 bot.onGuildUpdate()
 bot.onEmojiCreate()
 bot.onEmojiUpdate()
 bot.onEmojiDelete()
 bot.onMessageDeleteBulk()
 bot.onWebhookUpdate()
 bot.onChannelPinsUpdate()
 bot.onFunctionError()
 bot.onVariableCreate()
 bot.onVariableUpdate()
 bot.onVariableDelete()
 bot.onApplicationCmdCreate()
 bot.onApplicationCmdUpdate()
 bot.onApplicationCmdDelete()

bot.command({
name: "circle",
code: `
$image[https://frenchnoodles.xyz/api/endpoints/circle/?image=$userAvatar[$mentioned[1;yes]]]`
})

bot.command({
name: "rt",
code: `
$replaceText[$message[1];$message[2];$message[3]
$onlyForIDS[$botownerid;896846485805744168;]
`
})



  
  








/* soundboard */

bot.command({
name: "trapcall",
code: `
**Only elites shall answer :eyes:** 
$playSong[https://youtu.be/Na6r5_XPOtk;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})

bot.command({
name: "amogus",
code: `
**Sussy baaka** 
$playSong[https://youtu.be/zhdNANsw0Jo;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})



bot.command({
name: "sus",
code: `
**Sus ngl** 
$playSong[https://youtu.be/neeBnp9JpCE;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})


bot.command({
name: "dripsus",
code: `
**drip sus** 
$playSong[https://youtu.be/grd-K33tOSM;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})




bot.command({
name: "bababoey",
code: `
**Bababoey** 
$playSong[https://youtu.be/ia3Tc9FTgk0;1m;yes;yes;{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
$onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
$onlyIf[$voiceID!=;join a vc first]`})

bot.command({
  name: "addemoji",
  aliases: "steal",
  code:`Emoji $addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$checkCondition[$checkContains[$message[1];<]$checkContains[$message[1];:]$checkContains[$message[1];>]==truetruetrue]$isNumber[$message[1]];truefalse;$replaceText[$advancedTextSplit[$message[1];:;3];>;]];falsetrue;$message[1]];$message[2];yes] added with the name -> **$message[2]**
 $onlyIf[$charCount[$message[2]]>=2;⛔ **You must put a longer name over than \`2 chars\`**]
 $onlyIf[$message[2]!=;**Usage**: \`addemoji <emoji | emojiID> <name>\`]
$onlyPerms[manageemojis;**You dont have the permission to use this command**]
$onlyBotPerms[manageemojis;**I dont have the permission to use this command**]
$suppressErrors`
})

bot.command({
name: "setsymbol",
aliases: ['set-symbol','symvol','set symbol'],
code: `
**Successfully set $message as new money symbol**
$setServerVar[esimbol;$message]
$setServerVar[simbol;$message]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**You need** \`premium\` **for this command**]
$onlyPerms[manageserver;you need \`MANAGE_SERVER\` perms]
`
})

bot.joinCommand({
  channel: "$systemChannelID",
  code: `
  $setGlobalUserVar[cash;$random[5000000;100000000]]
  $setGlobalUserVar[evil;$random[1000000;10000000]]
$setGlobalUserVar[joker;$random[100;999]]
$setGlobalUserVar[bank;50000000000]
$setGlobalUserVar[ticket;$random[100;10000]]
$setGlobalUserVar[plant;$random[100000;9999999]]
$setGlobalUserVar[bag;$random[500;10000]]
$setGlobalUserVar[trophy;$random[5000;500000]]
$setGlobalUserVar[bc;150000000000]
$onlyIf[$isbot[$authorid]==true;]
  `})




bot.command({
name:"set-levelling",
aliases:"levelling",
usage:"set-levelling (reset/<optional channel> <optional message>)",
description:"Set your levelling. If no message is specified, the original message is sent.",
category:"Levelling",
code:`$if[$message==reset]
$setservervar[levelling;false]
I successfully reset levelling for this server!
$else
$setservervar[levelling;true]
$setservervar[level_channel;$findchannel[$message[1]]]
$setservervar[level_msg;$replacetext[$replacetext[$checkcondition[$message[2]==];true;$getservervar[level_msg]];false;$nomentionmessage]]
Levelling system successfully set up! If you did not use any place holders, and want to use them, check below ->
{user.name} -> $username
{user.mention} -> <@$authorid>
{level} -> 1
$onlyif[$mentionedchannels[1]!=;Could not find the channel!]
$endif
$onlyperms[manageserver;Not enough permissions! You need manage server permissions to execute this!]`})
 
 
bot.command({
name:"lrole",
aliases:"level-role",
category:"Levelling",
usage:"lrole add/remove <level> <role>",
description:"Add a level up role!",
code:`$if[$message[1]==add]
$setservervar[level_order;$getservervar[level_order]$message[2]/]
$setservervar[level_roles;$getservervar[level_roles]$findrole[$messageslice[2]]/]
I successfully added $rolename[$findrole[$messageslice[2]]] to the level \`$message[2]\`
$argscheck[>2;Enter atleast 3 arguments! $getservervar[prefix]lrole <add/remove> <level> <role>]
$elseif[$message[1]==remove]
$setservervar[level_order;$replacetext[$getservervar[level_order];$message[2]/;;1]]
$setservervar[level_roles;$replacetext[$getservervar[level_roles];$splittext[$findtextsplitindex]/;;1]]
I successfully removed the role of the level \`$message[2]\`
$onlyif[$findtextsplitindex[$message[2]]!=0;Could not find the role!]
$textsplit[$getservervar[level_order];/]
$endelseif
$else
Use either \`add\` or \`remove\`!
$endif
$onlyif[$isnumber[$message[2]]==true;Not a valid number!]
$onlyperms[manageserver;Not enough permissions!]`})
 
 
bot.command({
name:"lmsg",
aliases:"level-message",
category:"Levelling",
usage:"lmsg add/remove <role> <message>",
description:"Add a custom level up message for a specific level!",
code:`$if[$message[1]==add]
$setservervar[level_morder;$getservervar[level_morder]$message[2]/]
$setservervar[level_msges;$getservervar[level_msges]$messageslice[2]/]
I successfully added the message **$messageslice[2]** to the level \`$message[2]\`
$argscheck[>2;Enter atleast 3 arguments! $getservervar[prefix]lmsg <add/remove> <level> <message>]
$elseif[$message[1]==remove]
$setservervar[level_morder;$replacetext[$getservervar[level_morder];$message[2]/;;1]]
$setservervar[level_msges;$replacetext[$getservervar[level_msges];$advancedtextsplit[$getservervar[level_msges];/;$findtextsplitindex[$message[2]]]/;;1]]
I successfully removed the role of the level \`$message[2]\`
$textsplit[$getservervar[level_morder];/]
$onlyif[$findtextsplitindex[$message[2]]!=0;Could not find the level!]
$endelseif
$else
Use either \`add\` or \`remove\`!
$endif
$onlyperms[manageserver;Not enough permissions!]`})
 
 
bot.command({
name:"rank",
aliases:"level",
category:"Levelling",
description:"Check the rank of a user.",
usage:"rank <optional user>",
code:`$if[$message==]
$author[Rank of $usertag[$get[user]];$authoravatar]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=00FF00&isboosting=false]
$color[RANDOM]
$addtimestamp
$let[user;$authorid]
$else
$suppresserrors
$addtimestamp
$color[RANDOM]
$author[Rank of $usertag[$get[user]];$authoravatar]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=#00FF00&isboosting=false]
$let[user;$replacetext[$replacetext[$checkcondition[$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]==undefined];true;$findmember[$message;yes]];false;$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]]]
$endif
$onlyif[$getservervar[levelling]==true;The levelling system is disabled!]`})
 
 

 
 
bot.command({
name:"$alwaysExecute",
code:`$suppresserrors
$giverole[$authorid;$advancedtextsplit[$getservervar[level_roles];/;$findtextsplitindex[$getuservar[rank]]]]
$textsplit[$getservervar[level_order];/]
$setuservar[rank;$sum[$getuservar[rank];1]]
$setUserVar[req;$truncate[$sum[$getuservar[req];$math[$getuservar[req]*1/2]]]]
$setuservar[exp;0]
$channelsendmessage[$replacetext[$replacetext[$checkcondition[$getservervar[level_channel]==];true;$channelid];false;$getservervar[level_channel]];$usertag[$authorid]{author:$usertag levelled up!:$authoravatar}{thumbnail:$authoravatar}{timestamp}{description:$replacetext[$replacetext[$replacetext[$get[msg];{user.name};$username];{user.mention};<@$authorid>];{level};$sum[$getUserVar[rank];1]]}{color:BLUE}]
$let[msg;$getservervar[$replacetext[$replacetext[$checkcondition[$findtextsplitindex[$sum[$getuservar[rank]];]==0];true;level_msg];false;level_msges]]]
$textsplit[$getservervar[level_morder];/]
$onlyIf[$getUserVar[exp]>=$getUserVar[req];]
$onlyif[$getservervar[levelling]==true;]
$suppresserrors`})
 
 

bot.command({
name:"$alwaysExecute",
code:`$setUserVar[exp;$sum[$getUserVar[exp];$random[4;8]]]
$cooldown[7s]
$onlyif[$getservervar[levelling]==true;]`})


