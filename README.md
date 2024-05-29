# Workspace

## Logo

Per cambiare il logo del portale è necessario inserire i seguenti loghi:

```bash
# @/static
logo.png
logo_meta.png
```

## .env
Il file `.env` ha bisogno dei seguenti valori:
```
BASE_URL=http://example.com/api
ENDPOINT=http://example.com
```
Il `BASE_URL` serve per tutte le chiamate fatte dal portale.

Il `ENDPOINT` serve per la chiamata di login (body) e per rimandare al vecchio portale.

## Apache Proxy

Per poter hostare file statici con Apache è necessario decommentare il seguente codice in `nuxt.config.js`
```js
router: {
  base: '/example.com/'
},
```
Il percorso da inserire `'/example.com/'` sarà il percorso che avrà la `Directory` presente nel file config di Apache nel `VirtualHost`.

## Cambio icone

Per cambiare le icone basta sostituire i seguenti file:
```bash
# @/static
add_ticket.png
background_image.png
favicon.ico
favicon.png
icon.png
no_documents.png
no_invoices.png
no_tickets_recents.png
no_tickets_waiting_for_response.png
no_tickets.png
logo.png
logo_meta.png
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Amplify Release

Qualsiasi cosa viene cambiata va fatto un commit.