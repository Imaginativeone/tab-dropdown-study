This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Prisma + SQLite3 info

SQLite3 with Prisma ORM have been added to this project. Prisma supports many data providers, but below are steps for configuring the combination that has been tested so far.

Be sure to run `npm i` to install all deperencies if you've not run the project since Prisma and SQLite have been added
For transparency, the added dependencies are:

- prisma@6.0.1
- @prisma/client@6.0.1
- tsx@4.19.2

### Bootstrap your local SQLite instance

1. You'll want to start by creating an empty file for sqlite to use. You can do so with the following command in UNIX systems
   `cd prisma && touch dev.db`
   (I'm not sure what the Windows equiv is)

2. Either rename the .env.example file to .env or create your own .env with the path to your sqlite db if you've decided to do your own thing.

3. Next sync the schema with prisma by running the following command
   `npx prisma db push`
   You'll also have to rerun this after any additions, deletions, or edits to the `prisma/schema.prisma` file.

4. This project already contains a sample dataset as a JS array, so we can import it into a JS/TS file and use it as a seed source. That file exists at `prisma/seed.ts` - additionally, a seed script has already been added to package.json - so, unless you're making changes you should only have to run the following command
   `npm run prisma-seed`

5. If you'd like a nice UI to preview your data in, you can use Prisma Studio by running the following command
   `npx prisma studio`
