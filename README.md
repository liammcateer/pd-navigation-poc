# nextjs property details routing POC

## Getting started

1. Install dependencies: `npm i`
2. Start the mock server `node mockServer.js`
3. Start the main app in another terminal tab:  
   a. Dev mode: `npm run dev`  
   b. Prod mode: `npm run build && npm run start`
4. Server will be running at `http://localhost:3000`

## Context and comparison of options

https://serko.atlassian.net/wiki/x/AQB_OQE

## This repo

This repo implements query param based routing and parallel routes with fetch deduplication (mor info in the linked doc).
It has support for two different rendering methods: stacked drawers, and conditional rendering.
To change the mode, open `src/app/mode.ts` and choose `conditional` or `drawer`.
