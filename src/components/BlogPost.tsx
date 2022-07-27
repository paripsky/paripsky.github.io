import { Box, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import { dateFromISO, formatDate } from '../utils/dates';

export type BlogPostProps = {
  title: string;
  author: string;
  description: string;
  updatedAt: string;
  tags: string[];
  children?: React.ReactNode;
};

function BlogPost({
  children,
  title,
  author,
  description,
  updatedAt,
  tags,
}: BlogPostProps) {
  const updateDate = useMemo(() => formatDate(dateFromISO(updatedAt)), [updatedAt]);

  return (
    <DefaultLayout
      title={`A blog post about ${title} by ${author}`}
      description={`A blog post about ${description}`}>
      <Flex>
        <Box display="inline-block" className="blog-post" maxWidth="5xl" m="auto" p="4">
          <Heading size="xl">{title}</Heading>
          <Box>
            <Text as="span">by {author}</Text>
            <Text as="span" ml="2" fontSize="md" color="neutral.300">
              Last updated {updateDate}
            </Text>
          </Box>
          <Text fontSize="lg" color="neutral.300">
            {description}
          </Text>

          <Box mt="2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Box>
          <Box p="4">{children}</Box>
        </Box>
      </Flex>
    </DefaultLayout>
  );
}

export default BlogPost;
