---
layout: default
title: Demo App Backend
nav_order: 3
---

# Pi Demo App Backend

Demo app's backend is using several environment variables, from which most have default values. In order to specify these, create `.env` file in the root backend directory. You can preview it in `.env.example` file. 

The only variable you need to provide is `PI_API_KEY`, which is required to authorize payments. You receive it upon app registration. For more guidelines on how to register you app refer to [Developer Portal - API Key](../../gettingStarted/devPortal/#api-key)

## Setup

In order to start, install dependencies:

#### `npm install` or `yarn install`

<br/>

and then run the server:

#### `npm start` or `yarn start`

<br/>

If everything is setup correctly you should see following message in the terminal:

```App platform demo app - Backend listening on port 8080!```

# MongoDB 
Demo app's backend uses local MongoDB server to store user data and sessions' details.

## Setup

If you haven't already, install MongoDB Community following the [official MongoDB docs](https://www.mongodb.com/docs/manual/administration/install-community/) and start MongoDB service. 

The default username, password and port for MongoDB are `root`, `password` and `27017` accordingly. If you have decided to change these values, make sure to update environment variables in backend `.env` file. 

In order to preview database, you can use Robo 3T or MongoDB Compass. 

