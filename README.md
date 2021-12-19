# CLI - Messages Manager Service
CLI to use Messages Manager API

## Requirements
For using CLI you will only need Node.js installed in your environement.

## Getting started with the API

- run ```git clone https://github.com/shaharelbaz1/cli-messages-manager.git``` to clone the project (or download the zip file).
- run ```cd cli-messages-manager``` to get into the clone project.
- run ```npm install``` to install the dependencies.

Now, to start using CLI, please run command- ```node index.js --help``` to see your options.

## Operations

###### Get messages list:
```node index.js --retrieve```

###### Get message by ID:
```node index.js --retrieveID 61be52a26cf77bfc8c36d331```

###### Create message:
```node index.js --create 'hii' 2334234 324342```

###### Update message:
```node index.js --update 61bfa884efce19f951b2d160 'hiiiih' 25334234 324342```

###### Delete message:
```node index.js --delete 61bfa884efce19f951b2d160```
