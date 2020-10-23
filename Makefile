THIS_DIR := $(CURDIR)

create: 
	yarn install && rm -rf ./src/database/database.sqlite && touch ./src/database/database.sqlite && yarn ts-node-dev ./node_modules/typeorm/cli.js migration:run && yarn dev

init: 
	yarn dev
