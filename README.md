# ENS bot

This is a simple dapp / bot to participate in auctions for .eth names on ENS via Status.
Very alpha. Such bleeding edge. Wow.

https://www.youtube.com/watch?v=mUtxNbbs0jU

Submission: https://github.com/status-im/hackathon/issues/36

```
{"whisper-identity": "36-ens-broker",
  "name":             "#36 ENS DApp and bot",
  "bot-url": "http://ensbot.legogris.se/public/bot.js"}
```

##Running Locally

Install `status-dev-cli`

```bash
npm install -g status-dev-cli
```

```bash
npm install
mv set-env-sample.sh set-env.sh
# Add your mobile device and host urls into set-env.sh. Device url can be found with status-dev-cli scan
# Change bot.js `host` variable to the same host url as in set-env.sh
source ./set-env.sh # for mac
# Open Status application
npm start # should auto add the app into status
```
