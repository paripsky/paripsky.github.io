import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Flex, Heading, Link, Tag, Text } from '@chakra-ui/react';
import React from 'react';

export type LinkCardProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

function LinkCard({ title, description, href, tags }: LinkCardProps) {
  return (
    <Flex flexDirection="column">
      <Link href={href} isExternal>
        <Heading fontSize="xl">
          {title} <ExternalLinkIcon mx="2" />
        </Heading>
      </Link>
      <Text fontSize="md" whiteSpace="pre" color="neutral.300">
        {description}
      </Text>
      <Flex gap="2" mt="2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Flex>
    </Flex>
  );
}

export default LinkCard;
