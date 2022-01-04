## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Styling (CSS)

I'm using [TailwindCSS](https://tailwindcss.com/) as the main CSS framework. It is `class` based CSS framework where you can change the styling by add/remove classes.

e.g.

```
in /src/pages/index.tsx
line 38:

<p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
Are You Interested To Join Us? Let&apos;s Grow Together!
</p>
```

you can change the text color to `green` by adding class named `text-green-500`. Where `500` is the value of share of green.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

The similar approach I'm using for [https://azuddin-engame.vercel.app/](https://azuddin-engame.vercel.app/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on others

For deployment on others, you will be needed to `build` the code using command below:

```bash
npm run export
# or
yarn export
```

Which will generate a `out` folder containing the website bundle. In which later, you can put it (serve it) on any server of your liking.

Ultimately, you can refer [Static HTML Deployment](https://nextjs.org/docs/advanced-features/static-html-export) for more details.

## Notes

1. Install `yarn`
2. open code repo, run `yarn`
3. run `yarn dev` which will serve the website to http://localhost:3000

## Software

1. Sourcetree
2. VSCode
3. yarn
