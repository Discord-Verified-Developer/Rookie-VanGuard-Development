module.exports = ({
     name: "user-disable",
  category:"Music",
  cooldown: "3s",
  code: `$setServerVar[userid;default]
$description[Change to default.]
$color[$getVar[color]]
$addCmdReactions[✅]
$addTimestamp
$onlyIf[$getServerVar[userid]!=default;Already default!]
$cooldown[$commandInfo[user-disable;cooldown];Please wait **%time%** before using again.]
$onlyPerms[manageserver;Missing Permission, **Manage Server** - User]`
})