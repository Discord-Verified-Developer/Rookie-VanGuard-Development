module.exports = [{
  name: "set-welcome-channel",
  category: "Welcome",
  aliases: ['setwelcomechannel'],
  code: `$setServerVar[welcomeChannel;$mentionedChannels[1]]
  Successfully set your welcome channel to <#$mentionedChannels[1]>
  $onlyIf[$mentionedChannels[1]!=;Mention a channel to set as your welcome channel]
$onlyPerms[managechannels;you need \`Manage channels\` permission]`
}, {
  name: "setwelcome-msg",
  category: "Welcome",
  aliases: ['setwelcomemsg'],
  code: `$setServerVar[welcomeMsg;$message]
  Successfully set your welcome message to \`$message\`.
  
  If you want to use placeholders, these are the following:
  \`\`\`{user.ping}: pings the user who joined
  {user.tag}: returns the tag and username
  {user.name}: returns the username\`\`\`
  $onlyIf[$message!=;Input something for your welcome message to be]
$onlyPerms[managechannels;you need \`Manage channels\` permission]`
}, {
  name: "set-welcome-bg",
  category: "Welcome",
  aliases: ['setwelcomebg'],
  code: `
  $setServerVar[welcomeBg;$message[1]]
  Successfully set your welcome card bg!
  $onlyIf[$stringStartsWith[$message[1];https://]==true;You must enter a valid image link for your welcome bg to be]
$onlyPerms[managechannels;you need \`Manage channels\` permission]`
}, {
  name: "set-goodbye-channel",
  category: "Welcome",
  aliases: ['setgoodbyechannel'],
  code: `$setServerVar[goodbyeChannel;$mentionedChannels[1]]
  Successfully set your goodbye channel to <#$mentionedChannels[1]>
  $onlyIf[$mentionedChannels[1]!=;Mention a channel to set as your goodbye channel]
$onlyPerms[managechannels;you need \`Manage channels\` permission]`
}, {
  name: "setgoodbye-msg",
  category: "Welcome",
  aliases: ['setmsg'],
  code: `$setServerVar[goodbyeMsg;$message]
  Successfully set your goodbye message to \`$message\`.
  
  If you want to use placeholders, these are the following:
  \`\`\`{user.ping}: pings the user who joined
  {user.tag}: returns the tag and username
  {user.name}: returns the username\`\`\`
  $onlyIf[$message!=;Input something for your goodbye message to be]
$onlyPerms[managechannels;you need \`Manage channels\` permission]`
}, {
  name: "set-goodbye-bg",
  category: "Welcome",
  aliases: ['setgoodbyebg'],
  code: `
  $setServerVar[goodbyeBg;$message[1]]
  Successfully set your goodbye card bg!
  $onlyIf[$stringStartsWith[$message[1];https://]==true;You must enter a valid image link for your goodbye bg to be]
$onlyPerms[managechannels;you need \`Manage channels\` permission]`
}, {
  name: "disable-welcome",
  category: "Welcome",
  aliases: ['disablewelcome'],
code: `
successfully disabled the welcome channel
$resetServerVar[welcomeChannel]
$onlyPerms[managechannels;you need \`Manage channels\` permission]`
}, {
  name: "disable-goodbye",
  category: "Welcome",
  aliases: ['disablegoodbye'],
  code: `successfully disabled the goodbye channel
$resetServerVar[goodbyeChannel]
$onlyPerms[managechannels;you need \`Manage channels\` permission]`
}]