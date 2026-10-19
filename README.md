
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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## CI and deployment

GitHub Actions runs a production build for every push and pull request.
The workflow is defined in `.github/workflows/ci.yml`.

To set up automatic deployments:

1. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
2. Import the `ganesh-d1/ORBIX` GitHub repository, authorizing Vercel to access
   it if prompted.
3. Keep the detected Next.js framework and repository root, then choose
   **Deploy**.
4. In the Vercel project's **Settings → Git**, confirm the production branch.
   Pushes to that branch create production deployments; pushes to other branches
   and pull requests create preview deployments.

Vercel's GitHub integration handles deployment, so no Vercel token or deployment
secrets need to be added to GitHub Actions. The Actions workflow validates code;
Vercel builds and deploys it. Add required runtime environment variables in
**Settings → Environment Variables** in Vercel, then redeploy.
