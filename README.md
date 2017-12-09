# WildfireAnalysis

## Installation

Download the SQLite database from the [kaggle website](https://www.kaggle.com/rtatman/188-million-us-wildfires/data)


Install all the node js depedencies:

```shell
npm install
```

Create all the documents of all the fires for each year:

```shell
node ./Dataset/converter.js
```
Then run your mongo server:

```shell
mongod
```

Once done you can populate your mongo database with the json created earlier:

```shell
sh ./Dataset/importDocuments.sh
```
Now you will have a functionning database with all the data.
You check out the result of our analysis by opening index.html in your browser.
## Team 
- Christopher DE BOISVILLIER
- Pierre VALENTIN

