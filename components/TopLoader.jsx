'use client';

import NextTopLoader from 'nextjs-toploader';

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#FBB923"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #FBB923, 0 0 5px #E0A010"
    />
  );
}
