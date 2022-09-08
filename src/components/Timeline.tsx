import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export type TimelineEntry = {
  date: string | React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactElement;
};

export type TimelineProps = {
  children?: React.ReactNode;
  entries: TimelineEntry[];
};

function Timeline({ entries }: TimelineProps) {
  return (
    <Flex flexDirection="column">
      {entries.map((entry, index) => (
        <Flex
          key={index}
          mx="2"
          borderColor="primary.700"
          _notLast={{ borderLeft: '1px solid' }}>
          <Flex mb="8">
            <Flex
              transform="translate(-50%)"
              bg="primary.900"
              h="1em"
              borderRadius="full">
              {entry.icon}
            </Flex>
            <Flex flexDirection="column" mt="-1">
              <Flex flexWrap="wrap" fontWeight="semibold">
                {entry.title}
                &nbsp;{'//'}&nbsp;
                {entry.date}
              </Flex>
              <Flex>
                <Text as="span">{entry.description}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default Timeline;
