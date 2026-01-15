# nextjs property details routing POC

## Getting started

1. Install dependencies: `npm i`
2. Start the mock server `node mockServer.js`
3. Start the main app in another terminal tab:  
   a. Dev mode: `npm run dev`  
   b. Prod mode: `npm run build && npm run start`
4. Server will be running at `http://localhost:3000`

## Overview

This POC application has three approaches to sub-page navigation that will be used on mobile. In all examples, a cart is rendered, which makes use of a jotai atom. The cart is currently cleared on page reload, but this can be persisted.

### Using React.Context with next routing

In this example, we will make use of the file based routing that is built into Next.js to handle navigation to sub-pages. To make data fetching simple to share across pages, `React.Context`, `jotai` or `react-query` will be used. In this example, `React.Context` will be used, but we will most likely use `react-query` as that is available in the main repo.

The `layout.tsx` will fetch property details, and share it with the other pages via a context. The pages - property details, and other sub pages, will get data from a hook. This means that data isn't re-fetched when navigating.

Each sub-page is a standalone next.js page, and fully makes use of the file based router.

### Using Server Components with next routing

This is similar to the `React.Context` approach, in which Next.js file base routing is used. The only difference is that each page fetches it's own data, and makes use of the next.js data cache to persist the results across pages. To enable this, a `cacheId` is passed to each sub-page. This allows the cache to be reset on reload. Without the `cacheId`, the cache would persist all the time (or until some expiry time), or it wouldn't persist at all, meaning that each sub-page will re-load.

### Using tabs/conditional rendering with custom routing

This approach doesn't use any Next.js routing features, and instead uses query params to manually manage which "tab" is selected. The actuall implementation is to be decided, but essentially, this approach cwitches out components in the main root component based on what query param is set. Similar to how we do bottom sheets.
