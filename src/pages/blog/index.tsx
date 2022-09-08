import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, Tag, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

import DefaultLayout from '../../layouts/DefaultLayout';
import { dateFromISO, formatDate } from '../../utils/dates';
import getPosts, { PostMeta } from '../../utils/getPosts';

export type BlogProps = {
  posts: PostMeta[];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <DefaultLayout title="Blog by @paripsky">
      <Flex alignItems="center" m="4" flexDirection="column">
        <Box display="inline-block" className="blog-post" maxWidth="5xl" mx="auto">
          <Heading
            textAlign="center"
            fontSize="4xl"
            mt={{ base: '1em', md: '20vh' }}
            mb="4">
            Blog
          </Heading>
          <Box m="4">
            {posts.map((post) => {
              return (
                <Box key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <Heading fontSize="xl">
                      {post.title} <ExternalLinkIcon mx="2" />
                    </Heading>
                  </Link>
                  <Box>
                    <Text as="span">by {post.author}</Text>
                    <Text as="span" ml="2" fontSize="md" color="neutral.300">
                      Last updated {formatDate(dateFromISO(post.updatedAt))}
                    </Text>
                  </Box>
                  <Text fontSize="lg" color="neutral.300">
                    {post.description}
                  </Text>

                  <Box mt="2">
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Flex>
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
