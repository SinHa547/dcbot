# Blocksin Discord Bot

Allow players to link their accounts and roles, login with Discord account, and reply support tickets on your Discord server. It's completely Open Source!

## Requirements

- Node.js 16.11.0 or newer is required.
- Git (for using git clone command) (optional)

## Installation

1. Install [Node.js](https://nodejs.org/en/download/)

2. Install [Git](https://git-scm.com/downloads)

3. Clone the repository:

```
git clone https://github.com/Blocksin/dcbot
```

4. Go to the repository folder:

```
cd dcbot
```

5. Install dependencies:

```
npm install
```

6. Setup .env ( This is in Google Drive )

## Running the bot

1. Go into the bot repo in terminal

```
cd dcbot
```

2. Build the docker container

```
docker build -t dcbot .
```

3. Run container

```
docker run -d dcbot
```

NOTE: Make sure any existing running docker containers have been stopped

## Updating the bot

1. Head into bot repo

```
cd dcbot
```

3. Pull from git

```
git pull origin main
```

4. Install npm

```
npm install
```

5. Build docker container

```
docker build -t dcbot .
```

6. Restart and run docker

```
docker stop dcbot
docker rm dcbot
docker run --name dcbot -d dcbot
```

NOTE: Make sure tests have been done before restarting bot in prod server

## Configuration .env

| Key                    | Description                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DISCORD_BOT_TOKEN      | Your bot's token. You can find it in the [Discord Developer Portal > Applications > Your Application > Bot](https://discord.com/developers/applications) |
| WEBSITE_URL            | Your website's URL. (https://blocksin.net)                                                                                                               |
| API_KEY                | Your Website API key. You can find it in the Dashboard > Settings > API                                                                                  |
| LANGUAGE               | The language of the bot. You can find the list of languages in the `languages` folder.                                                                   |
| DEBUG                  | Enable or disable debug mode.                                                                                                                            |
| ROLE_SYNC_CACHE_PERIOD | Role Sync Cache Period in seconds.                                                                                                                       |
