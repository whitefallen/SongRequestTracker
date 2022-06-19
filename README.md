
# SongRequestTracker

A Project composed of multiple apps - Bot , Backend and Frontend 

It is used to track Song requests in Twitch channels for Beat Saber made via the !bsr command

Every Request gets stored in a database to keep track of what was requested, it can lead to getting more insight of what your chat wants to be played and how often certain songs are requested.

The data can be displayed via hitting the endpoint of the backend api under ``GET [ENV_BACKEND_URL]/api/songs`` or by using the Frontend provided.
## Tech Stack

**Frontend:** React, TailwindCSS

**Bot:** Node, TMI.js

**Backend** Java, Spring Boot


## Installation

Clone this repo with git, or download it.

Copy the .env.example file to a .env file, and replace the environment values with yours

```bash
  cd SongRequestTracker
  cp .env.example .env
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`USERNAME` - your bot/user-name
`TOKEN` - your bot/user oauth token
`CHANNELS` - Comma separated list of channels listening to
`DB_USERNAME` - Database username
`DB_PASSWORD` - Database password
`FRONTEND_PORT` - Port that exposed the Frontend
`BACKENDAPI` - Url for the Backend
## Deployment

To deploy this project run

```bash
  docker-compose up -d
```


## Usage/Examples

When a ``!bsr [id]`` command is issued the bot sends the song that was requested to the backend.


## Authors

- [@whitefallen](https://www.github.com/whitefallen)

