import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import DefaultLayout from '../../layouts/DefaultLayout';
import getPosts, { PostMeta } from '../../utils/getPosts';

export type BlogProps = {
  posts: PostMeta[];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <DefaultLayout>
      <Box>
        {posts.map((post) => {
          return (
            <Box as="a" href={`/blog/${post.slug}`} key={post.slug}>
              {post.description}
            </Box>
          );
        })}
      </Box>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
