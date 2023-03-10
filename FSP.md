# 5 Reasons To Use Next.js Over Plain React

## 1. Routing: Fyle system

- After you create a file like `about.tsx`, the route `http://localhost:3000/about` will be available
- It works even if you create a folder like `tutorials` and put a file `javascript.tsx` inside, it will be available on `http://localhost:3000/tutorials/javascript`

## 2. Code Splitting

- Out of the box, automatic, no need for special code
- When we run `npm run build`, Next automatically generates a file for each route we have

## 3. API Routes

- Serverless functions available (lambdas)
- Frontend can talk to this Serverless functions
- Useful when needs to talk with third party server, like Algolia or Stripe

## 4. Image optimization

- Next comes with some components that help with image optimization, like `next/image` or `next/legacy/image`
- Some attributes like `layout="responsive"` are deprecated, so we need to understand how's the new way to do it
- It requires a Node server to be used

## 5. Generating a Site

- We can generate a static site
- We can generate on backend with `next export`
- And can also have a mix of both worlds using `getStaticProps` and `getStaticPaths`
- The video doesn't get deep on how to use these functions though, and `next export` doesn't work with them empty
- After running `next export` the static files will be at `out` folder
