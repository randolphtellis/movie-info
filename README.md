# Movie Info

> An simple movie search, built with Vue.js

[Demo](http://movies-info.s3-website-ap-southeast-2.amazonaws.com/)

## Supported browsers

Supported on the latest version of the following browsers.

- [x] Safari for MacOS, iOS
- [x] Firefox for Windows, MacOS, Android
- [x] Google Chrome for Windows, MacOS, iOS, Android
- [x] Opera for Windows, MacOS,
- [x] Edge for Windows

## Supported features

* Auto-search (delayed key entry)
* History state
* Mobile responsive

## Local development

**Prerequisites:** NPM, Node

```
npm i
npm run dev
```
The app will spin up at [http://localhost:8080](http://localhost:8080)

## Production deployment

```
npm i
npm run build
```
A copy of the production build will appear in `/dist`, ready for deployment.

## Tech choices

* Frontend: Vue (2.5.21)
* Unit tests: Jest (Unfinished)
* State management: Vuex
* Styles: SCSS using Element-UI framework.
