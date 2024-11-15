const Discord = require('discord.js');
const api = require('../libs/axios.js');
const userData = require('../utils/userData.js');
const t = require('../utils/getTranslation.js')();

// Handle command
exports.run = async (client, interaction) => {
  // Get user data from cache
  const userDataCache = await userData.get(interaction.user.id);

  // If user is not synced, do nothing
  if (!userDataCache) {
    interaction.reply({
      content: t.notSynced,
      ephemeral: true,
    });
    return;
  }

  // Get user info from API
  const userInfo = await api.getUserInfo(interaction.user.id);

  const roles = userInfo.roles && userInfo.roles.length > 0
    ? userInfo.roles.map(role => role.name).join(", ")
    : "Member";

  const embed = new Discord.EmbedBuilder()
    .setTitle(t.commands.profile.title)
    .setDescription(
      t.commands.profile.embed.username +
        ': `' +
        userInfo.realname +
        '`\n' +
        t.commands.profile.embed.role +
        ': `' +
        roles +
        '`\n' +
        t.commands.profile.embed.lastlogin +
        ': `' +
        userInfo.lastlogin +
        '`'
    )
    .setThumbnail(`https://minotar.net/helm/${userInfo.realname}`)
    .setColor(1632000);

  interaction.reply({
    embeds: [embed],
    ephemeral: false,
  });
};

// Register command
const cmd = new Discord.SlashCommandBuilder()
  .setName('profile')
  .setDescription(t.commands.profile.description)
  .setDMPermission(false)
  .setDefaultMemberPermissions(8);

exports.data = cmd.toJSON();
