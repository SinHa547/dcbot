module.exports = {
  noPermission: 'You do not have permission to do this!',
  updated: 'Settings updated.',
  notSynced: 'You need to sync your account first.',
  ticketClosing: 'Ticket closing...',
  commands: {
    settings: {
      updateSettings: {
        description: "Updates client's settings.",
      },
    },
    profile: {
      description: 'Shows your profile.',
      title: '**My Profile**',
      embed: {
        username: '**Username**',
        email: '**Email**',
        credits: '**Credits**',
        role: '**Rank**',
        lastlogin: '**Last Login**'
      },
    },
  },
};
