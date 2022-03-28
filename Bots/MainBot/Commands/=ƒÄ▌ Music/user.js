module.exports = ({
    name: "user",
  category:"Music",
  cooldown: "3s",
  code: `$setServerVar[userid;$mentioned[1]]
$description[\`$userTag[$mentioned[1]]\` just only can execute command now.]
$addTimestamp
$color[$getVar[color]]
$addCmdReactions[✅]
$onlyIf[$isBot[$mentioned[1]]!=true;Failed.]
$onlyIf[$mentioned[1]!=;Failed.]
$argsCheck[1;Mention someone]
$cooldown[$commandInfo[user;cooldown];Please wait **%time%** before using again.]
$onlyPerms[manageserver;Missing Permission, **Manage Server** - User]`
})