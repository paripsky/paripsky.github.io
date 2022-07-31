import { default as NextHead } from 'next/head';
import React from 'react';

export type HeadProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

function Head({
  title = 'A Portfolio website by @paripsky',
  description = 'A portfolio website by Yonatan Paripsky, A full stack web developer',
  imageUrl,
}: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
    </NextHead>
  );
}

export default Head;
