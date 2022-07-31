import fs from 'fs';
import path from 'path';

export type PostMeta = {
  author: string;
  description: string;
  slug: string;
  title: string;
  updatedAt: string;
  tags: string[];
};

const getPosts = async () => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'src', 'pages', 'blog'), {
    withFileTypes: true,
  });

  const posts = await Promise.all(
    dirFiles.map(async (file) => {
      if (!file.name.endsWith('.mdx')) return;

      const { meta } = await import(`../pages/blog/${file.name}`);

      const slug = file.name.replace(/.mdx$/, '');
      return { ...meta, slug } as PostMeta;
    }),
  );

  return posts.filter(Boolean);
};

export default getPosts;
